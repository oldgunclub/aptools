import { Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import _ from 'lodash'

export default function AddressInput() {
    const [addressAmountInput, setAddressAmountInput] = useState('')
    const formateAddressAmount = (value: string) => {

        const addressAmount = _.trim(value).split(',')
        const 

    }
    return (
        <div>
            <Textarea isInvalid onChange={(e) => { formateAddressAmount(e.target.value) }} placeholder='
        0x314ab97b76e39d63c78d5c86c2daf8eaa306b1824ab97b76e39d63c78d5c86c2daf8eaa306b182=3.141592,
        0x271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a=2.7182,
        0x141ca95b6177615fb1417cf70e930e102bf8f584141ca95b6177615fb1417cf70e930e102bf8f584=1.41421,' />
            <div>

            </div>
        </div>
    )
}
