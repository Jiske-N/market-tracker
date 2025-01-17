import mongoose from "mongoose";

const { Schema } = mongoose;

const ownedSharesSchema = new Schema({
    purchasePrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    stock: {
        type: Schema.Types.ObjectId,
        ref: "Stock",
    },
});

const OwnedShares = mongoose.model("OwnedShares", ownedSharesSchema);

export default OwnedShares;
