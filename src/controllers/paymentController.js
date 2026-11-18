
const paymentModel = require("../models/paymentModel");
const paymentService = require("../services/paymentService");

// GET: récupérer tous les paiements
function getAllPayments(req, res) {
    const payments = paymentModel.getAllPayments();
    res.status(200).json(payments);
}

// GET: récupérer un paiement par orderId
function getPaymentByOrderId(req, res) {
    const { orderId } = req.params;

    const payment = paymentModel.getPaymentByOrderId(orderId);

    if (!payment) {
        return res.status(404).json({
            message: "Payment not found"
        });
    }

    res.status(200).json(payment);
}

// POST: créer un paiement
function createPayment(req, res) {
    try {
        const { orderId, method } = req.body;

        const payment = paymentService.processPayment(
            orderId,
            method
        );

        res.status(201).json({
            message: "Payment processed successfully",
            payment: payment
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllPayments,
    getPaymentByOrderId,
    createPayment
};
