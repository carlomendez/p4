import { Schema, model, models } from "mongoose";

const InformationSchema = new Schema(
    {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User"
        },
        strainId:{
          type: String,
          required:true,
          unique: true
        },
        accessionNumber: {
          type: String,
          unique: true,
        },
        genusspecies: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
        trait: {
          type: String,
        },
        economicUse: {
          type: String,
        },
        habitatInformation: {
          type: String,
        },
        speciesAuthor: {
          type: String,
        },
        isolator: {
          type: String,
        },
        provenance: {
          type: String,
        },
        additionalInformation: {
          type: String,
        },
        is_deleted: { type: Boolean, default: false }
      },
      { timestamps: true }
    );

const Information = models.Information || model("Information", InformationSchema);

export default Information;