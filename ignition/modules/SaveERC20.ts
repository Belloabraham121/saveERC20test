import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xfE99b7416a7d1A1beFD6d5B5782ca2331784969e";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xA48f1b35603434c642fC3B23F8D1861dC3B1e0DD

