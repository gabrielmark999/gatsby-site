import * as React from 'react'
import { Link, graphql } from 'gatsby'
import SubLayout from '../../components/sub-layout';

const FranchPage = ({ data }) => {
  return (
    <SubLayout pageTitle="Portal da Franquia">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/franqueado/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
              </h2>
            <p>Postado em: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </SubLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD-MM-YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default FranchPage