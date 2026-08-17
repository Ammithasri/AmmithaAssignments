// Day 10 Task 1 - creating class for Interface(database connection) and implementing the 3 methods

import {DatabaseConnection} from "./databaseConnection"

class PlaywrightConnection implements DatabaseConnection{
    connect() : void {
        console.log("connection established successfully")
    }
    disconnect() : void {
        console.log("disconnected successfully")
    }
    executeUpdate() : void{
        console.log("execution updated succesfully")
    }
}
const connection = new PlaywrightConnection()
connection.connect()
connection.disconnect()
connection.executeUpdate()