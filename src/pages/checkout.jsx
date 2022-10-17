import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2021/01/12/Competency-Banner-2021-Thin.png"
            width={1020}
            height={350}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map(
              (
                {
                  hasPrime,
                  rating,
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                },
                i
              ) => (
                <CheckoutProduct
                  id={id}
                  key={id}
                  title={title}
                  price={price}
                  hasPrime={hasPrime}
                  image={image}
                  category={category}
                  rating={rating}
                  description={description}
                />
              )
            )}
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
