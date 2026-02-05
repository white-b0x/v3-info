import { BigNumber } from '@ethersproject/bignumber'
import { Connector } from '@web3-react/types'
import ms from 'ms'

import { SupportedNetwork } from './networks'

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1)

// WETC address on Ethereum Classic (same on ETC mainnet and Mordor testnet)
// https://blockscout.com/etc/mainnet/address/0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a
export const WETC_ADDRESS = '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a'

export const WETC_ADDRESSES = [WETC_ADDRESS]

// Token blacklist - empty for clean ETC deployment
// Add token addresses here if needed after deployment
export const TOKEN_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETC]: [],
  [SupportedNetwork.MORDOR]: [],
}

// Pool blacklist - empty for clean ETC deployment
// Add pool addresses here if needed after deployment
export const POOL_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETC]: [],
  [SupportedNetwork.MORDOR]: [],
}

// Start blocks - ETCswap V3 Factory deployment blocks
export const START_BLOCKS: { [key: string]: number } = {
  [SupportedNetwork.ETC]: 19714286, // ETCswap V3 Factory deployment block on ETC mainnet
  [SupportedNetwork.MORDOR]: 11041958, // ETCswap V3 Factory deployment block on Mordor testnet
}

export interface WalletInfo {
  connector?: Connector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

// ETC average block time is ~13 seconds (similar to ETH pre-merge)
export const AVERAGE_L1_BLOCK_TIME = ms(`13s`)

export const NetworkContextName = 'NETWORK'

// OFAC sanctioned addresses - blocked for compliance
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
]
