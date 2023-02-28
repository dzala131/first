const { Schema, models, model } = require("mongoose");

const testSchema = new Schema({
  name: String,
  fname: String,
  lname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tst = models.Tst || model("Tst", testSchema);

export default Tst;
