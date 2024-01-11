import { Schema, model, models } from "mongoose";

const RecordSchema = new Schema(
    {
        inputId:{
          type: String,
          required:true,
          unique: true
        },
        template: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        sampledDate: {
          type: Date,
        },
        recdDate: {
          type: Date,
        },
        completedDate: {
          type: Date,
        },
        authorizedDate: {
          type: Date,
        },
      },
      { timestamps: true }
    );

const Record = models.Record || model("User", RecordSchema);

export default Record;