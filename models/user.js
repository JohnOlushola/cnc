var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: { type: String, max: 100, required: true },
    lastName: { type: String, max: 100, required: true },
    email: { type: String, required: true, max: 120 },
    course: { type: String, required: true, max: 120 },
    aoi: { type: String, max: 120 },
    level: { type: Number, enum: [100, 200, 300, 400], required: true },
    role: { type: String, default: 'Student', required: true },
    timestamps: {
      created_at: { type: Date, default: Date.now(), required: true },
      updated_at: { type: Date, default: Date.now(), required: true }
    }
  }
);

var User = mongoose.model('user', UserSchema);

module.exports = User;