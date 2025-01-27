import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0x5f9737079d7f6cd06235d1418f2a251ed378252a',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'ANJAY', // _name
        'ANJY',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
