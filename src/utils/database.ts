
const sqlite3 = require('sqlite3').verbose();

export class Database {

    private databaseName: any;
    private db: any;

    constructor(database: string) {
        this.databaseName = database;
    }

    connection() {
        this.db = new sqlite3.Database(`../../db/${this.databaseName}.db`, sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
            console.error(err.message);
          }
          console.log('Connected to the database.');
        });

        return this.db;
    }
}