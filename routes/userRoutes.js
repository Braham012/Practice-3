const express = require("express");
const {
  addStudent,
  getStudentbyqueries,
  getsingleStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/UserController");

const userRoutes = express.Router();

userRoutes.post("/add", addStudent);
userRoutes.get("/getStudentbyqueries", getStudentbyqueries);
userRoutes.get("/getsingleStudent", getsingleStudent);
userRoutes.get("/getStudent", getStudent);
userRoutes.put("/update", updateStudent);
userRoutes.delete("/delete", deleteStudent);

module.exports = {
  userRoutes,
};
