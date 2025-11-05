import { UserButton } from "@clerk/clerk-react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-40 flex items-center justify-between bg-(--color-bg-main) shadow-lg py-4  text-(--color-primary) px-4 md:px-16 lg:px-24 xl:px-32">
      <Link
        to="/"
        className={`h-9 transition-opacity  invert opacity-100`}
      >
        <img src={logoImg} alt="quickstay logo" />
      </Link>
      <UserButton/>
    </div>
  );
};

export default Nav;
