import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA
])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS, [
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.CELO,
  ChainId.ARBITRUM_ONE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.BASE
])
export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const V2_ROUTER_ADDRESSES: AddressMap = constructSameAddressMap(V2_ROUTER_ADDRESS)

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const DEFAULT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
  quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
}
const MAINNET_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
}
const GOERLI_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
}

const OPTIMISM_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES
const ARBITRUM_ONE_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  multicallAddress: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573'
}
const POLYGON_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES

// celo v3 addresses
const CELO_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
  multicallAddress: '0x633987602DE5C4F337e3DbF265303A1080324204',
  quoterAddress: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
  v3MigratorAddress: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
  nonfungiblePositionManagerAddress: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
  tickLensAddress: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'
}

// BNB v3 addresses
const BNB_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
  multicallAddress: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
  quoterAddress: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
  v3MigratorAddress: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
  nonfungiblePositionManagerAddress: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
  tickLensAddress: '0xD9270014D396281579760619CCf4c3af0501A47C',
  swapRouter02Address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2'
}

// optimism goerli addresses
const OPTIMISM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
  multicallAddress: '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd',
  quoterAddress: '0x9569CbA925c8ca2248772A9A4976A516743A246F',
  v3MigratorAddress: '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8',
  nonfungiblePositionManagerAddress: '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6',
  tickLensAddress: '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e'
}

// arbitrum goerli v3 addresses
const ARBITRUM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
  multicallAddress: '0x8260CB40247290317a4c062F3542622367F206Ee',
  quoterAddress: '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA',
  v3MigratorAddress: '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3',
  nonfungiblePositionManagerAddress: '0x622e4726a167799826d1E1D150b076A7725f5D81',
  tickLensAddress: '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8'
}

// sepolia v3 addresses
const SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  multicallAddress: '0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07',
  quoterAddress: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
  v3MigratorAddress: '0x729004182cF005CEC8Bd85df140094b6aCbe8b15',
  nonfungiblePositionManagerAddress: '0x1238536071E1c677A632429e3655c799b22cDA52',
  tickLensAddress: '0xd7f33bcdb21b359c8ee6f0251d30e94832baad07'
}

// plume v3 addresses
const PLUME_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xAAdaF3fa772C1e68053949a1a0eE838bf8BF39b4',
  multicallAddress: '0x80DAF9f655ac826f578bF86Ec92b1866Bc1C2321',
  quoterAddress: '0x950Ce05faAD8E65b682C132323492Ba23446cEf0',
  v3MigratorAddress: '0x9E43caEDb73e838308d5F6C92A62FA8eF033f51B',
  nonfungiblePositionManagerAddress: '0x38537C231768634B4439123dE44Fc0533c250ba4',
  tickLensAddress: '0x94D6AcF8D30DB3046fB4a00ae49Dcfd6d0dBe794',
  swapRouter02Address: '0x559D5213177e6EC08B7322930320Da671a6628c0'
}

// Avalanche v3 addresses
const AVALANCHE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
  multicallAddress: '0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2',
  quoterAddress: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
  v3MigratorAddress: '0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97',
  nonfungiblePositionManagerAddress: '0x655C406EBFa14EE2006250925e54ec43AD184f8B',
  tickLensAddress: '0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950',
  swapRouter02Address: '0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE'
}

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
  quoterAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  v3MigratorAddress: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
  nonfungiblePositionManagerAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
  tickLensAddress: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
  swapRouter02Address: '0x2626664c2603336E57B271c5C0b26F421741e481'
}

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2',
  multicallAddress: '0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439',
  quoterAddress: '0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9',
  v3MigratorAddress: '0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE',
  nonfungiblePositionManagerAddress: '0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30',
  tickLensAddress: '0x1acB873Ee909D0c98adB18e4474943249F931b92',
  swapRouter02Address: '0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MAINNET]: MAINNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
  [ChainId.ARBITRUM_ONE]: ARBITRUM_ONE_ADDRESSES,
  [ChainId.POLYGON]: POLYGON_ADDRESSES,
  [ChainId.POLYGON_MUMBAI]: POLYGON_ADDRESSES,
  [ChainId.GOERLI]: GOERLI_ADDRESSES,
  [ChainId.CELO]: CELO_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_ADDRESSES,
  [ChainId.BNB]: BNB_ADDRESSES,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_ADDRESSES,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_ADDRESSES,
  [ChainId.SEPOLIA]: SEPOLIA_ADDRESSES,
  [ChainId.AVALANCHE]: AVALANCHE_ADDRESSES,
  [ChainId.PLUME]: PLUME_ADDRESSES,
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6'
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd'
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (chainId == ChainId.BNB) {
    return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
  }
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
}
