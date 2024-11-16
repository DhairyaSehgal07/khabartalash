import Admin from "../models/AdminModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const registerAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if admin already exists
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists, please log in.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new admin
    const newAdmin = await Admin.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (newAdmin) {
      // Generate a token
      const token = await generateToken(res, newAdmin._id);

      // Send a success response
      return res.status(201).json({
        success: true,
        data: {
          _id: newAdmin._id,
          firstName: newAdmin.firstName,
          lastName: newAdmin.lastName,
          email: newAdmin.email,
          token, // Include token in the response
        },
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to create admin. Please try again.",
      });
    }
  } catch (err) {
    console.error("Error in registerAdmin:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while registering the admin.",
    });
  }
};

export { registerAdmin };
