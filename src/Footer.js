import React from "react";
import info from "./FooterInfo";

const Footer = footerInfo => {
  return (
    <footer className="footer">
      <ul className="list">
        {info.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

