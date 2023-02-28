import pool from "utils/config";
import connectMongo from "utils/mongo";
import Tst from "utils/Schema/newSchema";

export default async function handler(req, res) {
  // await pool.connect();
  // pool.request().query(`select * from UserNote`, (err, data) => {
  //   res.status(200).json(data.recordset);
  // });

  await connectMongo();
  // let data = await Tst.create({
  //   name: "a",
  //   fname: "c",
  //   lname: "f",
  //   email: "new@gmail.com",
  // });

  // let data = await Tst.updateOne(
  //   { email: "zala@gmail.com" },
  //   { fname: "Dhruvraj" }
  // );
  let data = await Tst.find();

  res.json(data);
}
