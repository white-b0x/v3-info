// ETCswap V3 Info - Ethereum Classic Network Configuration
// Note: Using custom chain IDs since @uniswap/sdk-core doesn't include ETC

// Ethereum Classic chain IDs
export const ETC_CHAIN_ID = 61
export const MORDOR_CHAIN_ID = 63

export enum SupportedNetwork {
  ETC,
  MORDOR,
}

export type NetworkInfo = {
  chainId: number
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
}

// ETC logo - TODO: add actual logo file to assets/images/
const ETC_LOGO_URL = '/etc-logo.png'

export const ETCNetworkInfo: NetworkInfo = {
  chainId: ETC_CHAIN_ID,
  id: SupportedNetwork.ETC,
  route: '',
  name: 'Ethereum Classic',
  bgColor: '#00D395',
  primaryColor: '#00D395',
  secondaryColor: '#3AB83A',
  imageURL: ETC_LOGO_URL,
}

export const MordorNetworkInfo: NetworkInfo = {
  chainId: MORDOR_CHAIN_ID,
  id: SupportedNetwork.MORDOR,
  route: 'mordor',
  name: 'Mordor Testnet',
  bgColor: '#7B3F00',
  primaryColor: '#7B3F00',
  secondaryColor: '#A05000',
  imageURL: ETC_LOGO_URL,
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [ETCNetworkInfo, MordorNetworkInfo]
