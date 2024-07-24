import mongoose from "mongoose";
import database from "./connection.js";
import { User, OwnedShares, Portfolio, Stock } from "../models/index.js";
import eraseDatabaseTable from "./eraseDatabaseTable.js";

database.once("open", async () => {
    await eraseDatabaseTable("Stock", "stocks");
    await eraseDatabaseTable("OwnedShares", "ownedshares");
    await eraseDatabaseTable("Portfolio", "portfolios");
    await eraseDatabaseTable("User", "users");

    const stockSeeds = async () => {
        const stockSeedUrl = "https://api.twelvedata.com/stocks?country=US";
        const response = await fetch(stockSeedUrl);
        const seedData = await response.json();

        const sortedSeedData = seedData.data.map((stock) => ({
            // give each stock an id
            _id: new mongoose.Types.ObjectId(),
            ticker: stock.symbol,
            exchange: stock.exchange,
            name: stock.name,
        }));
        return sortedSeedData;
    };

    const stockSeedData = await stockSeeds();
    const stocks = await Stock.insertMany(stockSeedData);

    console.log(`${stockSeedData.length} stocks seeded`);

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
