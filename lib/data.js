import Article from "@models/article";
import Record from "@models/record";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchArticles = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Article.find({ title: { $regex: regex } }).count();
    const articles = await Article.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, articles };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch articles!");
  }
};

export const fetchArticle = async (id) => {
  try {
    connectToDB();
    const article = await Article.findById(id);
    return article;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch article!");
  }
};

export const fetchRecords = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Record.find({ id: { $regex: regex } }).count();
    const records = await Record.find({ id: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, records };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch records!");
  }
};

export const fetchRecord = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const record = await Record.findById(id);
    return record;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch record!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Received",
    number: 85,
    change: 12,
  },
  {
    id: 2,
    title: "Completed",
    number: 190,
    change: -2,
  },
  {
    id: 3,
    title: "Authorized",
    number: 263,
    change: 18,
  },
];
