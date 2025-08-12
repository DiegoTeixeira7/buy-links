import Web3 from 'web3'

import ABI from './ABI.json'
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

async function connectMetaMask() {
  const windowEth = window as any

  if (typeof !windowEth.ethereum !== 'undefined') {
    const web3 = new Web3(windowEth.ethereum)

    try {
      await windowEth.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await web3.eth.getAccounts()
      if (!accounts || !accounts.length) {
        throw new Error('Carteira não permitida')
      }
      return await connectContract(web3, accounts[0])
    } catch (err) {
      console.error('Erro ao conectar:', err)
    }
  } else {
    console.error('MetaMask não encontrado')
  }
}

async function connectContract(web3: any, account: string) {
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: account })
}

export async function addLink(url: string, linkId: string, feeInWei: number) {
  const contract = await connectMetaMask()
  return contract.methods.addLink(url, linkId, feeInWei).send()
}

export async function getLink(linkId: string) {
  const contract = await connectMetaMask()
  return contract.methods.getLink(linkId).call()
}

export async function payLink(linkId: string, valueInWei: number) {
  const contract = await connectMetaMask()
  return contract.methods.payLink(linkId).send({
    value: valueInWei.toString(),
  })
}
