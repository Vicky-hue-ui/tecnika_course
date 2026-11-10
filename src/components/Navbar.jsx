import { useState } from "react";

function Navbar({ brand, links }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top">
          <span className="navbar__mark">T</span>
          {brand}
        </a>
        <button className="navbar__toggle" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
