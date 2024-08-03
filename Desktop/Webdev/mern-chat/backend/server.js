import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const port = 5000;

app.use(express.json());
//to access cookies
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello worldkdfkj!");
})

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is runing at ${port}`);
});