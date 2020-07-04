import gql from 'graphql-tag'

export const ViewerQuery = gql`
  query ViewerQuery($first: Int) {
    viewer(first: $first) {
      pageInfo {
        hasNextPage
      }
      edges{
        cursor
        node{
          id
          name
        }
      }
    }
  }
`