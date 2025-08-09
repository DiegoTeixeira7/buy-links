import '@/styles/globals.scss'
import { Metadata } from 'next'
import { env } from '@/utils/env'
import NotificationProvider from '@/providers/NotificationProvider'

const title = 'Frontend Project'
const description = 'Default model to use in frontend Next.JS apps.'
const appUrl = env('NEXT_PUBLIC_APP_URL')
const isDev =
  appUrl.includes('localhost') ||
  appUrl.includes('dev') ||
  appUrl.includes('staging') ||
  appUrl.includes('stg')

export const metadata: Metadata = {
  title,
  description,
  keywords: 'nextjs, typescript, eslint, prettier, layout, metadata, seo',
  authors: {
    name: title,
    url: new URL('/', appUrl),
  },
  robots: isDev ? 'noindex, nofollow' : 'index, follow',
  metadataBase: new URL('/', appUrl),
  openGraph: {
    title,
    description,
    siteName: title,
    url: appUrl,
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: 'frontend.project',
  },
  other: {
    'adopt-website-id': env('NEXT_ADOPT_WEBSITE_ID'),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <NotificationProvider>{children}</NotificationProvider>
      </body>
    </html>
  )
}
