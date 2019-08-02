import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      keywords={[
        `zoheirkhonyagar`,
        `zoheir`,
        `khonyagar`,
        `زهیر`,
        `خنیاگر`,
        'زهیر خنیاگر',
      ]}
    />
    <div className="aboutme">
      <div className="profile-pic">
        <Image />
      </div>
      <div className="introduce">
        <p style={{ margin: `0px` }}>
          Thoughts on Software Engineering, IoT and more. Written by{' '}
          <b>Zoheir Khonyagar</b> who lives in Iran.
          <br />
          Follow me on <a href="https://twitter.com/zoheirkhonyagar">
            Twitter
          </a>{' '}
          and <a href="https://github.com/zoheirkhonyagar">GitHub</a>.
        </p>
      </div>
    </div>
    <span className="yellow-bgcolor dark-color"></span>
    <h1 className="page-title yellow-bgcolor dark-color">Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
          {post.node.frontmatter.image}
        </h3>
        <small>
          Posted by{' '}
          <span className="yellow-color">{post.node.frontmatter.author}</span>{' '}
          on <span className="yellow-color">{post.node.frontmatter.date} </span>
        </small>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
