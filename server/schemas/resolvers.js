import mongoose from "mongoose";
import { User, Portfolio, OwnedShares, Stock } from "../models/index.js";
import { signToken, AuthenticationError } from "../utilities/auth.js";
import { getCurrentDateTime } from "../utilities/helpers.js";

export const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                // .populate({
                //     add things to populate
                // })

                return user;
            }

            throw AuthenticationError;
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log("ser-resolvers.js args", args);
            const user = await User.create(args);
            console.log("ser-resolvers.js user", user);
            const token = signToken(user);
            console.log("ser-resolvers.js token", token);

            return { token, user };
        },
        updateUser: async (parent, args) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {
                    new: true,
                });
            }

            throw AuthenticationError;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw AuthenticationError;
            }

            console.log("ser-resolvers.js user", user);
            const token = signToken(user);
            console.log("ser-resolvers.js token", token);

            return { token, user };
        },
        addPortfolio: async (parent, { name }, context) => {
            console.log("the things", context.user, name);
            if (context.user) {
                const portfolio = await Portfolio.create({
                    name,
                });
                console.log("the things", portfolio);
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { portfolios: portfolio._id } }
                );

                return portfolio;
            }
            throw AuthenticationError;
        },
        addShares: async (
            parent,
            { stock, portfolio, quantity, purchasePrice }
        ) => {
            console.log(
                "the things",
                purchasePrice,
                quantity,
                stock,
                portfolio
            );
            // if (purchasePrice && quantity && stock && portfolio) {
            const shares = await OwnedShares.create({
                purchasePrice,
                quantity,
                stock,
            });
            console.log("the things", shares);
            await Portfolio.findOneAndUpdate(
                { _id: portfolio },
                { $addToSet: { portfolioStocks: shares } }
            );

            return shares;
            // }
        },
        updateStock: async (parent, { ticker }) => {
            // get date from helper in the correct format for the api
            const endDate = getCurrentDateTime();
            const twelveDataApiKey = process.env.TWELVEDATA_API_KEY;

            // potentially tweak the interval, also maybe set the startDate
            const twelveDataUrl = `https://api.twelvedata.com/time_series?apikey=${twelveDataApiKey}&interval=1month&symbol=${ticker}&end_date=${endDate}&start_date=2014-07-23 19:03:00&format=JSON&dp=2`;

            const twelveDataResponse = await fetch(twelveDataUrl);
            const historicalData = await twelveDataResponse.json();

            const exchange = historicalData.meta.exchange;
            const sortedHistoricalPrices = historicalData.values.map(
                (historicPrice) => ({
                    // give each historic price an id
                    _id: new mongoose.Types.ObjectId(),
                    // only keep the date portion of datetime
                    date: historicPrice.datetime.slice(0, 10),
                    closingPrice: historicPrice.close,
                })
            );

            const stock = await Stock.findOneAndUpdate(
                { ticker: ticker },
                { exchange: exchange, historicPrices: sortedHistoricalPrices },
                { new: true }
            );

            // can be used to add a new stock, I don't think I will used it based on the current plan as all stocks should be added by an api in seeds but I'll leave it here now in case
            // const newStock = await Stock.create({
            //     ticker: ticker,
            //     exchange: exchange,
            //     historicPrices: sortedHistoricalData,
            // });

            return stock;
        },
    },
};
