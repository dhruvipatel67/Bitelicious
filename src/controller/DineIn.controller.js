import { DineIn } from '../model/DineIn.model.js'

const submitDineIn = async (req, res) => {

    console.log("Server received DineIn");

    console.log(req.body)
    const { username, email, number, rdate, rtime, npeople} = req.body;

    if ([username, email, number, rdate, rtime, npeople].every(field => field && field.trim() === "")) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const existingDineIn = await DineIn.findOne({ email });

        if (existingDineIn) {
            return res.status(409).json({ error: "DineIn with this email already exists" });
        }

        const newDineIn = await DineIn.create({
            username,
            email,
            number,
            rdate,
            rtime,
            npeople,
        });

        return res.status(201).json({
            message: "DineIn response submitted successfully",
            success: true,
            data: newDineIn,
        });
        
    } catch (error) {
        console.error("Error submitting DineIn:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export { submitDineIn };