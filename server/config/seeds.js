import database from "./connection.js";
import { User, OwnedShares, Portfolio, Stock } from "../models/index.js";
import eraseDatabaseTable from "./eraseDatabaseTable.js";

database.once("open", async () => {
    await eraseDatabaseTable("User", "users");

    const stocks = await Stock.insertMany([
        {
            ticker: "NVDA",
            exchange: "NASDAQ",
            historicPrices: [
                { date: "2024-07-01", closingPrice: 123.54 },
                { date: "2024-07-01", closingPrice: 123.54 },
                { date: "2024-07-01", closingPrice: 123.54 },
                { date: "2024-07-01", closingPrice: 123.54 },
                { date: "2024-07-01", closingPrice: 123.54 },
            ],
        },
        {
            ticker: "AAPL",
            exchange: "NASDAQ",
            historicPrices: [
                { date: "2024-07-01", closingPrice: 223.96 },
                { date: "2024-07-01", closingPrice: 223.96 },
                { date: "2024-07-01", closingPrice: 223.96 },
                { date: "2024-07-01", closingPrice: 223.96 },
                { date: "2024-07-01", closingPrice: 223.96 },
            ],
        },
    ]);

    console.log("stocks seeded");

    const ownedShares = await OwnedShares.insertMany([
        {
            purchasePrice: 124.65,
            quantity: 11,
            stock: stocks[0]._id,
        },
        {
            purchasePrice: 224.85,
            quantity: 17,
            stock: stocks[1]._id,
        },
        {
            purchasePrice: 122.65,
            quantity: 8,
            stock: stocks[0]._id,
        },
        {
            purchasePrice: 219.85,
            quantity: 4,
            stock: stocks[1]._id,
        },
    ]);

    console.log("owned shares seeded");

    const portfolios = await Portfolio.insertMany([
        {
            name: "Owned",
            portfolioStocks: [ownedShares[0]._id, ownedShares[1]._id],
        },
        {
            name: "Speculative",
            portfolioStocks: [ownedShares[2]._id, ownedShares[3]._id],
        },
        {
            name: "Owned",
            portfolioStocks: [],
        },
        {
            name: "Speculative",
            portfolioStocks: [],
        },
    ]);

    console.log("portfolios seeded");

    await User.create({
        firstName: "Susy",
        lastName: "Sanders",
        email: "Susy@gmail.com.com",
        password: "12345",
        darkMode: true,
        portfolios: [portfolios[0]._id, portfolios[1]._id],
    });

    await User.create({
        firstName: "Sam",
        lastName: "Smith",
        email: "sam@gmail.com",
        password: "12345",
        darkMode: false,
        portfolios: [portfolios[2]._id, portfolios[3]._id],
    });

    console.log("users seeded");

    process.exit();
});
