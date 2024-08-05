"use server";
import { revalidatePath } from "next/cache";
import connectToDb from "./connectToDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bycrpt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await post.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const post = new User({
      username,
      email,
      password,
      img,
    });

    await post.save();
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
  }
};

export const githubLogin = async () => {
  await signIn("github");
};

export const githubLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordConfirm, img } =
    Object.fromEntries(formData);

  if (password != passwordConfirm) {
    return { error: "Passwords do not matchs" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "User with that username already exist" };
    }

    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(err);
    return { error: "Something went wrong." };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("credentialssignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
