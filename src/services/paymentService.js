
const {
    getPaymentByOrderId,
    createPayment
} = require("../models/paymentModel");

const { randomUUID } = require("crypto");

function processPayment(orderId, method) {

    // Vérifier les informations
    if (!orderId || !method) {
        throw new Error("orderId and method are required");
    }

    // Vérifier si la commande a déjà été payée
    const existingPayment = getPaymentByOrderId(orderId);

    if (existingPayment) {
        throw new Error("Payment already exists for this order");
    }

    // Simuler un paiement réussi
    const payment = {
        id: randomUUID(),
        orderId: orderId,
        method: method,
        status: "SUCCESS",
        createdAt: new Date().toISOString()
    };

    // Enregistrer le paiement dans le tableau
    return createPayment(payment);
}

module.exports = {
    processPayment
};
