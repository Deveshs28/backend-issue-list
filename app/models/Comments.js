const time = require("../libs/timeLib");

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let commentsScheme = new Schema({
  commentId: {
    type: String,
    default: "",
    index: true,
    unique: true,
  },
  issueId: {
    type: String,
    default: "",
  },
  comment: {
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
  createdOn: {
    type: Date,
    default: time.getLocalTime(),
  },
});

mongoose.model("Comments", commentsScheme);
