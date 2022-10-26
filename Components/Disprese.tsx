import { Button } from '@chakra-ui/react'
import React from 'react'
import { useWallet } from "@manahippo/aptos-wallet-adapter"
import { AptosAccount, Types, TxnBuilderTypes } from "aptos"
function Disperse() {
    const { account, signTransaction, signAndSubmitTransaction } = useWallet()
    const handleClick = () => {
        signTransac()
    }
    const sendTX = () => {

    }
    // http://127.0.0.1:8080/v1/accounts/854a0f83cf9d9a78928e58eea97ad1af458a31547ad1209a05d06e03f59eb3eb/modules
    const signTransac = async () => {

        try {
            const txOptions = {
                max_gas_amount: '1000',
                gas_unit_price: '100'
            };
            if (account?.address || account?.publicKey) {
                const payload: Types.TransactionPayload = {
                    type: 'entry_function_payload',
                    // function: '0x854a0f83cf9d9a78928e58eea97ad1af458a31547ad1209a05d06e03f59eb3eb::Disperse::disperse_aptos_coin',
                    function: '0x854a0f83cf9d9a78928e58eea97ad1af458a31547ad1209a05d06e03f59eb3eb::Disperse::disperse_coin',
                    // function: '0x1::aptos_account::transfer',
                    // function: '0x1::coin::transfer',
                    type_arguments: ['0x1::aptos_coin::AptosCoin'],
                    // type_arguments: [],
                    arguments: [
                        ['0x581cc62bfc9139e40cad0c3677538b85f688fee2a20f1f2eeea0fb4fb05075d4', 
                        '0x453432b221d405400120a1d4f0c5edef4cefd90ea8da055051ec855899f5f60',
                         '0xeab0f20e493a09dd4d244e924e7c56f40609730fea939d7b68a3712c2de3929'],
                        [100000000, 200000000, 300000000]
                    ]
                };
                

                console.log(payload)
                const tx = await signAndSubmitTransaction(payload, txOptions);

                console.log('test sign transaction: ', `http://192.168.50.151:8080/v1/transactions/by_hash/${tx.hash}`);
            }
        } catch (err: any) {
            console.log('tx error: ', err);
        } finally {

        }
    };
    return (
        <div><Button onClick={handleClick}>Disperse</Button></div>
    )
}

export default Disperse