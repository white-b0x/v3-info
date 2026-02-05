import { ApolloClient, InMemoryCache } from '@apollo/client'

// ETCswap V3 Subgraph URLs - configure via environment variables
const ETCSWAP_V3_SUBGRAPH_URL =
  process.env.REACT_APP_SUBGRAPH_URL || 'TODO_DEPLOY_ETCSWAP_V3_SUBGRAPH'
const GRAPH_HEALTH_URL = process.env.REACT_APP_GRAPH_HEALTH_URL || 'TODO_DEPLOY_GRAPH_NODE'
const BLOCK_SUBGRAPH_URL = process.env.REACT_APP_BLOCK_SUBGRAPH_URL || 'TODO_DEPLOY_BLOCK_SUBGRAPH'

// Mordor testnet subgraph URLs
const MORDOR_SUBGRAPH_URL =
  process.env.REACT_APP_MORDOR_SUBGRAPH_URL || 'TODO_DEPLOY_MORDOR_V3_SUBGRAPH'
const MORDOR_BLOCK_SUBGRAPH_URL =
  process.env.REACT_APP_MORDOR_BLOCK_SUBGRAPH_URL || 'TODO_DEPLOY_MORDOR_BLOCK_SUBGRAPH'

// Health client for graph node status
export const healthClient = new ApolloClient({
  uri: GRAPH_HEALTH_URL,
  cache: new InMemoryCache(),
})

// Block client for ETC mainnet
export const blockClient = new ApolloClient({
  uri: BLOCK_SUBGRAPH_URL,
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

// Main ETCswap V3 client for ETC mainnet
export const client = new ApolloClient({
  uri: ETCSWAP_V3_SUBGRAPH_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        keyFields: false,
      },
      Pool: {
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

// ETCswap V3 client for Mordor testnet
export const mordorClient = new ApolloClient({
  uri: MORDOR_SUBGRAPH_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        keyFields: false,
      },
      Pool: {
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

// Block client for Mordor testnet
export const mordorBlockClient = new ApolloClient({
  uri: MORDOR_BLOCK_SUBGRAPH_URL,
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
})

// Aliases for compatibility with existing code
// ETC mainnet is the primary network
export const etcClient = client
export const etcBlockClient = blockClient
