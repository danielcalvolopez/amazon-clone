import Image from "next/image";
import Header from "../components/Header";

const Checkout = () => {
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
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
