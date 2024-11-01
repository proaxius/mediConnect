import { MongoClient } from 'mongodb'
const string = import.meta.env.MongoCon;
export const  ConnectDB = () =>{
return console.log("this is " + string)

}