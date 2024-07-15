import connectDB from "./database/database_index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

const PORT = 5000

connectDB()
    .then(() => {
        app.listen(PORT || 8000)
        console.log(`Server started on port ${PORT}`);
    })

    .catch((err) => {
        console.log("MONGO ERROR: " + err);
    })
