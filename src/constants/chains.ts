// ETCswap V3 Info - Chain Configuration for Ethereum Classic
// Note: ETC chain IDs are not in @uniswap/sdk-core, so we define them locally

import { ETC_CHAIN_ID, MORDOR_CHAIN_ID } from './networks'

// Custom ChainId enum for Ethereum Classic networks
export enum ChainId {
  ETC = 61,
  MORDOR = 63,
}

export const CHAIN_IDS_TO_NAMES = {
  [ChainId.ETC]: 'etc',
  [ChainId.MORDOR]: 'mordor',
} as const

// All supported chains for ETCswap V3 Info
export const SUPPORTED_CHAINS = [ChainId.ETC, ChainId.MORDOR] as const

export type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]
export type SupportedInterfaceChain = SupportedChainsType

export function isSupportedChain(
  chainId: number | null | undefined | ChainId,
  featureFlags?: Record<number, boolean>
): chainId is SupportedInterfaceChain {
  if (featureFlags && chainId && chainId in featureFlags) {
    return featureFlags[chainId]
  }
  return !!chainId && (chainId === ChainId.ETC || chainId === ChainId.MORDOR)
}

export function asSupportedChain(
  chainId: number | null | undefined | ChainId,
  featureFlags?: Record<number, boolean>
): SupportedInterfaceChain | undefined {
  if (!chainId) return undefined
  if (featureFlags && chainId in featureFlags && !featureFlags[chainId]) {
    return undefined
  }
  return isSupportedChain(chainId) ? chainId : undefined
}

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [ChainId.ETC, ChainId.MORDOR] as const

/**
 * Supported networks for V2 pool behavior.
 * ETCswap V2 is available on both ETC and Mordor
 */
export const SUPPORTED_V2POOL_CHAIN_IDS = [ChainId.ETC, ChainId.MORDOR] as const

export const TESTNET_CHAIN_IDS = [ChainId.MORDOR] as const

/**
 * All the chain IDs that are running the Ethereum protocol.
 * ETC is an L1 chain (proof of work).
 */
export const L1_CHAIN_IDS = [ChainId.ETC, ChainId.MORDOR] as const

export type SupportedL1ChainId = (typeof L1_CHAIN_IDS)[number]

/**
 * L2 chains - ETC doesn't have L2s currently
 */
export const L2_CHAIN_IDS: readonly number[] = [] as const

export type SupportedL2ChainId = never

/**
 * Get the priority of a chainId based on its relevance to the user.
 * @param {ChainId} chainId - The chainId to determine the priority for.
 * @returns {number} The priority of the chainId, the lower the priority, the earlier it should be displayed.
 */
export function getChainPriority(chainId: ChainId): number {
  switch (chainId) {
    case ChainId.ETC:
      return 0 // Primary network
    case ChainId.MORDOR:
      return 1 // Testnet
    default:
      return 2
  }
}

// No UniswapX support on ETC
export function isUniswapXSupportedChain(chainId: number) {
  return false
}
