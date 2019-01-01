import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const blogPage = ({data}) => (
	<Layout>
		<SEO title="blog" />
		<h1>Latest Posts</h1>
		{data.allMarkdownRemark.edges.map(post => (
			<div key={ post.node.id }>
				<h3>
				<Link style={{ color:`#ccc` }} to={ post.node.frontmatter.path } >{ post.node.frontmatter.title }</Link>
				</h3>
				<small>Posted by { post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
				<br	/>
				<br	/>
				<hr />
			</div>
		))}
	</Layout>
)

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
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

export default blogPage