import {Schema, model, models} from "mongoose";

const LogSchema = new Schema( 
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        category: {
            type: String
        },
        entry: {
            type: String
        },
    },
    { timestamps: true }
);

const Log = models.Log || model('Log', LogSchema);

export default Log;