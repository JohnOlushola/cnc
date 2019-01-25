var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sha256 = require('sha256');

var UserSchema = new Schema(
  {
    firstName: { type: String, max: 100, required: true },
    lastName: { type: String, max: 100, required: true },
    email: { type: String, required: true, max: 120 },
    password: { type: String },
    course: { type: String, required: true, max: 120 },
    phone: {type: String},
    aoi: { type: String, max: 120 },
    level: { type: Number, enum: [100, 200, 300, 400], required: true },
    role: { type: String, default: 'Student', required: true },
    timestamps: {
      created_at: { type: Date, default: Date.now(), required: true },
      updated_at: { type: Date, default: Date.now(), required: true }
    }
  }
);

// hashing password before saving to db
// UserSchema.pre('save', function (next) {
//   this.password = sha256(this.password)
//   next();
// });

// checking if password is valid
UserSchema.methods.validatePassword = function (password) {
  return sha256(password) == this.password;
};

var User = mongoose.model('user', UserSchema);

module.exports = User;