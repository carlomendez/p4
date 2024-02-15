import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
    {
        title: {
          type: String,
          required: [true, 'Title is required'],
          unique: true,
        },
        desc: {
          type: String,
          required: [true, 'Content is required']
        },
        author: {
          type: String,
          required: [true, 'Author is required']
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        img: {
          type: String,
        },
        is_deleted: { type: Boolean, default: false }
      },
      { timestamps: true }
    );

const Article = models.Article || model("Article", ArticleSchema);

export default Article;