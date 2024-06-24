import Link from "next/link";

const Nav = () => {
  return (
    <nav className="">
      <ul className=" space-x-6 flex justify-between items-center  ">
        <li className="">
          <Link href="/en/">Home</Link>
        </li>
        <li className="">
          <Link href="/en/services">Services</Link>
        </li>
        <li className="">
          <Link href="/en/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
