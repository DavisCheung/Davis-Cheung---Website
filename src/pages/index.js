import * as React from "react"
import { Link } from "gatsby"
//import { motion } from "framer-motion"
import Header from "../components/header"


export default function Home() {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>

      <header>
        <Header />
      </header>

      <main class="page">
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        This is my website.
        <br />
        It's still being built right now, but soon, it'll have loads of content!
      </main>
    </div>
  )
}