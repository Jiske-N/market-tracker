import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;
const expiryTime = "2h";

export const AuthenticationError = new GraphQLError(
    "Could not authenticate user.",
    {
        extensions: {
            code: "UNAUTHENTICATED",
        },
    }
);

export const authMiddleware = function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiryTime });
        req.user = data;
    } catch {
        console.log("Invalid token.");
    }

    return req;
};

export const signToken = function ({ firstName, email, _id }) {
    console.log("ser/util/auth signtoken", firstName, email, _id);
    const payload = { firstName, email, _id };

    console.log("ser/util/auth signtoken payload", payload);

    console.log("ser/util/auth signtoken payload", JWT_SECRET, expiryTime);

    const signToken = jwt.sign({ data: payload }, JWT_SECRET, {
        expiresIn: expiryTime,
    });

    console.log("ser/util/auth signtoken payload", signToken);

    return signToken;

    // return jwt.sign({ data: payload }, JWT_SECRET, {
    //     expiresIn: expiryTime,
    // });
};
