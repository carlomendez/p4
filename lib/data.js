import Article from "@models/article";
import User from "@models/user";
import Taxonomy from "@models/taxonomy";
import Reference from "@models/reference";
import Information from "@models/information";
import Log from "@models/log";
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

export const fetchUserByEmail = async (email) => {
  console.log(email);
  try {
    connectToDB();
    const user = await User.find({ email : email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchLogs = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await Log.find({ 
      $or: [
        { category: { $regex: regex }}, 
        { entry: { $regex: regex }}
      ]
     }).count();
    const logs = await Log.find({ 
      $or: [
        { category: { $regex: regex }}, 
        { entry: { $regex: regex }}
      ]
     })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, logs };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch logs!");
  }
};

export const fetchLog = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const log = await Log.findById(id);
    return log;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch log!");
  }
};

export const fetchInformationList = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    // const count = await Information.find({ title: { $regex: regex } }).count();
    const count = await Information.find({ 
      $and: [
        {$or: [
          { strainId: { $regex: regex } }, 
          { genusspecies: { $regex: regex }}, 
          { accessionNumber: { $regex: regex }}, 
          { description: { $regex: regex }}
        ]},
        { is_deleted: false }
      ]
    }).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const informationList = await Information.find({
      $and: [
        {$or: [
          { strainId: { $regex: regex } }, 
          { genusspecies: { $regex: regex }}, 
          { accessionNumber: { $regex: regex }}, 
          { description: { $regex: regex }}
        ]},
        { is_deleted: false }
      ]
      })
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
    const count = await Reference.find({ 
      $and: [
        {$or: [
          { author: { $regex: regex }}, 
          { articleTitle: { $regex: regex }}
        ]},
        { is_deleted: false }
      ]
    }).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const references = await Reference.find({ 
      $and: [
        {$or: [
          { author: { $regex: regex }}, 
          { articleTitle: { $regex: regex }}
        ]},
        { is_deleted: false }
      ]
    })
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
    const count = await Reference.find({
      $and:[
        { $or: [
          { author: { $regex: regex }}, 
          { articleTitle: { $regex: regex }}
        ]},
        { specimenId: id },
        { is_deleted: false }
      ]}).count();
    // const informationList = await Information.find({ title: { $regex: regex } })
    const references = await Reference.find({
      $and:[
        { $or: [
          { author: { $regex: regex }}, 
          { articleTitle: { $regex: regex }}
        ]},
        { specimenId: id },
        { is_deleted: false }
      ]})
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
    const count = await Article.find({ 
      $and:[
        { title: { $regex: regex } },
        { is_deleted: false }
      ]
    }).count();
    const articles = await Article.find({ 
      $and:[
        { title: { $regex: regex } },
        { is_deleted: false }
      ]
    })
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
