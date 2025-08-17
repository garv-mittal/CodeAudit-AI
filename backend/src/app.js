import express from "express";
import aiRoutes from "./routes/ai.routes.js"
// import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));


app.use('/ai', aiRoutes)

export default app;