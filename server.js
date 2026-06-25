// server.js - Express.js Server
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "สวัสดีจาก Express.js!" });
});

// สั่งให้ Server ทำงานและสแตนด์บายรอที่ พอร์ต 3000
app.listen(PORT, () => {
  console.log(`🚀 Server รันอยู่ที่ http://localhost:${PORT}`);
});
