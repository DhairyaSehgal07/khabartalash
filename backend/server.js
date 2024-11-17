import express from "express";
import dotenv from "dotenv";
import seedAdmin from "./utils/seedDb.js";
import cookieParser from "cookie-parser";
import newsRoutes from "./routes/newsRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
seedAdmin();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/news", newsRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
