import database from "./connection.js";
import { User } from "../models/index.js";
import eraseDatabaseTable from "./eraseDatabaseTable.js";

database.once("open", async () => {
    await eraseDatabaseTable("User", "users");

    await User.create({
        firstName: "Susy",
        lastName: "Sanders",
        email: "Susy@gmail.com.com",
        password: "12345",
        darkMode: true,
    });

    await User.create({
        firstName: "Sam",
        lastName: "Smith",
        email: "sam@gmail.com",
        password: "12345",
        darkMode: false,
    });

    console.log("users seeded");

    process.exit();
});
