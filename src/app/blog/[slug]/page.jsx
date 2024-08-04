import Image from "next/image";
import styles from "./singlePost.module.css";
import Postuser from "@/components/postUser/Postuser";
import { getPost } from "@/lib/data";

const getData = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!response.ok) {
    throw new Error("Something went wrong with api request");
  }

  return response.json();
};
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};
async function SignlePostPage({ params }) {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image src={post.img} alt="" fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Postuser userId={post.userId} />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString.slice(4, 16)} */}
              2024-01-01
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default SignlePostPage;
