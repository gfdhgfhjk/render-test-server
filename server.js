const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test endpoint to log data
app.post("/log", (req, res) => {
    console.log("Received data:", req.body);
    res.send({ status: "Data received successfully" });
});

// Root route
app.get("/", (req, res) => {
    res.send("Server is running on Render!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
