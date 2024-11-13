export const prerender = false;
import turso from "../../lib/tursodb";
import type { APIRoute } from "astro";
import fetchID from "./fetchID";
import bcryptjs from "bcryptjs";
export const POST: APIRoute = async ({ request }) => {
  try {
    let Newid = await fetchID("users");
    const id: number = Newid + 1;
    const data = await request.json();
    const name: string = data.name;
    const username: string = data.username;
    const email: string = data.email;
    const position: string = data.position;
    const password = data.password;
    const salt = 10;
    const hashedPassword = await bcryptjs.hash(password, salt);
    const passwordhash: string = hashedPassword;
    const sql =
      "INSERT INTO users (id, name, username, email, position, passwordhash) VALUES (?,?,?,?,?,?)";
    const args = [id, name, username, email, position, passwordhash];
    await turso.execute({ sql, args });
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(JSON.stringify({ message: "Error occurred" }), {
      status: 400,
    });
  }
};
