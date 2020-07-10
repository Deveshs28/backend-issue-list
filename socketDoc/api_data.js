define({ "api": [
  {
    "group": "Emit",
    "type": "",
    "url": "assign-issue-deleted",
    "title": "",
    "description": "<p>This event (&quot;assign-issue-deleted&quot;) has to be emitted to the online frontend user whenever any issue assigned to the user gets deleted.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n           title: data.title,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "AssignIssueDeleted"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "assign-issue-updated",
    "title": "",
    "description": "<p>This event (&quot;assign-issue-updated&quot;) has to be emitted to the online frontend user whenever any issue assigned to the user gets updated.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n           title: data.title,\n           updatedBy: data.updatedBy,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "AssignIssueUpdated"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "issue-assgined",
    "title": "",
    "description": "<p>This event (&quot;issue-assgined&quot;) has to be emitted to the online frontend user whenever any new issue assigned to the user.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n       title: data.title,\n       assignedBy: data.createdBy,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "IssueAssgined"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "issue-deleted-from-system",
    "title": "",
    "description": "<p>This event (&quot;issue-deleted-from-system&quot;) has to be emitted to all frontend user whenever any issue gets deleted.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "IssueDeletedFromSystem"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "issue-update-on-system",
    "title": "",
    "description": "<p>This event (&quot;issue-update-on-system&quot;) has to be emitted to all frontend user whenever any issue gets updated.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n       title: data.title,\n       updatedBy: data.updatedBy,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "IssueUpdateOnSystem"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "new-comment-added",
    "title": "",
    "description": "<p>This event (&quot;new-comment-added&quot;) has to be emitted to the online frontend user whenever any new comment added to issue.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "NewCommentAdded"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "new-issue-created",
    "title": "",
    "description": "<p>This event (&quot;new-issue-created&quot;) has to be emitted to all frontend user whenever any new issue added on system.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n       title: data.title,\n       watcherList: data.watcherList,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "NewIssueCreated"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "new-user-registered",
    "title": "",
    "description": "<p>This event (&quot;new-user-registered&quot;) has to be emitted to frontend whenever new successfully user registered on system.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "NewUserRegistered"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "single-issue-deleted",
    "title": "",
    "description": "<p>This event (&quot;single-issue-deleted&quot;) has to be emitted to the online frontend user whenever any new issue get deleted.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "SingleIssueDeleted"
  },
  {
    "group": "Emit",
    "type": "",
    "url": "single-issue-update",
    "title": "",
    "description": "<p>This event (&quot;single-issue-update&quot;) has to be emitted to the online frontend user whenever any new issue get updated.</p>",
    "examples": [
      {
        "title": "Emit Request object",
        "content": "{\n       issueId: data.issueId,\n       title: data.title,\n       updatedBy: data.updatedBy,\n     }",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "SingleIssueUpdate"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "comment-added-success",
    "title": "",
    "description": "<p>This event (&quot;comment-added-success&quot;) has to be listened by backend whenever any comment added on issue.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "CommentAddedSuccess"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "disconnect",
    "title": "",
    "description": "<p>This event (&quot;disconnect&quot;) has to be listened by backend whenever any user disconnects.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "Disconnect"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "issue-created-success",
    "title": "",
    "description": "<p>This event (&quot;issue-created-success&quot;) has to be listened by backend whenever any new issues created on system.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "IssueCreatedSuccess"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "issue-delete-success",
    "title": "",
    "description": "<p>This event (&quot;issue-delete-success&quot;) has to be listened by backend whenever any issues gets deleted.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "IssueDeleteSuccess"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "issue-edit-success",
    "title": "",
    "description": "<p>This event (&quot;issue-edit-success&quot;) has to be listened by backend whenever any issues gets updated.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "IssueEditSuccess"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "set-user",
    "title": "",
    "description": "<p>This event (&quot;set-user&quot;) has to be listened by backend to authenticate current user and add it to online user list.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "SetUser"
  },
  {
    "group": "Listen",
    "type": "",
    "url": "user-created",
    "title": "",
    "description": "<p>This event (&quot;user-created&quot;) has to be listened by backend whenever any new user registered on system.</p>",
    "version": "0.0.0",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "UserCreated"
  }
] });
