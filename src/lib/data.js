import { Post, User } from "./models";
import connectToDb from "./connectToDb";

export const getPosts = async () => {
  await connectToDb();
  try {
    const posts = await Post.find(); // Fetch posts from the database
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  await connectToDb();
  try {
    const post = await Post.findOne({ slug }); // Fetch a specific post by slug
    return post;
  } catch (error) {
    throw new Error("Failed to fetch the post!");
  }
};

export const getUser = async (id) => {
  await connectToDb();
  try {
    const user = await User.findById(id); // Fetch a user by ID
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  await connectToDb();
  try {
    const users = await User.find(); // Fetch all users
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
};
