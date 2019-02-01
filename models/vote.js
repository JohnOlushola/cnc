var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },        
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },        
    created_at: { type: Date },
    updated_at: { type: Date }
  }
);

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;