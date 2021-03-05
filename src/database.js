import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mongographql", {
      useNewUrlParser: true,useUnifiedTopology: true
    });

    console.log(">>>>>DB is connected");
  } catch (error) {
    console.log(error);
  }
};
