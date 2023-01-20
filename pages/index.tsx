import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const userService = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  };

  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/product"); // bu esa route ni ga o'tib uni almashtirish uchun
    // router.push("/product"); // bu boshqa route ga o'tish uchun
  };

  return (
    <div>
      <h1>Home Component</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
      <button onClick={() => userService()}>CLicked</button>
    </div>
  );
};

export default Home;
