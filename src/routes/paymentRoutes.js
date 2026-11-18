
const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

// GET: tous les paiements
router.get("/", paymentController.getAllPayments);

// GET: paiement par commande
router.get("/order/:orderId", paymentController.getPaymentByOrderId);

// POST: créer un paiement
router.post("/", paymentController.createPayment);

module.exports = router;
