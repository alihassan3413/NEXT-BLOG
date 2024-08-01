import Link from "next/link";
function notFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry, the page you are lookingfor not exist</p>
      <Link href="/">Return Home</Link>
    </>
  );
}

export default notFound;
