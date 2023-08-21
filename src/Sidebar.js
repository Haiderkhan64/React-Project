import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={isSidebarOpen ? `sidebar-wrapper show` : `sidebar-wrapper`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((sublink, index) => {
            const { page, links } = sublink;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <li key={index}>
                        <a href={url}>
                          {icon} {label}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
