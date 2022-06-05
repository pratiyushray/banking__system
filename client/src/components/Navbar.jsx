import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

function openInNewTab(url) {
  console.log("HEY")
  var win = window.open(url, '_blank');
  win.focus();
}

const NavBarItem = ({ title, classprops,link }) => (
  <li className={`mx-4 cursor-pointer ${classprops}` } onClick={() => openInNewTab(link)}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      {[{name: "Market", link:'https://coinmarketcap.com/'}, {name:"Exchange",link:'https://www.xe.com/currencyconverter/'}, {name:"Tutorials",link:'https://youtu.be/fevDVQDzqv8/'}, {name:"Wallets",link:'https://ropsten.etherscan.io/address/0xCF8e569A97C423952DdFf902375C7C76549A6A90'}].map(
              (item, index) => <NavBarItem key={item.name + index} title={item.name} classprops="my-2 text-lg" link={item.link} />,
            )}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[{name: "Market", link:'https://coinmarketcap.com/'}, {name:"Exchange",link:'https://www.xe.com/currencyconverter/'}, {name:"Tutorials",link:'https://youtu.be/fevDVQDzqv8'}, {name:"Wallets",link:'https://ropsten.etherscan.io/address/0xCF8e569A97C423952DdFf902375C7C76549A6A90'}].map(
              (item, index) => <NavBarItem key={item.name + index} title={item.name} classprops="my-2 text-lg" link={item.link} />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
