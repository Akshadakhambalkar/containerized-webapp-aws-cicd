const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>AK DevOps</title>
      </head>
      <body style="text-align:center; font-family:Arial;">
        <h1>🚀 AK DevOps</h1>
        <h2>CI/CD Pipeline Working Successfully</h2>
        <p>Deployed on AWS ECS + ALB + Route 53 + SSL 🔐</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});