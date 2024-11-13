import turso from "../../lib/tursodb";
export default async function fetchID ( param = " ") {
    const tableName = param
    const SQLstring = `SELECT MAX(ID) FROM ${tableName} `
    const currentID = await turso.execute(SQLstring)
    const id = parseInt(Object.values(currentID.rows[0])[0], 10);
    return id

    
}