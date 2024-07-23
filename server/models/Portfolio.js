const mongoose = require("mongoose");

const { Schema } = mongoose;

const portfolioSchema = new Schema({
    name: String,
    portfolioStocks: [
        {
            type: Schema.Types.ObjectId,
            ref: "PortfolioStock",
        },
    ],
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
