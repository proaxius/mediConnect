import { MongoClient } from "mongodb";
import dotenv from "dotenv";


dotenv.config();
const uri =  import.meta.env.MongoCon;
const DB = new MongoClient(uri);
let db = null;
//openDb con
export async function OpenconDB(callback) {
  if (!db) {
    await DB.connect();
     db = DB.db("MEDICONNECT");
    console.log("DB is Active for MEDICONNECT");
  }
}




