
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite"

export class DB {

  private databaseName: string;
  private database: string;
  private db: Database;

  constructor({database, databaseName}) {
    this.databaseName = database;
    this.databaseName = databaseName;
  }

  async connection() {
    switch (this.database) {
      case "mongo" : return "not yet implemented";
      case "sqlite": return await this.sqliteConnection();
      default: return this.sqliteConnection();
    }
  }

  async sqliteConnection() {
    this.db = await open({
      filename: `../../db/${this.databaseName}.db`,
      driver: sqlite3.Database
    })

    return this;
  }

  async find(query: string) {
    return await this.db.get(query)
  }
}