import { TonClient } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { getNetwork } from "./hooks/useNetwork";

// const endpointP = getHttpEndpoint({
//   network: getNetwork(new URLSearchParams(window.location.search)),
// });

const endpointP = "https://testnet.toncenter.com/api/v2/jsonRPC";
const apiKey = "9e7c60cbde72e23cbe5602d244d54eed70bf95e9e58bae2cfd162dec14af9b4a";

async function _getClient() {
  return new TonClient({
    endpoint: await endpointP,
    apiKey: await apiKey,
  });
}

const clientP = _getClient();

export async function getClient() {
  return clientP;
}

export async function getEndpoint() {
  return endpointP;
}
