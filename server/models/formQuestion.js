import mongoose from "mongoose";

const formSchema = mongoose.Schema({
  formName: String,
  formURL: String,
  queTitle: String,
    options: {String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const FormQuestion = new mongoose.model("FormQuestion", formSchema);

export default FormQuestion;
