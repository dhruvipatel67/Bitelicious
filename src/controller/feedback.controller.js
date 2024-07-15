import { Feedback } from '../model/feedback.model.js'

const submitFeedback = async (req, res) => {

    console.log("Server received feedback");

    console.log(req.body)
    const { username, email, message } = req.body;

    if ([username, email, message].every(field => field && field.trim() === "")) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const existingFeedback = await Feedback.findOne({ email });

        if (existingFeedback) {
            return res.status(409).json({ error: "Feedback with this email already exists" });
        }

        const newFeedback = await Feedback.create({
            username,
            email,
            message,
        });

        return res.status(201).json({
            message: "Feedback submitted successfully",
            success: true,
            data: newFeedback,
        });
        
    } catch (error) {
        console.error("Error submitting feedback:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export { submitFeedback };