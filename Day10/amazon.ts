// Day 10 task 2 creating concerte class to implement the abstract methods
import {CanaraBank} from "./canaraBank"

class Amazon extends CanaraBank {
cashOnDelivery() : void{
    console.log("payment done through Cash")
}
upiPayments() : void{
    console.log("payment done through UPI")
}
cardPayments() : void{
    console.log("payment done through card")
}
internetBanking() : void{
    console.log("payment done through net banking")
}
recordPaymentDetails(): void {
    console.log("Payment Details are recorded")
 }    

}
const paymentType = new Amazon()
paymentType.cashOnDelivery()
paymentType.upiPayments()
paymentType.cardPayments()
paymentType.internetBanking()
paymentType.recordPaymentDetails()