import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  WalletProvider,
  AptosWalletAdapter,
  MartianWalletAdapter,

} from '@manahippo/aptos-wallet-adapter';


const wallets = [
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
];

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <WalletProvider
      wallets={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error: Error) => {
        console.log('Handle Error Message', error);
      }}>
      <Component {...pageProps} />
  
    </WalletProvider>
  </ChakraProvider>
}

export default MyApp
