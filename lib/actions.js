"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@utils/database";
import { redirect } from "next/navigation";
import Article from "@models/article";
import Taxonomy from "@models/taxonomy";
import Reference from "@models/reference";
import Information from "@models/information";
import Log from "@models/log";

// export const updateUser = async (formData) => {
//   const { id, username, email, password, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData);

//   try {
//     connectToDB();

//     const updateFields = {
//       username,
//       email,
//       password,
//       phone,
//       address,
//       isAdmin,
//       isActive,
//     };

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === "" || undefined) && delete updateFields[key]
//     );

//     await User.findByIdAndUpdate(id, updateFields);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to update user!");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
// };

export const addLog = async ({userId, category, entry}) => {

  try {

    const newLog = new Log({
      userId, 
      category,
      entry
    });

    await newLog.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new log entry!");
  }
}

export const addInformation = async (formData) => {
  const { 
    userId,
    strainId, 
    accessionNumber, 
    genusspecies,
    description, 
    trait, 
    economicUse, 
    habitatInformation, 
    speciesAuthor, 
    isolator, 
    provenance, 
    additionalInformation,
    latitude,
    longitude 
  } =
    Object.fromEntries(formData);
    const category = 'addInformation';

  try {
    connectToDB();

    const newInformation = new Information({
      userId,
      strainId, 
      accessionNumber, 
      genusspecies,
      description, 
      trait, 
      economicUse, 
      habitatInformation, 
      speciesAuthor, 
      isolator, 
      provenance, 
      additionalInformation,
      latitude,
      longitude 
    });
    const entry = JSON.stringify(newInformation);

    await newInformation.save();
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new strain Information!");
  }

  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
};

export const updateInformation = async (formData) => {
  const { 
    id, 
    userId,
    strainId, 
    accessionNumber, 
    genusspecies,
    description, 
    trait, 
    economicUse, 
    habitatInformation, 
    speciesAuthor, 
    isolator, 
    provenance, 
    additionalInformation,
    latitude,
    longitude  
  } =
    Object.fromEntries(formData);
    const category = 'updateInformation';

  try {
    connectToDB();

    const updateFields = {
      userId,
      strainId, 
      accessionNumber,
      genusspecies, 
      description, 
      trait, 
      economicUse, 
      habitatInformation, 
      speciesAuthor, 
      isolator, 
      provenance, 
      additionalInformation,
      latitude,
      longitude  
    };

    const entry = JSON.stringify(updateFields);

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Information.findByIdAndUpdate(id, updateFields);
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain information!");
  }

  revalidatePath(`/dashboard/records/${id}`);
  redirect(`/dashboard/records/${id}`);
};

export const addTaxonomy = async (formData) => {
  const { 
    userId,
    specimenId, 
    strain, 
    subspecies, 
    species, 
    genus, 
    family, 
    order, 
    classs, 
    phylum, 
    kingdom,
    domain 
  } =
    Object.fromEntries(formData);
    const category = 'addTaxonomy';

  try {
    connectToDB();

    const newTaxonomy = new Taxonomy({
      userId,
      specimenId, 
      strain, 
      subspecies, 
      species, 
      genus, 
      family, 
      order, 
      classs, 
      phylum, 
      kingdom,
      domain 
    });
    const entry = JSON.stringify(newTaxonomy);

    await newTaxonomy.save();
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new strain Taxonomy!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const updateTaxonomy = async (formData) => {
  const { 
    id, 
    userId,
    specimenId, 
    strain, 
    subspecies, 
    species, 
    genus, 
    family, 
    order, 
    classs, 
    phylum, 
    kingdom,
    domain 
  } =
    Object.fromEntries(formData);
    const category = 'updateTaxonomy';

  try {
    connectToDB();

    const updateFields = {
      userId,
      specimenId, 
      strain, 
      subspecies, 
      species, 
      genus, 
      family, 
      order, 
      classs, 
      phylum, 
      kingdom,
      domain 
    };
    const entry = JSON.stringify(updateFields);

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Taxonomy.findByIdAndUpdate(id, updateFields);
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain Taxonomy!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const addReference = async (formData) => {
  const { 
    userId,
    specimenId, 
    author, 
    sourceTitle, 
    articleTitle, 
    publicationDate, 
    publicationPlace, 
    publisher, 
    volumeNumber, 
    website, 
    url,
    pages,
    accessDate 
  } =
    Object.fromEntries(formData);
    const category = 'addReference';

  try {
    connectToDB();

    const newReference = new Reference({
      userId,
      specimenId, 
      author, 
      sourceTitle, 
      articleTitle, 
      publicationDate, 
      publicationPlace, 
      publisher, 
      volumeNumber, 
      website, 
      url,
      pages,
      accessDate 
    });
    const entry = JSON.stringify(newReference);

    await newReference.save();
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create new strain Reference!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const updateReference = async (formData) => {
  const { 
    id, 
    userId,
    specimenId, 
    author, 
    sourceTitle, 
    articleTitle, 
    publicationDate, 
    publicationPlace, 
    publisher, 
    volumeNumber, 
    website, 
    url,
    pages,
    accessDate 
  } =
    Object.fromEntries(formData);
    const category = 'updateReference';

  try {
    connectToDB();

    const updateFields = {
      userId,
      specimenId, 
      author, 
      sourceTitle, 
      articleTitle, 
      publicationDate, 
      publicationPlace, 
      publisher, 
      volumeNumber, 
      website, 
      url,
      pages,
      accessDate 
    };
    const entry = JSON.stringify(updateFields);

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Reference.findByIdAndUpdate(id, updateFields);
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain Reference!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const addArticle = async (formData) => {
  const { title, desc, author, creator, img } =
    Object.fromEntries(formData);
    const category = 'addArticle';

  try {
    connectToDB();

    const newArticle = new Article({
      title,
      desc,
      author,
      creator,
      img
    });
    const entry = JSON.stringify(newArticle);

    await newArticle.save();
    await addLog({creator, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create article!");
  }

  revalidatePath("/article-dashboard");
  redirect("/article-dashboard");
};

export const updateArticle = async (formData) => {
  const { id, title, desc, author, creator, img} =
    Object.fromEntries(formData);
    const category = 'updateArticle';

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      author,
      creator,
      img
    };
    const entry = JSON.stringify(updateFields);

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Article.findByIdAndUpdate(id, updateFields);
    await addLog({creator, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/article-dashboard");
  redirect("/article-dashboard");
};

export const deleteInformation = async (formData) => {
  const { id, userId } = Object.fromEntries(formData);
  const category = 'deleteInformation';

  try {
    connectToDB();
    const entry = JSON.stringify({id});
    await Information.findByIdAndUpdate(id, {is_deleted: true});
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Information entry!");
  }

  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
};

export const deleteReference = async (formData) => {
  const { id, userId } = Object.fromEntries(formData);
  const category = 'deleteReference';

  try {
    connectToDB();
    const entry = JSON.stringify({id});
    await Reference.findByIdAndUpdate(id, {is_deleted: true});
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Reference entry!");
  }

  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
};

export const deleteArticle = async (formData) => {
  const { id, userId } = Object.fromEntries(formData);
  const category = 'deleteArticle';

  try {
    connectToDB();
    const entry = JSON.stringify({id});
    await Article.findByIdAndUpdate(id, {is_deleted: true});
    await addLog({userId, category, entry})
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/article-dashboard");
  redirect("/article-dashboard");
};

// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (err) {
//     return "Bad Credentials!";
//   }
// };
