// server.js
import { createServer } from "http";
const server = createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json");
  if (method === "GET" && url === "/xyz") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        message: "สวัสดีจาก POST Method XYZ",
      }),
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "ไม่พบหน้าที่ต้องการ" }));
  }
});
server.listen(3000, () => {
  console.log("Server รันอยู่ที่ http://localhost:3000");
});
