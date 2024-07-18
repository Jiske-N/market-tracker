import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    darkMode: Boolean,
    // portfolio: Portfolio.schema,
    // speculativePortfolio: SpeculativePortfolio.schema,
    // valuations: [Valuation.schema],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
