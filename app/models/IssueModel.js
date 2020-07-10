const time = require("../libs/timeLib");

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let issueScheme = new Schema({
  issueId: {
    type: String,
    default: "",
    index: true,
    unique: true,
  },
  title: {
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
  watcherList: [],
  watcherListUsers: [],
  createdOn: {
    type: Date,
    default: time.getLocalTime(),
  },
});

mongoose.model("IssueModel", issueScheme);
