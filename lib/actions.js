"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@utils/database";
import { redirect } from "next/navigation";
import Article from "@models/article";
import Record from "@models/record";
import Taxonomy from "@models/taxonomy";
import Reference from "@models/reference";
import Information from "@models/information";
// import { signIn } from "../auth";

// export const addUser = async (formData) => {
//   const { username, email, password, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData);

//   try {
//     connectToDB();

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       phone,
//       address,
//       isAdmin,
//       isActive,
//     });

//     await newUser.save();
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to create user!");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
// };

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

export const addInformation = async (formData) => {
  const { 
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
    additionalInformation 
  } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newInformation = new Information({
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
      additionalInformation
    });

    await newInformation.save();
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
    additionalInformation 
  } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
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
      additionalInformation 
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Information.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain information!");
  }

  revalidatePath(`/dashboard/records/${id}`);
  redirect(`/dashboard/records/${id}`);
};

export const addTaxonomy = async (formData) => {
  const { 
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

  try {
    connectToDB();

    const newTaxonomy = new Taxonomy({
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

    await newTaxonomy.save();
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

  try {
    connectToDB();

    const updateFields = {
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

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Taxonomy.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain Taxonomy!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const addReference = async (formData) => {
  const { 
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

  try {
    connectToDB();

    const newReference = new Reference({
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

    await newReference.save();
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

  try {
    connectToDB();

    const updateFields = {
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

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Reference.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update strain Reference!");
  }

  revalidatePath(`/dashboard/records/${specimenId}`);
  redirect(`/dashboard/records/${specimenId}`);
};

export const addRecord = async (formData) => {
  const { inputId, template, location, sampledDate, recdDate, completedDate, authorizedDate } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newRecord = new Record({
      inputId, template, location, sampledDate, recdDate, completedDate, authorizedDate
    });

    await newRecord.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create record!");
  }

  revalidatePath("/dashboard/old-records");
  redirect("/dashboard/old-records");
};

export const updateRecord = async (formData) => {
  const { id, inputId, template, location, sampledDate, recdDate, completedDate, authorizedDate} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      id, inputId, template, location, sampledDate, recdDate, completedDate, authorizedDate
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Record.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update record!");
  }

  revalidatePath("/dashboard/old-records");
  redirect("/dashboard/old-records");
};

export const addArticle = async (formData) => {
  const { title, desc, author, creator, img } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newArticle = new Article({
      title,
      desc,
      author,
      creator,
      img
    });

    await newArticle.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create article!");
  }

  revalidatePath("/article-dashboard");
  redirect("/article-dashboard");
};

export const updateArticle = async (formData) => {
  const { id, title, desc, author, img} =
    Object.fromEntries(formData);
    console.log(desc)
  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      author,
      img
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Article.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/article-dashboard");
  redirect("/article-dashboard");
};

// export const deleteUser = async (formData) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectToDB();
//     await User.findByIdAndDelete(id);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to delete user!");
//   }

//   revalidatePath("/dashboard/users");
// };

export const deleteInformation = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Information.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Information entry!");
  }

  revalidatePath("/dashboard/records");
};

export const deleteReference = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Reference.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Reference entry!");
  }

  revalidatePath("/dashboard/records");
};

export const deleteArticle = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Article.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/news");
};

export const deleteRecord = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Record.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete record!");
  }

  revalidatePath("/dashboard/records");
};

// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (err) {
//     return "Bad Credentials!";
//   }
// };
