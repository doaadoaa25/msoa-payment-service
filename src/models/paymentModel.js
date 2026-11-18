let payments = [];

function getAllPayments() {
    return payments;
}

function getPaymentByOrderId(orderId) {
    return payments.find(
        payment => payment.orderId === orderId
    );
}

function createPayment(payment) {
    payments.push(payment);
    return payment;
}

module.exports = {
    getAllPayments,
    getPaymentByOrderId,
    createPayment
};