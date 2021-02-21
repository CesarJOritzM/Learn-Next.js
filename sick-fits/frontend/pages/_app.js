import { createGlobalStyle } from 'styled-components'
import Page from '../components/Page'

const globalStyles = createGlobalStyle`
  html {
    --red: #ff0000
  }
`

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
