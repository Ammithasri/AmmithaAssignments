// Day 10 Task 2 creating interface for payments with 4 abstract methods

export interface Payments{
    cashOnDelivery() : void 
    upiPayments() : void
    cardPayments() : void
    internetBanking() : void
}