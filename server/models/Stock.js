import mongoose from "mongoose";

const { Schema } = mongoose;

const stock = new Schema({
    ticker: {
        type: String,
        required: true,
    },
    exchange: {
        type: String,
    },
    historicPrices: [
        {
            date: Date,
            closingPrice: Number,
        },
    ],
});

const Stock = mongoose.model("Stock", stock);

export default Stock;
