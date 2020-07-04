
import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type'
import { resolvers } from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})