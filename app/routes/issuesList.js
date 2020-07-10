const express = require("express");
const router = express.Router();
const appConfig = require("../../config/appConfig");
const issueController = require("../controllers/issueController");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

module.exports.setRouter = (app) => {
  let baseUrl = appConfig.apiVersion + "/issueTrackingTool";

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/login Login
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik1wVW55REJyeSIsImlhdCI6MTU5MjQxMjY3NTE1NSwiZXhwIjoxNTkyNDk5MDc1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJ0b2RvTGlzdCIsImRhdGEiOnsidXNlcklkIjoiS0pMMEtmM21RIiwiZmlyc3ROYW1lIjoiRGV2ZXNoIiwibGFzdE5hbWUiOiJTaGFybWEiLCJlbWFpbCI6ImRldmVzaC5zMjhAZ21haWwuY29tIn19.evjlhKT6d4kNQ7NJoCYDLFFX_ttAnhtHGZdYNepDzao",
    "userDetails": {
      "email": "devesh.s28@gmail.com",
      "firstName": "Devesh",
      "lastName": "Sharma",
      "userId": "KJL0Kf3mQ"
    }
  },
  "error": false,
  "message": "Login Successful",
  "status": 200
}

    */
  app.post(`${baseUrl}/login`, userController.userLogin);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/signup Signup
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} firstName first name of the user. (body params) (required)
     * @apiParam {string} lastName last name of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "createdOn": "2020-06-17T16:46:49.000Z",
    "email": "devesh.s28@gmail.com",
    "firstName": "Devesh",
    "lastName": "Sharma",
    "userId": "KJL0Kf3mQ",
    "__v": 0,
    "_id": "5eea48f91a1f3436b0d9a4f8"
  },
  "error": false,
  "message": "User created",
  "status": 200
}
    */
  app.post(`${baseUrl}/signup`, userController.userSignUp);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/socialLogin Social Login
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} name name of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "Login Successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImxMM3lqODdmRlYiLCJpYXQiOjE1OTM5NDM4NTU0MjAsImV4cCI6MTU5NDAzMDI1NSwic3ViIjoiYXV0aFRva2VuIiwiaXNzIjoidG9kb0xpc3QiLCJkYXRhIjp7InVzZXJJZCI6ImtjbzdQemxZaSIsInVzZXJUeXBlIjoiU29jaWFsIiwiZmlyc3ROYW1lIjoiUmFtYW4gVmVybWEiLCJsb2dpblR5cGUiOiJmaXJzdExvZ2luIn19.DRWG_mNP0frBOJ0VmDbey0ad50vxNxXFNpPXI1wILsw",
        "userDetails": {
            "userId": "kco7PzlYi",
            "userType": "Social",
            "firstName": "Raman Verma",
            "loginType": "firstLogin"
        }
    }
}
    */
  app.post(`${baseUrl}/socialLogin`, userController.socialMediaLogin);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/logout Logout
     * 
     * @apiParam {string} userId userId of the user (path params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
            {
                
            }
         
    */
  app.post(`${baseUrl}/logout/:userId`, userController.logout);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/forgot-password Forgot Password
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Forgot password request processed",
            "status": 200,
            "data": {
                "message": "Forgot password request processed succesfully. Please check your email inbox or spam folder for further steps."
            }
        }

    */
  // app.post(`${baseUrl}/forgot-password`, userController.forgotPassword);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/update-password/:userId Update Password
     *
     * @apiParam {string} userId user id of the user. (path params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "User password updated",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }

    */
  // app.post(`${baseUrl}/update-password/:userId`, userController.updatePassword);

  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issueTrackingTool/user/list User List
     *
     * @apiParam {string} userId userId of the user getting list. (path params) (required)
     * @apiParam {string} page page number for the record. (path params) (required)
     * @apiParam {string} recordCount count of records for current page. (path params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": [
    {
      "email": "devesh.s28@gmail.com",
      "firstName": "Devesh",
      "lastName": "Sharma",
      "userId": "KJL0Kf3mQ"
    }
  ],
  "error": false,
  "message": "All User data found",
  "status": 200
}
    */
  app.get(`${baseUrl}/user/list`, auth.isAuthorized, userController.userList);

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/issue/create Create Issue
     *
     * @apiParam {string} title Issue title. (body params) (required)
     * @apiParam {string} description Issue description. (body params)
     * @apiParam {string} issueState issue state. (body params) (required)
     * @apiParam {string} createdByName created by name. (body params) (required)
     * @apiParam {string} createdById created by id. (body params) (required)
     * @apiParam {string} assignedUserId assigned user id. (body params)
     * @apiParam {string} assignedUserName assigned user name. (body params)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "assignedUserId": "KJL0Kf3mQ",
    "assignedUserName": "Devesh Sharma",
    "createdById": "KJL0Kf3mQ",
    "createdByName": "Devesh Sharma",
    "createdOn": "2020-06-17T18:09:45.000Z",
    "description": "Description",
    "issueId": "Sdvou-V1k",
    "issueState": "OPEN",
    "title": "First Issue",
    "watcherList": [
      "KJL0Kf3mQ"
    ],
    "__v": 0,
    "_id": "5eea5c691a1f3436b0d9a4fa"
  },
  "error": false,
  "message": "Issue created",
  "status": 200
}
    */
  app.post(
    `${baseUrl}/issue/create`,
    auth.isAuthorized,
    issueController.createIssue
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issueTrackingTool/issue/all/:page/:recordCount Issue List All
     *
     * @apiParam {string} page page number for the record. (path params) (required)
     * @apiParam {string} recordCount count of records for current page. (path params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "count": 2,
    "issueList": [
      {
        "assignedUserId": "KJL0Kf3mQ",
        "assignedUserName": "Devesh Sharma",
        "createdById": "KJL0Kf3mQ",
        "createdByName": "Devesh Sharma",
        "createdOn": "2020-06-17T18:09:45.000Z",
        "description": "Description",
        "issueId": "Sdvou-V1k",
        "issueState": "OPEN",
        "title": "First Issue",
        "watcherList": [
          "KJL0Kf3mQ"
        ],
        "__v": 0,
        "_id": "5eea5c691a1f3436b0d9a4fa"
      }
    ]
  },
  "error": false,
  "message": "All Issue data found",
  "status": 200
}
    */
  app.get(
    `${baseUrl}/issue/all/:page/:recordCount`,
    auth.isAuthorized,
    issueController.allIssueList
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issueTrackingTool/issue/userIssueList/:userId/:page/:recordCount User Issue List
     *
     * @apiParam {string} userId userId of the user getting list. (path params) (required)
     * @apiParam {string} page page number for the record. (path params) (required)
     * @apiParam {string} recordCount count of records for current page. (path params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "count": 2,
    "issueList": [
      {
        "assignedUserId": "KJL0Kf3mQ",
        "assignedUserName": "Devesh Sharma",
        "createdById": "KJL0Kf3mQ",
        "createdByName": "Devesh Sharma",
        "createdOn": "2020-06-17T18:09:45.000Z",
        "description": "Description",
        "issueId": "Sdvou-V1k",
        "issueState": "OPEN",
        "title": "First Issue",
        "watcherList": [
          "KJL0Kf3mQ"
        ],
        "__v": 0,
        "_id": "5eea5c691a1f3436b0d9a4fa"
      }
    ]
  },
  "error": false,
  "message": "All User Issue data found",
  "status": 200
}
    */
  app.get(
    `${baseUrl}/issue/userIssueList/:userId/:page/:recordCount`,
    auth.isAuthorized,
    issueController.userIssueList
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/issue/search/:page/:recordCount Search Issue List
     *
     * @apiParam {string} page page number for the record. (path params) (required)
     * @apiParam {string} recordCount count of records for current page. (path params) (required)
     * @apiParam {string} query search query. (body params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "count": 2,
    "issueList": [
      {
        "assignedUserId": "KJL0Kf3mQ",
        "assignedUserName": "Devesh Sharma",
        "createdById": "KJL0Kf3mQ",
        "createdByName": "Devesh Sharma",
        "createdOn": "2020-06-17T18:09:45.000Z",
        "description": "Description",
        "issueId": "Sdvou-V1k",
        "issueState": "OPEN",
        "title": "First Issue",
        "watcherList": [
          "KJL0Kf3mQ"
        ],
        "__v": 0,
        "_id": "5eea5c691a1f3436b0d9a4fa"
      }
    ]
  },
  "error": false,
  "message": "All Issue data found",
  "status": 200
}
    */
  app.post(
    `${baseUrl}/issue/search/:page/:recordCount`,
    auth.isAuthorized,
    issueController.searchIssueList
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issueTrackingTool/issue/view/:issueId Issue Detail
     *
     * @apiParam {string} issueId issue Id to get detail. (path params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "comments": [
      {
        "comment": "Test Comment",
        "commentId": "dB7gxenkh",
        "createdById": "KJL0Kf3mQ",
        "createdByName": "Devesh Sharma",
        "createdOn": "2020-06-17T16:38:00.000Z",
        "issueId": "Sdvou-V1k"
      }
    ],
    "issue": {
      "assignedUserId": "undefined",
      "assignedUserName": "undefined undefined",
      "createdById": "KJL0Kf3mQ",
      "createdByName": "Devesh Sharma",
      "createdOn": "2020-06-17T18:09:45.000Z",
      "description": "Description",
      "issueId": "Sdvou-V1k",
      "issueState": "OPEN",
      "title": "First Issue",
      "watcherList": [
        "KJL0Kf3mQ",
        "undefined"
      ]
    }
  },
  "error": false,
  "message": "Issue detail found",
  "status": 200
}
    */
  app.get(
    `${baseUrl}/issue/view/:issueId`,
    auth.isAuthorized,
    issueController.issueDetail
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {put} /api/v1/issueTrackingTool/issue/edit/:issueId Edit Issue
     *
     * @apiParam {string} issueId issue id. (path params) (required)
     * 
     * @apiParam {string} title Issue title. (body params)
     * @apiParam {string} description Issue description. (body params)
     * @apiParam {string} issueState issue state. (body params)
     * @apiParam {string} assignedUserId assigned user id. (body params)
     * @apiParam {string} assignedUserName assigned user name. (body params)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "n": 1,
    "nModified": 0,
    "ok": 1
  },
  "error": false,
  "message": "Issue Updated Successfully",
  "status": 200
}
    */
  app.put(
    `${baseUrl}/issue/edit/:issueId`,
    auth.isAuthorized,
    issueController.editIssue
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/issue/delete/:issueId Delete Issue
     *
     * @apiParam {string} issueId issue id. (path params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "n": 1,
    "ok": 1,
    "deletedCount": 1
  },
  "error": false,
  "message": "Issue Deleted Successfully",
  "status": 200
}
    */
  app.post(
    `${baseUrl}/issue/delete/:issueId`,
    auth.isAuthorized,
    issueController.deleteIssue
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issueTrackingTool/issue/addComment/:issueId Add Comment
     *
     * @apiParam {string} issueId issue id. (path params) (required)
     * @apiParam {string} comment comment. (body params) (required)
     * @apiParam {string} createdByName user name of adding comment. (body params) (required)
     * @apiParam {string} createdById user id of adding comment. (body params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
  "data": {
    "comment": "Test Comment",
    "commentId": "dB7gxenkh",
    "createdById": "KJL0Kf3mQ",
    "createdByName": "Devesh Sharma",
    "createdOn": "2020-06-17T16:38:00.000Z",
    "issueId": "Sdvou-V1k",
    "__v": 0,
    "_id": "5eea61ae1a1f3436b0d9a4fd"
  },
  "error": false,
  "message": "Comment Added",
  "status": 200
}
    */
  app.post(
    `${baseUrl}/issue/addComment/:issueId`,
    auth.isAuthorized,
    issueController.addComment
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {put} /api/v1/issueTrackingTool/issue/addWatcher/:issueId/:userId Add Watcher
     *
     * @apiParam {string} userId userId of adding watcher. (path params) (required)
     * @apiParam {string} issueId issue id to watch. (path params) (required)
     * @apiParam {string} username username of user. (body params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
        }
    */
  app.put(
    `${baseUrl}/issue/addWatcher/:issueId/:userId`,
    auth.isAuthorized,
    issueController.addToWatcherList
  );

  /**
     * @apiGroup Issue
     * @apiVersion  1.0.0
     * @api {put} /api/v1/issueTrackingTool/issue/removeWatcher/:issueId/:userId Remove Watcher
     *
     * @apiParam {string} userId userId . (path params) (required)
     * @apiParam {string} issueId issue id. (path params) (required)
     * * @apiParam {string} username username of user. (body params) (required)
     * 
     * @apiHeader {string} authToken  token of the user. (header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
        }
    */
  app.put(
    `${baseUrl}/issue/removeWatcher/:issueId/:userId`,
    auth.isAuthorized,
    issueController.removeFromWatcherList
  );
};
