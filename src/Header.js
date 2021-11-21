import React from "react";

function Header() {
  return (
    <header className="header">
      <div class="logo-wrapper">
        <img
          src="https://i.ibb.co/zXCP3jj/earth.png"
          class="logo"
          alt="Logo"
        ></img>
      </div>

      <div class="header-title-wrapper">
        <p className="header-title">High Score Tables</p>
      </div>
    </header>
  );
}

export default Header;
