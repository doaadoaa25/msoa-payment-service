const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Payment routes
const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payments", paymentRoutes);

// Route de test
app.get("/", (req, res) => {
    res.json({
        message: "Payment Microservice is running!",
        status: "OK"
    });
});

// Port
const PORT = process.env.PORT || 8085;

// Start server
app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});