import { User, Portfolio, OwnedShares, Stock } from "../models/index.js";
import { signToken, AuthenticationError } from "../utilities/auth.js";

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
        updateStock: async (parent, { ticker }) => {
            console.log("ser-resolver-upd-stock ticker", ticker);
            const twelveDataApiKey = process.env.TWELVEDATA_API_KEY;
            const twelveDataUrl = `https://api.twelvedata.com/time_series?apikey=${twelveDataApiKey}&interval=1month&symbol=${ticker}&end_date=2024-07-23 19:03:00&start_date=2014-07-23 19:03:00&format=JSON&dp=2`;

            const twelveDataResponse = await fetch(twelveDataUrl);
            const historicalData = await twelveDataResponse.json();

            console.log(historicalData);

            // const data = null;

            // const xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;

            // xhr.addEventListener("readystatechange", function () {
            //     if (this.readyState === this.DONE) {
            //         console.log(this.responseText);
            //     }
            // });

            // xhr.open("GET", twelveDataUrl);

            // xhr.send(data);

            // const stock = await Stock.create(data);

            return true;
        },
    },
};
