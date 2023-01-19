import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>ProductDetail {productId}</h1>;
};

export default ProductDetail;
