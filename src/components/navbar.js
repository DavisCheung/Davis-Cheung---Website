import * as React from "react"
import { Link } from "gatsby"
// import { motion } from "framer-motion"
import "../styles/global.css"

//Note. Contact page tentative, left blank on purpose for now (does not work ATM)

export default function Navbar() {

    function changeColour(item) {
        item.target.style.color = "#cc2c24";
    }

    function resetColour(item) {
        item.target.style.color = "#1a1a1a";
    }

    return(
        <nav class="navBar">
            <span className="links">
                <Link to="/" class="navLink" id="zhang" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>章</Link>
                <Link to="/about" class="navLink" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>About</Link>
                <Link to="/projects" class="navLink" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>Projects</Link>
                <Link to="/blog" class="navLink" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>Blog</Link>
                <Link to="/photos" class="navLink" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>Photos</Link>
                <Link to="/contact" class="navLink" activeClassName="activeNavLink" role="link" tabindex="0" onMouseEnter={changeColour} onMouseLeave={resetColour}>Contact</Link>
            </span>
        </nav>
    )
}