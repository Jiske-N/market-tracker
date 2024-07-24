import mongoose from "mongoose";

const { Schema } = mongoose;

const stock = new Schema({
    name: {
        type: String,
    },
    ticker: {
        type: String,
        required: true,
    },
    exchange: {
        type: String,
    },
    historicPrices: [
        {
            date: String,
            closingPrice: Number,
        },
    ],
});

const Stock = mongoose.model("Stock", stock);

export default Stock;
