import {
    WalletProvider,
    AptosWalletAdapter,
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
} from '@manahippo/aptos-wallet-adapter';


const wallets = [
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    new PontemWalletAdapter(),
];

