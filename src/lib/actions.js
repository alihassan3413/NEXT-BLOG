"use server";
import { revalidatePath } from "next/cache";
import connectToDb from "./connectToDb";
import { Post } from "./models";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await post.save();
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(_id);
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
  }
};
