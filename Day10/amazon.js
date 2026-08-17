"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Day 10 task 2 creating concerte class to implement the abstract methods
const canaraBank_1 = require("./canaraBank");
class Amazon extends canaraBank_1.CanaraBank {
    cashOnDelivery() {
        console.log("payment done through Cash");
    }
    upiPayments() {
        console.log("payment done through UPI");
    }
    cardPayments() {
        console.log("payment done through card");
    }
    internetBanking() {
        console.log("payment done through net banking");
    }
    recordPaymentDetails() {
        console.log("Payment Details are recorded");
    }
}
const paymentType = new Amazon();
paymentType.cashOnDelivery();
paymentType.upiPayments();
paymentType.cardPayments();
paymentType.internetBanking();
paymentType.recordPaymentDetails();
