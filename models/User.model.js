const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },

    email: {
          type: String,
          required: [true, 'Email is required.'],
          
          match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
          unique: true,
          lowercase: true,
           trim: true 
    },
    passwordHash: {
          type: String,
        required: [true, 'password']
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;






