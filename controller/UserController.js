const { User } = require("../model/user");

const addStudent = async (req, res) => {
  try {
    const { name, age, Standard, fees, address, email } = req.body;
    const user = new User({ name, age, Standard, fees, address, email });
    await user.save();
    res.status(201).send("Student Added");
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Issue adding new Student", error: error.message });
  }
};
const getStudentbyqueries = async (req, res) => {
  try {
    const query = req.query;
    if (query.name) {
      query.name = String(query.name);
    }
    if (query.Standard) {
      query.Standard = String(query.Standard);
    }

    const students = await User.find(query);

    res.status(200).json(students);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Error Retrieving Student", error: error.message });
  }
};
const getsingleStudent = async (req, res) => {
  try {
    const { id, name } = req.body;

    let user;
    if (id) {
      user = await User.findById(id);
    } else if (name) {
      user = await User.findOne({ name });
    } else {
      return res
        .status(400)
        .json({ message: "Please Provide either id or name" });
    }
    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Error Retrieving Student", error: error.message });
  }
};
const getStudent = async (req, res) => {
  try {
    const users = await User.find().sort({ age: 1 });
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: "Error Retrieving Students", error: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const { email, name, age, Standard, fees, address } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const updatedStudent = await User.findOneAndUpdate(
      { email },
      { name, age, Standard, fees, address },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating student", error: error.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { key, value } = req.body;

    if (!key || !value) {
      return res.status(400).json({
        message: "Both 'key' and 'value' must be provided.",
      });
    }
    const deletedStudent = await User.findOneAndDelete({ [key]: value });

    if (!deletedStudent) {
      return res.status(404).json({
        message: `No student found with ${key}: ${value}`,
      });
    }

    res.status(200).json({
      message: `Student deleted (matched by ${key}).`,
      deleted: deletedStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error During Deleting Student Data",
      error: error.message,
    });
  }
};

module.exports = {
  addStudent,
  getStudentbyqueries,
  getsingleStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
