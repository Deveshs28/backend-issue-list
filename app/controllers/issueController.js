const mongoose = require("mongoose");
const shortid = require("shortid");
const time = require("../libs/timeLib");
const response = require("../libs/responseLib");
const logger = require("../libs/loggerLib");
const check = require("../libs/checkLib");

const IssueModel = mongoose.model("IssueModel");
const Comments = mongoose.model("Comments");

let createIssue = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.body.title) {
        if (check.isEmpty(req.body.title)) {
          let apiResponse = response.generate(
            true,
            "Issue title is not valid",
            400,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(req.body.issueState)) {
          let apiResponse = response.generate(
            true,
            "Issue state is not valid",
            400,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(req.body.createdById)) {
          let apiResponse = response.generate(
            true,
            "Created By Id is not valid",
            400,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(req.body.createdByName)) {
          let apiResponse = response.generate(
            true,
            "Created By Name is not valid",
            400,
            null
          );
          reject(apiResponse);
        } else {
          resolve(req);
        }
      } else {
        logger.error(
          "Field missing error during issue creation",
          "issueController: createIssue()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let createNewIssue = () => {
    return new Promise((resolve, reject) => {
      let newIssue = new IssueModel({
        issueId: shortid.generate(),
        title: req.body.title,
        description: !check.isEmpty(req.body.description)
          ? req.body.description
          : "",
        issueState: req.body.issueState,
        createdByName: req.body.createdByName,
        createdById: req.body.createdById,
        assignedUserId: !check.isEmpty(req.body.assignedUserId)
          ? req.body.assignedUserId
          : "",
        assignedUserName: !check.isEmpty(req.body.assignedUserName)
          ? req.body.assignedUserName
          : "",
        createdOn: time.now(),
      });

      let watcherList = [];
      watcherList.push(req.body.createdById);
      if (!check.isEmpty(req.body.assignedUserId)) {
        if (req.body.createdById !== req.body.assignedUserId) {
          watcherList.push(req.body.assignedUserId);
        }
      }
      let watcherListUsers = [];
      watcherListUsers.push(req.body.createdByName);
      if (!check.isEmpty(req.body.assignedUserId)) {
        if (req.body.createdById !== req.body.assignedUserId) {
          watcherListUsers.push(req.body.assignedUserName);
        }
      }

      newIssue.watcherList = watcherList;
      newIssue.watcherListUsers = watcherListUsers;

      newIssue.save((err, newIssue) => {
        if (err) {
          console.log(err);
          logger.error(err.message, "issueController: createIssue", 10);
          let apiResponse = response.generate(
            true,
            "Failed to create new Issue",
            500,
            null
          );
          reject(apiResponse);
        } else {
          let newIssueObj = newIssue.toObject();
          resolve(newIssueObj);
        }
      });
    });
  };

  validateInput(req, res)
    .then(createNewIssue)
    .then((resolve) => {
      let apiResponse = response.generate(false, "Issue created", 200, resolve);
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let allIssueList = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.page) {
        if (req.params.recordCount) {
          resolve(req);
        } else {
          logger.error(
            "Field missing error during issue list",
            "issueController: issueList()",
            5
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during issue list",
          "issueController: issueList()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let issueCount = () => {
    return new Promise((resolve, reject) => {
      IssueModel.count({}, function (err, result) {
        if (err) {
          logger.error(err.message, "issueController:issueList", 10);
          let apiResponse = response.generate(
            true,
            "Failed to find issue data",
            500,
            null
          );
          reject(apiResponse);
        } else {
          resolve(result);
        }
      });
    });
  };

  let issueList = (count) => {
    return new Promise((resolve, reject) => {
      let pageNumber = parseInt(req.params.page);
      let recordCount = parseInt(req.params.recordCount);

      IssueModel.find()
        .skip(pageNumber > 0 ? (pageNumber - 1) * recordCount : 0)
        .limit(recordCount)
        .select("-__v -_id") //Hide the information which need not to send in response
        .lean() //Return plain javascript object instead of mongoose object on which we can perform function
        .exec((err, result) => {
          if (err) {
            logger.error(err.message, "issueController:issueList", 10);
            let apiResponse = response.generate(
              true,
              "Failed to find issue data",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info("No Issue found", "issueController:issueList", 5);
            let apiResponse = response.generate(
              true,
              "No Issue found",
              204,
              null
            );
            reject(apiResponse);
          } else {
            let resp = {
              count: count,
              issueList: result,
            };
            resolve(resp);
          }
        });
    });
  };

  validateInput(req, res)
    .then(issueCount)
    .then(issueList)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "All Issue data found",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let searchIssueList = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.body) {
        if (req.params.page) {
          if (req.params.recordCount) {
            console.log("req.body: ", req.body);
            if (check.isEmpty(req.body.query)) {
              logger.error(
                "Field missing error during search issue list",
                "issueController: searchIssueList()",
                6
              );
              let apiResponse = response.generate(
                true,
                "One or More Parameter(s) is missing",
                400,
                null
              );
              reject(apiResponse);
            } else {
              resolve(req);
            }
          } else {
            logger.error(
              "Field missing error during search issue list",
              "issueController: searchIssueList()",
              5
            );
            let apiResponse = response.generate(
              true,
              "One or More Parameter(s) is missing",
              400,
              null
            );
            reject(apiResponse);
          }
        } else {
          logger.error(
            "Field missing error during search issue list",
            "issueController: searchIssueList()",
            7
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during search issue list",
          "issueController: searchIssueList()",
          8
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let issueCount = () => {
    return new Promise((resolve, reject) => {
      IssueModel.count(
        {
          $or: [
            { title: { $regex: `.*${req.body.query}.*` } },
            { description: { $regex: `.*${req.body.query}.*` } },
          ],
        },
        // { title: { $regex: `.*${req.body.query}.*` } },
        function (err, result) {
          if (err) {
            logger.error(err.message, "issueController:searchIssueList", 10);
            let apiResponse = response.generate(
              true,
              "Failed to find search data",
              500,
              null
            );
            reject(apiResponse);
          } else {
            resolve(result);
          }
        }
      );
    });
  };

  let issueList = (count) => {
    return new Promise((resolve, reject) => {
      let pageNumber = parseInt(req.params.page);
      let recordCount = parseInt(req.params.recordCount);

      IssueModel.find(
        {
          $or: [
            { title: { $regex: `.*${req.body.query}.*` } },
            { description: { $regex: `.*${req.body.query}.*` } },
          ],
        }
        // { title: { $regex: `.*${req.body.query}.*` } }
      )
        .skip(pageNumber > 0 ? (pageNumber - 1) * recordCount : 0)
        .limit(recordCount)
        .select("-__v -_id") //Hide the information which need not to send in response
        .lean() //Return plain javascript object instead of mongoose object on which we can perform function
        .exec((err, result) => {
          if (err) {
            logger.error(err.message, "issueController:searchIssueList", 10);
            let apiResponse = response.generate(
              true,
              "Failed to find search issue data",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info("No Issue found", "issueController:searchIssueList", 5);
            let apiResponse = response.generate(
              true,
              "No Issue found",
              204,
              null
            );
            reject(apiResponse);
          } else {
            let resp = {
              count: count,
              issueList: result,
            };
            resolve(resp);
          }
        });
    });
  };

  validateInput(req, res)
    .then(issueCount)
    .then(issueList)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "All Issue data found",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let userIssueList = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.userId) {
        if (req.params.page) {
          if (req.params.recordCount) {
            resolve(req);
          } else {
            logger.error(
              "Field missing error during user issue list",
              "issueController: userIssueList()",
              5
            );
            let apiResponse = response.generate(
              true,
              "One or More Parameter(s) is missing",
              400,
              null
            );
            reject(apiResponse);
          }
        } else {
          logger.error(
            "Field missing error during user issue list",
            "issueController: userIssueList()",
            5
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during user issue list",
          "issueController: userIssueList()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let issueCount = () => {
    return new Promise((resolve, reject) => {
      IssueModel.count(
        {
          $or: [
            { assignedUserId: req.params.userId },
            { createdById: req.params.userId },
          ],
        },
        function (err, result) {
          if (err) {
            logger.error(err.message, "issueController:issueList", 10);
            let apiResponse = response.generate(
              true,
              "Failed to find issue data",
              500,
              null
            );
            reject(apiResponse);
          } else {
            resolve(result);
          }
        }
      );
    });
  };

  let issueList = (count) => {
    return new Promise((resolve, reject) => {
      let pageNumber = parseInt(req.params.page);
      let recordCount = parseInt(req.params.recordCount);

      IssueModel.find({
        $or: [
          { assignedUserId: req.params.userId },
          { createdById: req.params.userId },
        ],
      })
        .skip(pageNumber > 0 ? (pageNumber - 1) * recordCount : 0)
        .limit(recordCount)
        .select("-__v -_id") //Hide the information which need not to send in response
        .lean() //Return plain javascript object instead of mongoose object on which we can perform function
        .exec((err, result) => {
          if (err) {
            logger.error(err.message, "issueController:userissueList", 10);
            let apiResponse = response.generate(
              true,
              "Failed to find issue data",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            logger.info("No Issue found", "issueController:userissueList", 5);
            let apiResponse = response.generate(
              true,
              "No Issue found",
              204,
              null
            );
            reject(apiResponse);
          } else {
            let apiResp = {
              count: count,
              issueList: result,
            };
            resolve(apiResp);
          }
        });
    });
  };

  validateInput(req, res)
    .then(issueCount)
    .then(issueList)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "All User Issue data found",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let issueDetail = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        resolve(req);
      } else {
        logger.error(
          "Field missing error during issue detail",
          "issueController: issueDetail()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let getIssue = () => {
    return new Promise((resolve, reject) => {
      IssueModel.findOne({ issueId: req.params.issueId })
        .select("-__v -_id")
        .lean()
        .exec((err, result) => {
          if (err) {
            let apiResponse = response.generate(
              true,
              "Error while getting issue",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(
              true,
              "Issue detail not found",
              400,
              null
            );
            reject(apiResponse);
          } else {
            resolve(result);
          }
        });
    });
  };

  let comments = (issueModel) => {
    return new Promise((resolve, reject) => {
      Comments.find({ issueId: req.params.issueId })
        .select("-__v -_id")
        .lean()
        .exec((err, result) => {
          // let commentArr = [];
          // if (!check.isEmpty(result)) {
          //   commentArr.push(result);
          // }
          let model = {
            issue: issueModel,
            comments: result,
          };
          resolve(model);
        });
    });
  };

  validateInput(req, res)
    .then(getIssue)
    .then(comments)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Issue detail found",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let editIssue = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        resolve(req);
      } else {
        logger.error(
          "Field missing error during comment creation",
          "issueController: addComment()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let updateIssue = () => {
    return new Promise((resolve, reject) => {
      let options = req.body;
      console.log("req.body: ", req.body);
      IssueModel.update({ issueId: req.params.issueId }, options, {
        multi: true,
      }).exec((err, result) => {
        if (err) {
          let apiResponse = response.generate(
            true,
            "Error while getting issue",
            500,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(result)) {
          let apiResponse = response.generate(
            true,
            "Issue not found",
            400,
            null
          );
          reject(apiResponse);
        } else {
          resolve(result);
        }
      });
    });
  };

  let getIssue = () => {
    return new Promise((resolve, reject) => {
      IssueModel.findOne({ issueId: req.params.issueId })
        .select("-__v -_id")
        .lean()
        .exec((err, result) => {
          if (err) {
            let apiResponse = response.generate(
              true,
              "Error while getting issue",
              500,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(
              true,
              "Issue detail not found",
              400,
              null
            );
            reject(apiResponse);
          } else {
            resolve(result);
          }
        });
    });
  };

  validateInput(req, res)
    .then(updateIssue)
    .then(getIssue)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Issue Updated Successfully",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let deleteIssue = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        resolve(req);
      } else {
        logger.error(
          "Field missing error during issue deletion",
          "issueController: deleteIssue()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let deleteIssue = () => {
    return new Promise((resolve, reject) => {
      IssueModel.remove({ issueId: req.params.issueId }, (err, result) => {
        if (err) {
          let apiResponse = response.generate(
            true,
            "Error while getting issue",
            500,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(result)) {
          let apiResponse = response.generate(
            true,
            "Issue not found",
            400,
            null
          );
          reject(apiResponse);
        } else {
          resolve(result);
        }
      });
    });
  };

  validateInput(req, res)
    .then(deleteIssue)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Issue Deleted Successfully",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let addComment = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        if (req.body.comment) {
          if (check.isEmpty(req.body.comment)) {
            let apiResponse = response.generate(
              true,
              "Comment is not valid",
              400,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(req.body.createdByName)) {
            let apiResponse = response.generate(
              true,
              "Created by name not valid",
              400,
              null
            );
            reject(apiResponse);
          } else if (check.isEmpty(req.body.createdById)) {
            let apiResponse = response.generate(
              true,
              "Created by user id is not valid",
              400,
              null
            );
            reject(apiResponse);
          } else {
            resolve(req);
          }
        } else {
          logger.error(
            "Field missing error during comment creation",
            "issueController: addComment()",
            5
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during comment creation",
          "issueController: addComment()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let createNewComment = () => {
    return new Promise((resolve, reject) => {
      let newComment = new Comments({
        commentId: shortid.generate(),
        issueId: req.params.issueId,
        comment: req.body.comment,
        createdByName: req.body.createdByName,
        createdById: req.body.createdById,
      });

      newComment.save((err, comment) => {
        if (err) {
          logger.error(err.message, "issueController: addComment", 10);
          let apiResponse = response.generate(
            true,
            "Failed to add comment",
            500,
            null
          );
          reject(apiResponse);
        } else {
          let commentObj = comment.toObject();
          resolve(commentObj);
        }
      });
    });
  };

  validateInput(req, res)
    .then(createNewComment)
    .then((resolve) => {
      let apiResponse = response.generate(false, "Comment Added", 200, resolve);
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let addToWatcherList = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        if (req.params.userId) {
          resolve(req);
        } else {
          logger.error(
            "Field missing error during add to watcher list",
            "issueController: addToWatcherList()",
            5
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during add to watcher list",
          "issueController: addToWatcherList()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let updateWatcherList = () => {
    return new Promise((resolve, reject) => {
      IssueModel.findOne({ issueId: req.params.issueId }, (err, result) => {
        if (err) {
          let apiResponse = response.generate(
            true,
            "Error while getting issue",
            500,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(result)) {
          let apiResponse = response.generate(
            true,
            "Issue not found",
            400,
            null
          );
          reject(apiResponse);
        } else {
          let userId = req.params.userId;
          let username = req.body.username;
          result.watcherList.push(userId);
          result.watcherListUsers.push(username);
          result.save(function (err, result) {
            if (err) {
              let apiResponse = response.generate(
                true,
                "Error while getting issue",
                500,
                null
              );
              reject(apiResponse);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  };

  validateInput(req, res)
    .then(updateWatcherList)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Added To Watcher List Successfully",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

let removeFromWatcherList = (req, res) => {
  let validateInput = () => {
    return new Promise((resolve, reject) => {
      if (req.params.issueId) {
        if (req.params.userId) {
          resolve(req);
        } else {
          logger.error(
            "Field missing error during add to watcher list",
            "issueController: addToWatcherList()",
            5
          );
          let apiResponse = response.generate(
            true,
            "One or More Parameter(s) is missing",
            400,
            null
          );
          reject(apiResponse);
        }
      } else {
        logger.error(
          "Field missing error during add to watcher list",
          "issueController: addToWatcherList()",
          5
        );
        let apiResponse = response.generate(
          true,
          "One or More Parameter(s) is missing",
          400,
          null
        );
        reject(apiResponse);
      }
    });
  };

  let updateWatcherList = () => {
    return new Promise((resolve, reject) => {
      IssueModel.findOne({ issueId: req.params.issueId }, (err, result) => {
        if (err) {
          let apiResponse = response.generate(
            true,
            "Error while getting issue",
            500,
            null
          );
          reject(apiResponse);
        } else if (check.isEmpty(result)) {
          let apiResponse = response.generate(
            true,
            "Issue not found",
            400,
            null
          );
          reject(apiResponse);
        } else {
          let userId = req.params.userId;
          const watcherList = result.watcherList;
          if (watcherList.length > 0) {
            const newWatcherList = [];
            for (let res of watcherList) {
              if (res !== userId) {
                newWatcherList.push(res);
              }
            }
            result.watcherList = newWatcherList;
          }

          let username = req.body.username;
          const watcherListUsers = result.watcherListUsers;
          if (watcherListUsers.length > 0) {
            const newWatcherList = [];
            for (let res of watcherListUsers) {
              if (res !== username) {
                newWatcherList.push(res);
              }
            }
            result.watcherListUsers = watcherListUsers;
          }

          result.save(function (err, result) {
            if (err) {
              let apiResponse = response.generate(
                true,
                "Error while getting issue",
                500,
                null
              );
              reject(apiResponse);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  };

  validateInput(req, res)
    .then(updateWatcherList)
    .then((resolve) => {
      let apiResponse = response.generate(
        false,
        "Removed From Watcher List Successfully",
        200,
        resolve
      );
      res.send(apiResponse);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  createIssue: createIssue,
  allIssueList: allIssueList,
  userIssueList: userIssueList,
  issueDetail: issueDetail,
  editIssue: editIssue,
  deleteIssue: deleteIssue,
  addComment: addComment,
  addToWatcherList: addToWatcherList,
  removeFromWatcherList: removeFromWatcherList,
  searchIssueList: searchIssueList,
};
