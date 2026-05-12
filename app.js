const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>AK DevOps</title>
        <style>
          body {
            text-align: center;
            font-family: Arial;
            background: linear-gradient(to right, #141e30, #243b55);
            color: white;
            padding-top: 100px;
          }
          h1 {
            font-size: 50px;
          }
          h2 {
            color: #00ffcc;
          }
          p {
            font-size: 18px;
            opacity: 0.8;
          }
        </style>
      </head>
      <body>
        <h1>🚀 AK DevOps</h1>
        <h2>CI/CD Pipeline Working Successfully</h2>
        <p>Deployed on AWS ECS + ALB + Route 53 + SSL 🔐</p>
        <p>Version: Updated UI Build ✔</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});