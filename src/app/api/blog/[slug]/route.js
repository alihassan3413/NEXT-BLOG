// In your API route file
import connectToDb from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connectToDb(); // Ensure database connection is awaited
    const post = await Post.findOne({ slug }); // Use an object to query
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { message: "Failed to fetch post!" },
      { status: 500 }
    );
  }
};
