import React from "react";
import Typography from "@mui/material/Typography";

export const MainHeading = ({ children }) => {
  return (
    <Typography
      mb={3}
      component='h1'
      sx={{ fontWeight: "700", fontSize: "4rem", color: "var(--text-primary)" }}
    >
      {children}
    </Typography>
  );
};

export const SubHeading = ({ children }) => {
  return (
    <Typography
      mb={1}
      component='h2'
      sx={{
        fontWeight: "700",
        fontSize: "1.8rem",
        color: "var(--text-primary)",
      }}
    >
      {children}
    </Typography>
  );
};

export const TertiaryHeading = ({ children, htmlFor }) => {
  return (
    <Typography
      mb={1}
      component='label'
      sx={{
        fontWeight: "600",
        fontSize: "1.4rem",
        color: "var(--text-primary)",
        display: "block",
      }}
      htmlFor={htmlFor}
    >
      {children}
    </Typography>
  );
};

export const Paragraph = ({ children }) => {
  return (
    <Typography
      mb={3}
      component='p'
      sx={{
        fontWeight: "500",
        fontSize: "1.4rem",
        color: "var(--text-secondary)",
        lineHeight: "1.6",
      }}
    >
      {children}
    </Typography>
  );
};
