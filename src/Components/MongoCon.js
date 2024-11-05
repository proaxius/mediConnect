import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()
const uri = process.env.MongoCon
const DB = new MongoClient(uri)
let db;
//openDb con
export async function OpenconDB () {
    if (!db) {
        await DB.connect();
        db = DB.db('authDB')
        console.log("DB is Active")
    }
}
//closeDb con
export async function CloseconDB () {
    if(DB.isConnected()) {
        await DB.close()
        console.log("DB con Closed")
    }
}