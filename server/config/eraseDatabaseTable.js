import { User } from "../models/index.js";
import database from "./connection.js";

// need to add all models to here and import manually
const models = { User };

const eraseDatabaseTable = async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        const collection = database.collection(collectionName);

        const modelExists = await collection.findOne();
        if (modelExists) {
            await model.collection.drop();
            console.log(`Collection ${collectionName} dropped sucessfully.`);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export default eraseDatabaseTable;
