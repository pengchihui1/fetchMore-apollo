const viewer = {
  pageInfo: {
    hasNextPage: false
  },
  edges: [
    {
      node: { id: 1, name: '1', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 2, name: '2', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 3, name: '3', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 4, name: '4', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 5, name: '5', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 6, name: '6', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 7, name: '7', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 8, name: '8', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 9, name: '9', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 10, name: '10', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 11, name: '11', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 12, name: '12', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 13, name: '13', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 14, name: '14', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 15, name: '15', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 16, name: '16', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 17, name: '17', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 18, name: '18', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 19, name: '19', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 20, name: '20', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 21, name: '21', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 22, name: '22', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 23, name: '23', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 24, name: '24', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    },
    {
      node: { id: 25, name: '25', status: 'cached' },
      cursor: '2020-06-20T08:44:45.317Z'
    }
  ],

}

export default async (_, args) => {
  if (!args.first) return null
  return {
    pageInfo: {
      hasNextPage: viewer.edges && viewer.edges.length >= args.first
    },
    edges: viewer.edges.slice(0, args.first),
    cursor: new Date().toISOString()
  }
}