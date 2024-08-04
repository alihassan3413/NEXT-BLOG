import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog");
  if (!response.ok) {
    throw new Error("Something wne t wrong with api request");
  }

  return response.json();
};
export default async function BlogPage() {
  const posts = await getData(); // Fetch posts on the server side
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
