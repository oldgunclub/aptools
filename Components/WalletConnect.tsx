import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useWallet } from '@manahippo/aptos-wallet-adapter';

function WalletConnect() {
    const { wallets, select, connect, connected, account } = useWallet()
    return (
        <div>
            {
                account?.address?.toString() ? account?.address?.toString() :
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <span>Connect Wallet</span>
                        </MenuButton>
                        <MenuList>
                            {
                                wallets.map((wallet) => {
                                    return <MenuItem key={wallet.adapter.name} onClick={() => {
                                        select(wallet.adapter.name)
                                        connect()
                                    }}>{wallet.adapter.name}</MenuItem>

                                })
                            }
                        </MenuList>
                    </Menu>
            }
        </div>
    )
}


export default WalletConnect
