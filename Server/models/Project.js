const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  clientName: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  startingDate: {
    type: Date,
    required: true
  },
  pricePerHour: {
    type: Number,
    required: true
  },
  employeeIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;