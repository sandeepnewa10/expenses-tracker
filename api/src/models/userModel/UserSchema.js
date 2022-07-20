import mongoose from "mongoose";



const UserSchema = new mongoose.Schema(
    {
      fName: {
        type: String,
        require: true,
        maxlength: 100,
      },
      lName: {
        type: String,
        require: true,
        max: 168,
      },
      email: {
        type: String,
        require: true,
        maxlength: 100,
      },
      password: {
        type: password,
        require: true,
        max: 168,
      },
      confirmPassword: {
        type: password,
        require: true,
        max: 168,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("expenses_tracker", UserSchema);
  