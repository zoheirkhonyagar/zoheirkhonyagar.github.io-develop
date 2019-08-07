import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Temaplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Link to="/">
          <b>{'< return { main }'}</b>
        </Link>
        <hr />
        <h1 className="article-title">{post.frontmatter.title}</h1>
        <p className="date">{post.frontmatter.date}</p>
        <div className="body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
