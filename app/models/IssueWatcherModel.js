const time = require("../libs/timeLib");

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let issueWatcherScheme = new Schema({
  watcherId: {
    type: String,
    default: "",
    index: true,
    unique: true,
  },
  issueId: {
    type: String,
    default: "",
  },
  userId: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  issueState: {
    type: String,
    default: "",
  },
  assignedUserId: {
    type: String,
    default: "",
  },
  assignedUserName: {
    type: String,
    default: "",
  },
  createdByName: {
    type: String,
    default: "",
  },
  createdById: {
    type: String,
    default: "",
  },
});

mongoose.model("IssueWatcherModel", issueWatcherScheme);
