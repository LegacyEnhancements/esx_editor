import { VisibilityProvider } from '@/providers/VisibilityProvider'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <VisibilityProvider>
      <Component {...pageProps} />
    </VisibilityProvider>
  )
}

export default App