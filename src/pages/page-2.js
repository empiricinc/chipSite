import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const SecondPage = (location) => (
  <Layout>
    <SEO title="Page two" description={'brohohoho'} />
    <Breadcrumb
      location={location}
      crumbLabel="page2"
      crumbStyle={{ color: "#666" }}
      crumbActiveStyle={{ color: "orange" }}
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
