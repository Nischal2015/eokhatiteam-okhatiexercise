import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{
        color: "var(--color-primary)",
        textDecoration: "none",
        borderBottom: "1px solid var(--color-primary)",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
