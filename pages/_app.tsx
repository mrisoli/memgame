import App from 'next/app'
import { BoardProvider } from '../lib/context'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <BoardProvider>
        <Component {...pageProps} />
      </BoardProvider>
    )
  }
}

export default MyApp
