'use server'

import { AxiosError, AxiosRequestConfig } from 'axios'
import { apiInstance as instance } from '@/lib/api'

async function axiosGetResource(route: string, config?: AxiosRequestConfig) {
  if (!route) {
    throw new Error('Invalid route')
  }

  const { data } = await instance.get(route, config)

  if (data === null || data === undefined) {
    throw new Error(`Erro em GET ${route}: Nenhum dado recebido`)
  }

  return data
}

async function axiosCreateResource(
  route: string,
  bodyData: Record<string, unknown> | FormData,
  config?: AxiosRequestConfig,
) {
  if (!route || !bodyData) {
    throw new Error('Invalid params')
  }

  const { data } = await instance.post(route, bodyData, config)

  if (!data) {
    throw new Error(`Error on POST ${route}`)
  }

  return data
}

async function axiosUpdateResource(
  route: string,
  id: string,
  bodyData: Record<string, unknown> | FormData,
  config?: AxiosRequestConfig,
) {
  if (!route || !bodyData || !id) {
    throw new Error('Invalid params')
  }

  const fullRoute = `${route}/${id}`

  const { data } = await instance.put(fullRoute, bodyData, config)

  if (!data) {
    throw new Error(`Error on PUT ${route}`)
  }

  return data
}

async function axiosDeleteResource(
  route: string,
  id: string,
  config?: AxiosRequestConfig,
) {
  if (!route || !id) {
    throw new Error('Invalid params')
  }

  const fullRoute = `${route}/${id}`

  const { data } = await instance.delete(fullRoute, config)

  if (!data) {
    throw new Error(`Error on DELETE ${route}`)
  }

  return data
}

function axiosResponseError(
  error: Error | AxiosError,
  firstMessage: unknown = null,
) {
  let detailedMessage = null
  if (!firstMessage || firstMessage === error) {
    firstMessage = error?.message
  }

  if (!(error instanceof Error)) {
    detailedMessage = JSON.stringify(error)
  }

  if (error instanceof AxiosError && error.response) {
    detailedMessage = JSON.stringify(error.response?.data ?? {})
  }

  if (!detailedMessage) {
    detailedMessage = error.message
  }

  if (
    typeof firstMessage === 'string' &&
    !firstMessage?.includes(detailedMessage)
  ) {
    detailedMessage = `${firstMessage} - ${detailedMessage}`
  }

  if (!detailedMessage?.includes('Erro')) {
    detailedMessage = `Erro: ${detailedMessage}`
  }

  return detailedMessage
}

export {
  axiosGetResource,
  axiosCreateResource,
  axiosUpdateResource,
  axiosDeleteResource,
  axiosResponseError,
}
