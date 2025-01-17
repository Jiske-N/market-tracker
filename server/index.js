import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import database from "./config/connection.js";
import { typeDefs, resolvers } from "./schemas/index.js";
import { authMiddleware } from "./utilities/auth.js";
import "dotenv/config";
import path from "path";

// need to add this because I'm using esm modules rather than commonjs modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { fileURLToPath } from "url";

// ________________
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import http from "http";
// import cors from "cors";
// __________________

// const database = require("./config/connection");

const PORT = process.env.PORT || 9001;
const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
    await apolloServer.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // // Serve up static assets
    // app.use(
    //     "/images",
    //     express.static(path.join(__dirname, "../client/images"))
    // );

    app.use(
        "/graphql",
        expressMiddleware(apolloServer, {
            context: authMiddleware,
        })
    );

    // console.log(
    //     "Serving static files from:",
    //     path.join(__dirname, "../client/dist")
    // );
    // console.log(
    //     "Index.html path:",
    //     path.resolve(__dirname, "../client/dist/index.html")
    // );

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "../client/dist")));

        // possibly replace * with / if we want to run multiple files?
        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
        });
    }

    database.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
    // database.then(() => {
    //     app.listen(PORT, () => {
    //         console.log(`API server running on port ${PORT}!`);
    //         console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    //     });
    // });
};

// Call the async function to start the server
startApolloServer();

// ___________________________________________________________________________
// express
// const app = express();
// const port = 6001;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// ___________________________________________________________________________
// // apollo server
// // Required logic for integrating with Express
// const app = express();
// // Our httpServer handles incoming requests to our Express app.
// // Below, we tell Apollo Server to "drain" this httpServer,
// // enabling our servers to shut down gracefully.
// const httpServer = http.createServer(app);

// // Same ApolloServer initialization as before, plus the drain plugin
// // for our httpServer.
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });
// // Ensure we wait for our server to start
// await server.start();

// // Set up our Express middleware to handle CORS, body parsing,
// // and our expressMiddleware function.
// app.use(
//     "/",
//     cors(),
//     express.json(),
//     // expressMiddleware accepts the same arguments:
//     // an Apollo Server instance and optional configuration options
//     expressMiddleware(server, {
//         context: async ({ req }) => ({ token: req.headers.token }),
//     })
// );

// // Modified server startup
// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

// console.log(`🚀 Server ready at http://localhost:4000/`);
