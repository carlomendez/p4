import { Schema, model, models } from "mongoose";

const TaxonomySchema = new Schema(
    {
        specimenId: {
          type: Schema.Types.ObjectId,
          ref: "Information"
        },
        strain:{
          type: String
        },
        subspecies:{
          type: String
        },
        species:{
          type: String
        },
        genus:{
          type: String
        },
        family:{
          type: String
        },
        order:{
          type: String
        },
        classs:{
          type: String
        },
        phylum:{
          type: String,
          required:true
        },
        kingdom:{
          type: String
        },
        domain:{
          type: String
        },
        is_deleted: { type: Boolean, default: false }
      },
      { timestamps: true }
    );

const Taxonomy = models.Taxonomy || model("Taxonomy", TaxonomySchema);

export default Taxonomy;