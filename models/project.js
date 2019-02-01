var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },        
    name: { type: String, max: 100, required: true },
    desc: { type: String, max: 200, required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
  }
);

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;