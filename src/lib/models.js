// models.js
import mongoose from "mongoose";

// Define User schema and model
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Define Post schema and model
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Export models
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
