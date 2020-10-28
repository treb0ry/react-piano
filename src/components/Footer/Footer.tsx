import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://github.com/treb0ry/react-piano">GitHub</a>
      <br />
      {currentYear}
    </footer>
  );
};
