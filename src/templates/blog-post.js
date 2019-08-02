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
        <Link to="/">Go Back</Link>
        <hr />
        <h1>
          <Link to="#">{post.frontmatter.title}</Link>
          <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        </h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date
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
