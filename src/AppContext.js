import { createContext, useState, useEffect } from "react";
import AOS from "aos";
import { useSpring } from "react-spring";
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  //Toggle
  const [toggle, setToggle] = useState(false);
  const handle_toggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  useEffect(() => {
    handle_toggle();
  }, []);
  // Handle Click Menu
  const [activeItem, setActiveItem] = useState("");
  const [activeSubItem, setActiveSubItem] = useState("");

  const handleItemClick = (item, subItem) => {
    setActiveItem((prevItem) => (prevItem === item ? "" : item));
    setActiveSubItem((prevSubItem) =>
      prevSubItem === subItem ? "" : subItem || prevSubItem
    );
  };

  //Aminate Home Dollar
  const [isHovered, setIsHovered] = useState(false);

  const animationProps = useSpring({
    to: {
      transform: isHovered ? "translateY(-160%)" : "translateY(0%)",
    },
    config: {
      duration: 600,
      easing: (t) => (isHovered ? 1 - t : t),
    },
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // Select Form
  
  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        handle_toggle,
        activeItem,
        setActiveItem,
        handleItemClick,
        activeSubItem,
        setActiveSubItem,
        isHovered,
        setIsHovered,
        animationProps,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
