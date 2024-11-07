import { OpenconDB } from "./MongoCon";
//userRegister Route
export async  function  userRegister({ data}  ) {
    try {
 const DB = await OpenconDB();
  const Collection = DB.collection("users");
  const request = await data.json();
  // insert data from here
  const result = await Collection.insertOne(request);
  return new Response(
    JSON.stringify({ message: "Data submitted Successfully", result }),
    {
      status: 200,
      headers: { "Content-Type  ": "applicaton/json" },
    }
  ); 
} catch (error){
    console.error('Error inserting data into MongoDB:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit data', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
}finally {
    await CloseconDB();
}
}
