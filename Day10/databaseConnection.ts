// Day 10 Task 1 - creating interface for database connection with 3 abstract methods

export interface DatabaseConnection {
    connect() : void
    disconnect() : void
    executeUpdate() : void

}