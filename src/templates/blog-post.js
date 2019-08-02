import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default function Temaplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <Link to="/">
          <b>{'< return { main }'}</b>
        </Link>
        <hr />
        <h1 className="article-title">{post.frontmatter.title}</h1>
        <p className="date">{post.frontmatter.date}</p>
        <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        <div className="body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
