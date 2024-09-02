
const sqlite3 = require('sqlite3').verbose();

export class Database {

  private databaseName: string;
  private database: string;
  private db: any;

  constructor({database, databaseName}) {
    this.databaseName = database;
    this.databaseName = databaseName;
  }

  connection() {
    switch (this.database) {
      case "mongo" : return "not yet implemented";
      case "sqlite": return this.sqliteConnection();
      default: return this.sqliteConnection();
    }
  }

  private sqliteConnection() {
    this.db = new sqlite3.Database(`../../db/${this.databaseName}.db`, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the database.');
    });

    return this.db;
  }
}