import { useQuery } from '@apollo/react-hooks'
import { ViewerQuery } from '../shared/graphql/queries/book/getBook'
import { initializeApollo } from './apollo/client'
import {
  Box,
  Spinner
} from '@chakra-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

const Home = () => {
  const {
    data,
    fetchMore
  } = useQuery(ViewerQuery, {
    variables: {
      first: 12
    }
  })
  if (!data || !data.viewer) return null

  const {
    viewer,
    viewer: {
      pageInfo,
      edges
    }
  } = data

  const onFetchMore = () => {
    fetchMore({
      query: ViewerQuery,
      variables: {
        first: edges.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        // return {
        //   viewer: {
        //     ...previousResult.viewer,
        //     pageInfo: {
        //       ...previousResult.viewer.pageInfo,
        //       ...fetchMoreResult.viewer.pageInfo
        //     },
        //     edges: [
        //       ...previousResult.viewer.edges,
        //       ...fetchMoreResult.viewer.edges
        //     ]
        //   }
        // }
        const newEdges = fetchMoreResult.viewer.edges
        const pageInfo = fetchMoreResult.viewer.pageInfo
        return newEdges.length
          ? {
            viewer: {
              __typename: previousResult.viewer.__typename,
              edges: [...previousResult.viewer.edges, ...newEdges],
              pageInfo
            }
          }
          : previousResult;
      }
    })
  }

  const arr = edges.map(edge => edge.node)
  let unique = {}
  arr.forEach(function (gpa) {
    unique[JSON.stringify(gpa)] = gpa
  })
  const list = Object.keys(unique).map(function (u) {
    return JSON.parse(u)
  })

  return (
    <Box d='flex' justifyContent='center' overflow='auto'>
      <InfiniteScroll
        loadMore={onFetchMore}
        hasMore={!!pageInfo.hasNextPage}
        threshold={750}
        initialLoad={false}
        loader={
          <Box key={0} d='flex' m={3} justifyContent='center'>
            <Spinner />
          </Box>
        }
      >
        {list.map((item, i) => (
          <Box key={i} mb={5}>
            {item.name}
          </Box>
        ))}
      </InfiniteScroll>
    </Box>
  )

}

export async function getStaticProps () {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}


export default Home