import mongoose from "mongoose";

const { Schema } = mongoose;

const portfolioSchema = new Schema({
    name: String,
    portfolioStocks: [
        {
            type: Schema.Types.ObjectId,
            ref: "OwnedShares",
        },
    ],
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
