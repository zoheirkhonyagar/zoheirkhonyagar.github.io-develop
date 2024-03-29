import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog | Zack Khonyagar"
      keywords={[
        `zoheirkhonyagar`,
        `zoheir`,
        `zack`,
        `zackkhonyagar`,
        `khonyagar`,
        `زهیر`,
        `خنیاگر`,
        'زهیر خنیاگر',
        'زک',
      ]}
    />
    <div className="aboutme">
      <div className="profile-pic">
        <Image />
      </div>
      <div className="introduce">
        <p style={{ margin: `0px` }}>
          Thoughts on Software Engineering, my everyday stories and more.
          Written by <b>Zack Khonyagar</b> who lives in Hormozgan.
          <br />
          Follow me on{' '}
          <a href="https://mastodon.social/@zoheir" rel="me">
            <b>Mastodon</b>
          </a>{' '}
          ,{' '}
          <a href="https://github.com/zoheirkhonyagar">
            <b>GitHub</b>
          </a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/zoheirkhonyagar/">
            <b>Linkedin</b>
          </a>
          .
        </p>
      </div>
    </div>

    {data.allMarkdownRemark.edges.map((post) => (
      <article className="article-block" key={post.node.id}>
        <h3 className="article-title">
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </h3>
        <p className="date">{post.node.frontmatter.date}</p>
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: post.html || post.node.excerpt }}
        />
      </article>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`
