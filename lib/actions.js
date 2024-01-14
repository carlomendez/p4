"use server";

import { revalidatePath } from "next/cache";
import Article from "@models/article";
import Record from "@models/record";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
// import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
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

  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
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

  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
};

export const addArticle = async (formData) => {
  const { title, desc, author, img } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newArticle = new Article({
      title,
      desc,
      author,
      img
    });

    await newArticle.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create article!");
  }

  revalidatePath("/news");
  redirect("/news");
};

export const updateArticle = async (formData) => {
  const { id, title, desc, author, img} =
    Object.fromEntries(formData);

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

  revalidatePath("/news");
  redirect("/news");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
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
    await User.findByIdAndDelete(id);
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
