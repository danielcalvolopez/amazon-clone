import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Image
            src="https://i.postimg.cc/rmmfqYWD/amazon-PNG11.png"
            alt="logo"
            width={150}
            height={40}
          />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
