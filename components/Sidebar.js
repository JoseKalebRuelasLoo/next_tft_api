import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Inicio",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Añadir Campeon",
    href: "/anadircampeon",
    icon: BsPeople,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={100}
            height={100}
            className="sidebar__logo"
            src="/logo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">TFTApi</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
