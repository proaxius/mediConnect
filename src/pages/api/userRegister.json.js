// import { MongoClient } from "mongodb";
// import dotenv from "dotenv"
// dotenv.config()
// dotenv.config();
// const uri = "mongodb+srv://admin01:User@4002@mediconnect.lo1ol.mongodb.net/?retryWrites=true&w=majority&appName=MEDICONNECT";
// const dbCon = new MongoClient(uri)
// let dbstatus = null;
// //userRegister Route
// export async  function  POST({ request}) {
//     try {
//  const dbstatus = await dbCon.connect()
//   const Collection = dbstatus.collection("users");
//   const requestData = await request.json();
//   )
//   // insert data from here
//   const result = await Collection.insertOne(requestData);
//   return new Response(    
//     JSON.stringify({ message: "Data submitted Successfully", result }),
//     {
//       status: 200,
//       headers: {"Content-Type":"application/json"},
//     }
//   ); 
// } catch (error){
//     console.error('Error inserting data into MongoDB:', error);
//     return new Response(JSON.stringify({ message: 'Failed to submit data', error }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
// }finally {
//     //closeDb con
//     if(dbstatus) {
//       await dbCon.close()

//     }

 
    
 

// }
// }
