import * as React from "react"
import { Link } from "gatsby"
//import { motion } from "framer-motion"
import Header from "../components/header"

// markup
const NotFoundPage = () => {
  return (
    <main class="page">
      <Header />
      <title>404 Not Found</title>
      <h1>Page not found</h1>
      <p>
        Perhaps it doesn't exist yet.
        <br />
        <Link to="/">Return to main page</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
