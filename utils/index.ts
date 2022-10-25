import { Types } from "aptos";

export const generatePayload = () => {
  const payload: Types.TransactionPayload = {
    type: "entry_function_payload",
    function: "0x1::coin::transfer",
    type_arguments: ["0x1::aptos_coin::AptosCoin"],
    arguments: ["0x1", 100],
  };
  return payload;
};
