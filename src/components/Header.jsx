import Image from "next/image";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { FiShoppingCart as CartIcon } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://i.postimg.cc/rmmfqYWD/amazon-PNG11.png"
            alt="logo"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="m-2" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Daniel Calvo</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 -right-1 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black text-bold">
              5
            </span>
            <CartIcon size={30} />
            <p className="hidden md:inline ml-1 font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
