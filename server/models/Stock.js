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
    // probably add country and type(as in common stock, etf etc) in future but not needed for mvp
    historicPrices: [
        {
            date: String,
            closingPrice: Number,
        },
    ],
});

const Stock = mongoose.model("Stock", stock);

export default Stock;
