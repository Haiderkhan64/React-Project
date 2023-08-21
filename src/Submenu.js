import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [coloumn, setColoumn] = useState("col-2");
  useEffect(() => {
    setColoumn("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColoumn("col-3");
    } else if (links.length > 3) {
      setColoumn("col-4");
    }
  }, [location, links]);
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? `submenu show` : `submenu`}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${coloumn}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <div key={index}>
              <a href={url}>
                {icon} {label}
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
