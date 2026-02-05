# ETCswap V3 Info

Analytics dashboard for [ETCswap V3](https://etcswap.org) on Ethereum Classic.

## To Start Development

### Installing dependencies
```bash
yarn
```

### Running locally
```bash
yarn start
```

### Building for production
```bash
yarn build
```

## Configuration

Before running, configure the following environment variables in `.env`:

```
# ETCswap V3 Subgraph URLs
REACT_APP_SUBGRAPH_URL=<your-etcswap-v3-subgraph-url>
REACT_APP_GRAPH_HEALTH_URL=<your-graph-node-health-endpoint>
REACT_APP_BLOCK_SUBGRAPH_URL=<etc-blocks-subgraph-url>

# Mordor Testnet (optional)
REACT_APP_MORDOR_SUBGRAPH_URL=<mordor-v3-subgraph-url>
REACT_APP_MORDOR_BLOCK_SUBGRAPH_URL=<mordor-blocks-subgraph-url>
```

## Post-Deployment TODO

After deploying ETCswap V3 contracts and subgraph:

1. Update `src/constants/index.ts` with actual factory deployment blocks in `START_BLOCKS`
2. Update `src/apollo/client.ts` with actual subgraph URLs (or configure via environment variables)
3. Add ETC logo to `public/etc-logo.png`
4. Configure token lists and blacklists as needed in `src/constants/index.ts`

## Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| Ethereum Classic | 61 | Primary |
| Mordor Testnet | 63 | Testnet |

## Links

- ETCswap V3 App: https://v3.etcswap.org
- ETCswap V2 Info: https://v2-info.etcswap.org
- Documentation: https://docs.etcswap.org

Note: ETCswap does not include V1 due to critical security vulnerabilities in that version.
