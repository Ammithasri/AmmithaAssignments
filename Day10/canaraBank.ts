//Day 10 task 2 creating abstract class and implementing interface methods and record payment details method with logic 
import {Payments} from "./payments"

export abstract class CanaraBank implements Payments {

abstract cashOnDelivery() : void 
abstract upiPayments() : void
abstract cardPayments() : void
abstract internetBanking() : void
recordPaymentDetails(): void {
    console.log(" Payment Details are recorded")
 }
}