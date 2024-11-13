import { createClient } from "@libsql/client/web";

const turso = createClient({
    url:import.meta.env.ASTRO_DB_REMOTE_URL,
    authToken:import.meta.env.ASTRO_DB_APP_TOKEN,
})

export default turso;