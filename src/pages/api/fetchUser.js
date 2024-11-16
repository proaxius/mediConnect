import turso from "../../lib/tursodb";
export default async function fetchID ( ) {
    const username = 'admin01' 
    
    const currentID = await turso.execute(' SELECT * FROM users')
    const id = currentID.rows[0];
    return id

    
}