import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
    </div>
  );
};

export default Home;
