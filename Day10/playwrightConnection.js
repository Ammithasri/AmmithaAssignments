"use strict";
// Day 10 Task 1 - creating class for Interface(database connection) and implementing the 3 methods
Object.defineProperty(exports, "__esModule", { value: true });
class PlaywrightConnection {
    connect() {
        console.log("connection established successfully");
    }
    disconnect() {
        console.log("disconnected successfully");
    }
    executeUpdate() {
        console.log("execution updated succesfully");
    }
}
const connection = new PlaywrightConnection();
connection.connect();
connection.disconnect();
connection.executeUpdate();
