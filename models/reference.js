import { Schema, model, models } from "mongoose";

const ReferenceSchema = new Schema(
    {
        specimenId: {
          type: Schema.Types.ObjectId,
          ref: "Information"
        },
        author: {
          type: String,
          required: true,
        },
        sourceTitle: {
          type: String,
          required: true,
        },
        articleTitle: {
          type: String,
        },
        publicationDate: {
          type: String,
        },
        publicationPlace: {
          type: String,
        },
        publisher: {
          type: String,
        },
        volumeNumber: {
          type: String,
        },
        website: {
          type: String,
        },
        url: {
          type: String,
        },
        pages: {
          type: String,
        },
        accessDate: {
          type: String,
        },
        is_deleted: { type: Boolean, default: false }
      },
      { timestamps: true }
    );

const Reference = models.Reference || model("Reference", ReferenceSchema);

export default Reference;