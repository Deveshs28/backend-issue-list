const socketio = require("socket.io");
const tokenLib = require("./tokenLib.js");

let setServer = (server) => {
  var allOnlineUsers = [];
  let io = socketio.listen(server);

  let myIo = io.of("/");

  myIo.on("connection", (socket) => {
    socket.emit("verifyUser", "");

    /**
     * @apiGroup Listen
     * @api set-user
     * @apiDescription This event ("set-user") has to be listened by backend to authenticate current user and add it to online user list.
     *
     */
    socket.on("set-user", (authToken) => {
      tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
        if (err) {
          socket.emit("auth-error", {
            status: 500,
            error: "Please provide correct auth token",
          });
        } else {
          console.log("user set success");
          let currentUser = user.data;
          // setting socket user id
          socket.userId = currentUser.userId;
          socket.room = socket.userId;
          socket.join(socket.room);
          allOnlineUsers.push(currentUser.userId);
          console.log(allOnlineUsers);
        }
      });
    });

    /**
     * @apiGroup Emit
     * @api new-user-registered
     * @apiDescription This event ("new-user-registered") has to be emitted to frontend whenever new successfully user registered on system.
     *
     */
    /**
     * @apiGroup Listen
     * @api user-created
     * @apiDescription This event ("user-created") has to be listened by backend whenever any new user registered on system.
     *
     */
    socket.on("user-created", () => {
      console.log("New user created");
      myIo.emit("new-user-registered", ""); //Emit event to all connected sockets
    });

    /**
     * @apiGroup Emit
     * @api new-issue-created
     * @apiDescription This event ("new-issue-created") has to be emitted to all frontend user whenever any new issue added on system.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
        title: data.title,
        watcherList: data.watcherList,
      }
     */
    /**
     * @apiGroup Emit
     * @api issue-assgined
     * @apiDescription This event ("issue-assgined") has to be emitted to the online frontend user whenever any new issue assigned to the user.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
        title: data.title,
        assignedBy: data.createdBy,
      }
     */
    /**
     * @apiGroup Listen
     * @api issue-created-success
     * @apiDescription This event ("issue-created-success") has to be listened by backend whenever any new issues created on system.
     *
     */
    socket.on("issue-created-success", (data) => {
      const info = {
        issueId: data.issueId,
        title: data.title,
        watcherList: data.watcherList,
      };
      myIo.emit("new-issue-created", info);
      console.log("allOnlineUsers:", allOnlineUsers);
      if (allOnlineUsers.includes(data.assignedTo)) {
        const issueInfo = {
          issueId: data.issueId,
          title: data.title,
          assignedBy: data.createdBy,
        };
        socket.to(data.assignedTo).broadcast.emit("issue-assgined", issueInfo);
      }
    });

    /**
     * @apiGroup Emit
     * @api assign-issue-updated
     * @apiDescription This event ("assign-issue-updated") has to be emitted to the online frontend user whenever any issue assigned to the user gets updated.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
            title: data.title,
            updatedBy: data.updatedBy,
      }
     */
    /**
     * @apiGroup Emit
     * @api issue-update-on-system
     * @apiDescription This event ("issue-update-on-system") has to be emitted to all frontend user whenever any issue gets updated.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
        title: data.title,
        updatedBy: data.updatedBy,
      }
     */
    /**
     * @apiGroup Emit
     * @api single-issue-update
     * @apiDescription This event ("single-issue-update") has to be emitted to the online frontend user whenever any new issue get updated.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
        title: data.title,
        updatedBy: data.updatedBy,
      }
     */
    /**
     * @apiGroup Listen
     * @api issue-edit-success
     * @apiDescription This event ("issue-edit-success") has to be listened by backend whenever any issues gets updated.
     *
     */
    socket.on("issue-edit-success", (data) => {
      console.log(allOnlineUsers);
      console.log("issue-edit-success: ", data);
      const info = {
        issueId: data.issueId,
        title: data.title,
        updatedBy: data.updatedBy,
      };
      myIo.emit("single-issue-update", info);
      myIo.emit("issue-update-on-system", info);
      for (let userId of data.watcherList) {
        if (allOnlineUsers.includes(userId)) {
          const issueInfo = {
            issueId: data.issueId,
            title: data.title,
            updatedBy: data.updatedBy,
          };
          socket.to(userId).broadcast.emit("assign-issue-updated", issueInfo);
        }
      }
    });

    /**
     * @apiGroup Emit
     * @api assign-issue-deleted
     * @apiDescription This event ("assign-issue-deleted") has to be emitted to the online frontend user whenever any issue assigned to the user gets deleted.
     * @apiExample {object} Emit Request object
     *  {
            title: data.title,
      }
     */
    /**
     * @apiGroup Emit
     * @api issue-deleted-from-system
     * @apiDescription This event ("issue-deleted-from-system") has to be emitted to all frontend user whenever any issue gets deleted.
     *
     */
    /**
     * @apiGroup Emit
     * @api single-issue-deleted
     * @apiDescription This event ("single-issue-deleted") has to be emitted to the online frontend user whenever any new issue get deleted.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
      }
     */
    /**
     * @apiGroup Listen
     * @api issue-delete-success
     * @apiDescription This event ("issue-delete-success") has to be listened by backend whenever any issues gets deleted.
     *
     */
    socket.on("issue-delete-success", (data) => {
      console.log("issue-delete-success: ", data);
      const info = {
        issueId: data.issueId,
      };
      myIo.emit("single-issue-deleted", info);
      myIo.emit("issue-deleted-from-system", "");
      for (let userId of data.watcherList) {
        if (allOnlineUsers.includes(userId)) {
          const issueInfo = {
            title: data.title,
          };
          socket.to(userId).broadcast.emit("assign-issue-deleted", issueInfo);
        }
      }
    });

    /**
     * @apiGroup Emit
     * @api new-comment-added
     * @apiDescription This event ("new-comment-added") has to be emitted to the online frontend user whenever any new comment added to issue.
     * @apiExample {object} Emit Request object
     *  {
        issueId: data.issueId,
      }
     */
    /**
     * @apiGroup Listen
     * @api comment-added-success
     * @apiDescription This event ("comment-added-success") has to be listened by backend whenever any comment added on issue.
     *
     */
    socket.on("comment-added-success", (data) => {
      const info = {
        issueId: data.issueId,
      };
      myIo.emit("new-comment-added", info);
    });

    /**
     * @apiGroup Listen
     * @api disconnect
     * @apiDescription This event ("disconnect") has to be listened by backend whenever any user disconnects.
     *
     */
    socket.on("disconnect", (data) => {
      console.log("user is disconnected");
      console.log("onlineUSe", allOnlineUsers);
      allOnlineUsers.splice(allOnlineUsers.indexOf(socket.userId), 1);
      console.log(allOnlineUsers);
      socket.leave(data.userId);
    });
  });
};

module.exports = {
  setServer: setServer,
};
