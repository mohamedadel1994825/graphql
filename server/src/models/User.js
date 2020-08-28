import mongoose, { Schema } from "mongoose";
import {hashSync,compareSync} from 'bcrypt'
// const bcrypt = require("bcrypt");
const saltRounds = 12;
const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);
UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});
UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password, saltRounds);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
};
export const User = mongoose.model("User", UserSchema);
