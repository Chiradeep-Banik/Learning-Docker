import { Client } from "pg";

const client = new Client({
    user: "postgres",
    host: "database-postgres",
    database: "dockertutorial",
    password: "postgres",
    port: 5432
});
const main = async () => {
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (err) {
        console.error(err);
    }
};

main();
export default client;