const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>🔥 Saurabh Learns DevOps</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #0f172a;
            color: #f8fafc;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #38bdf8;
            font-size: 3em;
            margin-bottom: 20px;
          }
          p {
            font-size: 1.3em;
            line-height: 1.6;
          }
          .highlight {
            color: #facc15;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Yo! I’m Saurabh – DevOps Learner in Action!</h1>
        <p>👨‍💻 Currently leveling up my skills in <span class="highlight">Node.js, Docker, CI/CD & Cloud</span>.</p>
        <p>🔁 This app is running inside a Docker container and will soon be powered by a full CI/CD pipeline.</p>
        <p>🛠️ From <span class="highlight">zero to pro</span>, one commit at a time.</p>
        <p>💡 Built with love, bugs, coffee, and curiosity ☕❤️</p>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`🟢 App is live on: http://localhost:${port}`);
});
   
