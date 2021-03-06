define({ "api": [
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issueTrackingTool/issue/all/:page/:recordCount",
    "title": "Issue List All",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>page number for the record. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recordCount",
            "description": "<p>count of records for current page. (path params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"count\": 2,\n    \"issueList\": [\n      {\n        \"assignedUserId\": \"KJL0Kf3mQ\",\n        \"assignedUserName\": \"Devesh Sharma\",\n        \"createdById\": \"KJL0Kf3mQ\",\n        \"createdByName\": \"Devesh Sharma\",\n        \"createdOn\": \"2020-06-17T18:09:45.000Z\",\n        \"description\": \"Description\",\n        \"issueId\": \"Sdvou-V1k\",\n        \"issueState\": \"OPEN\",\n        \"title\": \"First Issue\",\n        \"watcherList\": [\n          \"KJL0Kf3mQ\"\n        ],\n        \"__v\": 0,\n        \"_id\": \"5eea5c691a1f3436b0d9a4fa\"\n      }\n    ]\n  },\n  \"error\": false,\n  \"message\": \"All Issue data found\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolIssueAllPageRecordcount"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issueTrackingTool/issue/userIssueList/:userId/:page/:recordCount",
    "title": "User Issue List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user getting list. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>page number for the record. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recordCount",
            "description": "<p>count of records for current page. (path params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"count\": 2,\n    \"issueList\": [\n      {\n        \"assignedUserId\": \"KJL0Kf3mQ\",\n        \"assignedUserName\": \"Devesh Sharma\",\n        \"createdById\": \"KJL0Kf3mQ\",\n        \"createdByName\": \"Devesh Sharma\",\n        \"createdOn\": \"2020-06-17T18:09:45.000Z\",\n        \"description\": \"Description\",\n        \"issueId\": \"Sdvou-V1k\",\n        \"issueState\": \"OPEN\",\n        \"title\": \"First Issue\",\n        \"watcherList\": [\n          \"KJL0Kf3mQ\"\n        ],\n        \"__v\": 0,\n        \"_id\": \"5eea5c691a1f3436b0d9a4fa\"\n      }\n    ]\n  },\n  \"error\": false,\n  \"message\": \"All User Issue data found\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolIssueUserissuelistUseridPageRecordcount"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issueTrackingTool/issue/view/:issueId",
    "title": "Issue Detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue Id to get detail. (path params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"comments\": [\n      {\n        \"comment\": \"Test Comment\",\n        \"commentId\": \"dB7gxenkh\",\n        \"createdById\": \"KJL0Kf3mQ\",\n        \"createdByName\": \"Devesh Sharma\",\n        \"createdOn\": \"2020-06-17T16:38:00.000Z\",\n        \"issueId\": \"Sdvou-V1k\"\n      }\n    ],\n    \"issue\": {\n      \"assignedUserId\": \"undefined\",\n      \"assignedUserName\": \"undefined undefined\",\n      \"createdById\": \"KJL0Kf3mQ\",\n      \"createdByName\": \"Devesh Sharma\",\n      \"createdOn\": \"2020-06-17T18:09:45.000Z\",\n      \"description\": \"Description\",\n      \"issueId\": \"Sdvou-V1k\",\n      \"issueState\": \"OPEN\",\n      \"title\": \"First Issue\",\n      \"watcherList\": [\n        \"KJL0Kf3mQ\",\n        \"undefined\"\n      ]\n    }\n  },\n  \"error\": false,\n  \"message\": \"Issue detail found\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolIssueViewIssueid"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/issue/addComment/:issueId",
    "title": "Add Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue id. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>comment. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdByName",
            "description": "<p>user name of adding comment. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdById",
            "description": "<p>user id of adding comment. (body params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"comment\": \"Test Comment\",\n    \"commentId\": \"dB7gxenkh\",\n    \"createdById\": \"KJL0Kf3mQ\",\n    \"createdByName\": \"Devesh Sharma\",\n    \"createdOn\": \"2020-06-17T16:38:00.000Z\",\n    \"issueId\": \"Sdvou-V1k\",\n    \"__v\": 0,\n    \"_id\": \"5eea61ae1a1f3436b0d9a4fd\"\n  },\n  \"error\": false,\n  \"message\": \"Comment Added\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolIssueAddcommentIssueid"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/issue/create",
    "title": "Create Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Issue title. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Issue description. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueState",
            "description": "<p>issue state. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdByName",
            "description": "<p>created by name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdById",
            "description": "<p>created by id. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedUserId",
            "description": "<p>assigned user id. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedUserName",
            "description": "<p>assigned user name. (body params)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"assignedUserId\": \"KJL0Kf3mQ\",\n    \"assignedUserName\": \"Devesh Sharma\",\n    \"createdById\": \"KJL0Kf3mQ\",\n    \"createdByName\": \"Devesh Sharma\",\n    \"createdOn\": \"2020-06-17T18:09:45.000Z\",\n    \"description\": \"Description\",\n    \"issueId\": \"Sdvou-V1k\",\n    \"issueState\": \"OPEN\",\n    \"title\": \"First Issue\",\n    \"watcherList\": [\n      \"KJL0Kf3mQ\"\n    ],\n    \"__v\": 0,\n    \"_id\": \"5eea5c691a1f3436b0d9a4fa\"\n  },\n  \"error\": false,\n  \"message\": \"Issue created\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolIssueCreate"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/issue/delete/:issueId",
    "title": "Delete Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue id. (path params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"n\": 1,\n    \"ok\": 1,\n    \"deletedCount\": 1\n  },\n  \"error\": false,\n  \"message\": \"Issue Deleted Successfully\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolIssueDeleteIssueid"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/issue/search/:page/:recordCount",
    "title": "Search Issue List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>page number for the record. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recordCount",
            "description": "<p>count of records for current page. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>search query. (body params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"count\": 2,\n    \"issueList\": [\n      {\n        \"assignedUserId\": \"KJL0Kf3mQ\",\n        \"assignedUserName\": \"Devesh Sharma\",\n        \"createdById\": \"KJL0Kf3mQ\",\n        \"createdByName\": \"Devesh Sharma\",\n        \"createdOn\": \"2020-06-17T18:09:45.000Z\",\n        \"description\": \"Description\",\n        \"issueId\": \"Sdvou-V1k\",\n        \"issueState\": \"OPEN\",\n        \"title\": \"First Issue\",\n        \"watcherList\": [\n          \"KJL0Kf3mQ\"\n        ],\n        \"__v\": 0,\n        \"_id\": \"5eea5c691a1f3436b0d9a4fa\"\n      }\n    ]\n  },\n  \"error\": false,\n  \"message\": \"All Issue data found\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolIssueSearchPageRecordcount"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issueTrackingTool/issue/addWatcher/:issueId/:userId",
    "title": "Add Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of adding watcher. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue id to watch. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PutApiV1IssuetrackingtoolIssueAddwatcherIssueidUserid"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issueTrackingTool/issue/edit/:issueId",
    "title": "Edit Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue id. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Issue title. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Issue description. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueState",
            "description": "<p>issue state. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedUserId",
            "description": "<p>assigned user id. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedUserName",
            "description": "<p>assigned user name. (body params)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"n\": 1,\n    \"nModified\": 0,\n    \"ok\": 1\n  },\n  \"error\": false,\n  \"message\": \"Issue Updated Successfully\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PutApiV1IssuetrackingtoolIssueEditIssueid"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issueTrackingTool/issue/removeWatcher/:issueId/:userId",
    "title": "Remove Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId . (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issue id. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>username of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "Issue",
    "name": "PutApiV1IssuetrackingtoolIssueRemovewatcherIssueidUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issueTrackingTool/user/list",
    "title": "User List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user getting list. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>page number for the record. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recordCount",
            "description": "<p>count of records for current page. (path params) (required)</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>token of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": [\n    {\n      \"email\": \"devesh.s28@gmail.com\",\n      \"firstName\": \"Devesh\",\n      \"lastName\": \"Sharma\",\n      \"userId\": \"KJL0Kf3mQ\"\n    }\n  ],\n  \"error\": false,\n  \"message\": \"All User data found\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "GetApiV1IssuetrackingtoolUserList"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/forgot-password",
    "title": "Forgot Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Forgot password request processed\",\n    \"status\": 200,\n    \"data\": {\n        \"message\": \"Forgot password request processed succesfully. Please check your email inbox or spam folder for further steps.\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolForgotPassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/login",
    "title": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik1wVW55REJyeSIsImlhdCI6MTU5MjQxMjY3NTE1NSwiZXhwIjoxNTkyNDk5MDc1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJ0b2RvTGlzdCIsImRhdGEiOnsidXNlcklkIjoiS0pMMEtmM21RIiwiZmlyc3ROYW1lIjoiRGV2ZXNoIiwibGFzdE5hbWUiOiJTaGFybWEiLCJlbWFpbCI6ImRldmVzaC5zMjhAZ21haWwuY29tIn19.evjlhKT6d4kNQ7NJoCYDLFFX_ttAnhtHGZdYNepDzao\",\n    \"userDetails\": {\n      \"email\": \"devesh.s28@gmail.com\",\n      \"firstName\": \"Devesh\",\n      \"lastName\": \"Sharma\",\n      \"userId\": \"KJL0Kf3mQ\"\n    }\n  },\n  \"error\": false,\n  \"message\": \"Login Successful\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/logout",
    "title": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user (path params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/signup",
    "title": "Signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>last name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"data\": {\n    \"createdOn\": \"2020-06-17T16:46:49.000Z\",\n    \"email\": \"devesh.s28@gmail.com\",\n    \"firstName\": \"Devesh\",\n    \"lastName\": \"Sharma\",\n    \"userId\": \"KJL0Kf3mQ\",\n    \"__v\": 0,\n    \"_id\": \"5eea48f91a1f3436b0d9a4f8\"\n  },\n  \"error\": false,\n  \"message\": \"User created\",\n  \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/socialLogin",
    "title": "Social Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImxMM3lqODdmRlYiLCJpYXQiOjE1OTM5NDM4NTU0MjAsImV4cCI6MTU5NDAzMDI1NSwic3ViIjoiYXV0aFRva2VuIiwiaXNzIjoidG9kb0xpc3QiLCJkYXRhIjp7InVzZXJJZCI6ImtjbzdQemxZaSIsInVzZXJUeXBlIjoiU29jaWFsIiwiZmlyc3ROYW1lIjoiUmFtYW4gVmVybWEiLCJsb2dpblR5cGUiOiJmaXJzdExvZ2luIn19.DRWG_mNP0frBOJ0VmDbey0ad50vxNxXFNpPXI1wILsw\",\n        \"userDetails\": {\n            \"userId\": \"kco7PzlYi\",\n            \"userType\": \"Social\",\n            \"firstName\": \"Raman Verma\",\n            \"loginType\": \"firstLogin\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolSociallogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issueTrackingTool/update-password/:userId",
    "title": "Update Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of the user. (path params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User password updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issuesList.js",
    "groupTitle": "users",
    "name": "PostApiV1IssuetrackingtoolUpdatePasswordUserid"
  }
] });
