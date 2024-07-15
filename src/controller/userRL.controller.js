import { User } from "../model/userRL.model.js";
import bcrypt from "bcrypt";


const registerUser = async (req, res) => {

    const { username, email, number, password } = req.body;

    // console.log('Recieved data: ' , req.body);
    const logData = { username, email, number };
    console.log('Received data:', logData);

    if ([username, email, number, password].every((f) => f?.trim() === "")) {
        res.status(400).json({ error: "All fields are required" });
        // alert("Please enter all required fields")
    }

    try {
        const exist = await User.findOne({ email: email });

        if (exist) {
            res.status(400).json({ error: "User already exists" })
            // alert("User already exists")
        }

        const newuser = await User.create({
            username,
            email,
            number,
            password,
        });

        const user = await User.findById(newuser._id)

        if (!user) {
            res.status(400).json({ error: "something is wrong" });
        }


        return res.status(200).json({
            message: "User created successfully",
            data: user,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


const login = async (req, res) => {

    const { email, password } = req.body;

    console.log("\nEmail: " + email + "\nSuccessfully logged in.");
    // alert("Successfully logged in.");

    if (!email) {
        res.status(400).json({ error: "Email, Password not provided." })
        alert("Email, Password not provided.")
    }

    const user = await User.findOne({
        $or: [{ email }]
    })

    if (!user) {
        res.status(404).json({ error: "User not found" })
        // alert("User not found")
    }

    const check = await bcrypt.compare( password, user.password)

    if (!check) {
        res.status(400).json({ error: "invalid password" })
    }

    return res.status(200).json({ 
        message: "login for " + email + " successful", 
        data: user,
    });
}

export {
    registerUser,
    login
}