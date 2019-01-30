import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const blogPage = ({data}) => (
	<Layout>
		<SEO title="blog" />
		<span className="yellow-bgcolor dark-color"></span>
		<h1 className="page-title yellow-bgcolor dark-color">Latest Posts</h1>
		{data.allMarkdownRemark.edges.map(post => (
			<div key={ post.node.id }>
				<h3>
				<Link to={ post.node.frontmatter.path } >{ post.node.frontmatter.title }</Link>
				</h3>
				<small>Posted by <span className="yellow-color">{ post.node.frontmatter.author }</span> on <span className="yellow-color">{post.node.frontmatter.date} </span></small>
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