import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  type ViewerConnection {
    pageInfo: PageInfo!
    edges: [ViewerEdge!]
  }

  type ViewerEdge {
    cursor: String!
    node: User
  }

  type Query {
    viewer(first: Int): ViewerConnection
  }
`