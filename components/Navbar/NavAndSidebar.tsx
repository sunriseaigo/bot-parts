"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import styles from "./navAndSidebar.module.css";
import Image from "next/image";
import Searchbar from "./Searchbar";
import {navRoutes} from "./NavLinks"


const NavAndSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className={styles.navbarAndSidebar}>
        {/* NAVBAR PART */}
        <nav className={styles.navbarContainer}>
          <div className={styles.navbarContainerWrapper}>
            {/* LEFT NAVBAR */}
            <div className={styles.navbarContainerLeft}>
              {/* <div className={styles.navbarContainerHamburger}>
                <Hamburger
                  toggle={setOpenSidebar}
                  toggled={openSidebar}
                  color="#59468d"
                />
              </div> */}
              <div className="">
                <Link href="/">
                  <Image
                    src="/icons/logo.png"
                    alt=""
                    width={106}
                    height={62}
                    className={styles.navbarContainerLogo}
                  />
                </Link>
              </div>
            </div>
            {/* Middle */}
            <Searchbar/>
            {/* RIGHT NAVBAR */}
            <div className={styles.navbarContainerRightItems}>
              <Select>
                <SelectTrigger customIcon className="hidden xl:flex w-[248px] h-[42px] bg-secondary" style={{borderRadius:'29px'}}>
                  <SelectValue placeholder="0 800 000 00 00"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0 800 000 00 00">0 800 000 00 00</SelectItem>
                  <SelectItem value="0 911 000 00 00">0 911 000 00 00</SelectItem>
                  <SelectItem value="0 544 000 00 00">0 544 000 00 00</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="hidden xl:flex w-[94px] h-[38px]" style={{borderRadius:'29px'}}>
                  <SelectValue placeholder="УКР"/>
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="УКР">УКР</SelectItem>
                  <SelectItem value="УКX">УКX</SelectItem>
                  <SelectItem value="УКZ">УКZ</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-6">
                <div className={styles.navbarContainerHamburger}>
                  <Hamburger
                    toggle={setOpenSidebar}
                    toggled={openSidebar}
                    color="#59468d"
                  />
                </div>
                <Image
                  src="/icons/cart.svg"
                  alt=""
                  width={38}
                  height={30}
                />
              </div>
            </div>
          </div>
        </nav>
        {/* SIDEBAR PART */}
        <div className={openSidebar ? styles.sidebarBackground : ""}>
          <div
            className={`${openSidebar ? styles.translateForSidebar : styles.translateForSidebarNeg} ${styles.setSidebarForToggle} ${styles.transform} ${styles.transitionAll} ${styles.duration}`}
          >
            <div className={styles.sidebarTop}>
              <Link onClick={()=>{setOpenSidebar(!openSidebar)}} href="/">
                <Image
                  src="/icons/logo.png"
                  alt=""
                  width={106}
                  height={62}
                  className={styles.navbarContainerLogo}
                />
              </Link>
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#59468d"
              />
            </div>
            <ul className={styles.SidebarItems}>
              {navRoutes.map((item, index)=>(
                <div key={index}>
                  <Link onClick={()=>{setOpenSidebar(!openSidebar)}} href={item.route}>{item.name}</Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavAndSidebar;
