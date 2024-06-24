import Link from "next/link";

interface MobileMenuProps {
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleClose }) => {
  return (
    <div className="h-screen w-screen fixed top-[60px] left-0 z-50 bg-white  ">
      <nav className="p-4 pl-8">
        <ul className="space-y-6">
          <li onClick={handleClose}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/services">Services</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
