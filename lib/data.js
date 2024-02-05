import Article from "@models/article";
import Record from "@models/record";
import User from "@models/user";
import Taxonomy from "@models/taxonomy";
import Reference from "@models/reference";
import Information from "@models/information";
import { connectToDB } from "@utils/database";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

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

export const fetchInformationList = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    // const count = await Information.find({ title: { $regex: regex } }).count();
    const count = await Information.find({ $or: [{ strainId: { $regex: regex } }, { genusspecies: { $regex: regex }}, { accessionNumber: { $regex: regex }}, { description: { $regex: regex }}]}).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const informationList = await Information.find({ $or: [{ strainId: { $regex: regex } }, { genusspecies: { $regex: regex }}, { accessionNumber: { $regex: regex }}, { description: { $regex: regex }}]})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
      // console.log(informationList);
    return { count, informationList };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch information list!");
  }
};

export const fetchInformation = async (id) => {
  try {
    connectToDB();
    const information = await Information.findById(id);
    return information;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch information entry!");
  }
};

export const fetchTaxonomyByStrain = async (id) => {
  try {
    connectToDB();
    const count = await Taxonomy.findOne({specimenId:id}).count();
    const taxonomy = await Taxonomy.findOne({specimenId:id});
    return { count, taxonomy };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch taxonomy entry!");
  }
};

export const fetchTaxonomy = async (id) => {
  try {
    connectToDB();
    const taxonomy = await Taxonomy.findById(id);
    return taxonomy;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch taxonomy entry!");
  }
};

export const fetchReferences = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    // const count = await Information.find({ title: { $regex: regex } }).count();
    const count = await Reference.find({ $or: [{ author: { $regex: regex }}, { articleTitle: { $regex: regex }}]}).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const references = await Reference.find({ $or: [{ author: { $regex: regex }}, { articleTitle: { $regex: regex }}]})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
      // console.log(informationList);
    return { count, references };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch references!");
  }
};

export const fetchStrainReferences = async (q, page, id) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    // const count = await Information.find({ title: { $regex: regex } }).count();
    const count = await Reference.find({$and:[{ $or: [{ author: { $regex: regex }}, { articleTitle: { $regex: regex }}]},{ specimenId: id }]}).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const references = await Reference.find({$and:[{ $or: [{ author: { $regex: regex }}, { articleTitle: { $regex: regex }}]},{ specimenId: id }]})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
      // console.log(informationList);
    return { count, references };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch references!");
  }
};

export const fetchReference = async (id) => {
  try {
    connectToDB();
    const reference = await Reference.findById(id);
    return reference;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch reference entry!");
  }
};

export const fetchArticles = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await Article.find({ title: { $regex: regex } }).count();
    const articles = await Article.find({ title: { $regex: regex } })
      .sort({createdAt: -1})
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
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

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
