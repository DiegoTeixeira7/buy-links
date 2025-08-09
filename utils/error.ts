import { AxiosError } from 'axios'
import * as Sentry from '@sentry/nextjs'

export async function handleError(err: unknown) {
  if (process.env.NODE_ENV === 'production') {
    if (err instanceof AxiosError && err.response?.status) {
      console.error(
        `AxiosError status ${err.response?.status}: ${err.response?.data}`,
      )
    } else if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error(err)
    }
  }

  if (
    (err instanceof AxiosError &&
      err?.response?.status &&
      err.response.status < 400 &&
      err.response.status >= 500) ||
    !(err instanceof AxiosError)
  ) {
    Sentry.captureException(err)
  }
}
