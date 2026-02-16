import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">Estif</div>
            <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
        </header>
    )
}

export default Header;