const { expect } = require("chai");
const ethers = require("ethers");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("ETHDaddy", () => {
  let ethDaddy;
  const NAME = "ETHDaddy";
  const SYMBOL = "ETHD";

  beforeEach(async () => {
    const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
    ethDaddy = await ETHDaddy.deploy(NAME, SYMBOL);
  });

  describe("Deployment", () => {
    it("Sets the name", async () => {
      const result = await ethDaddy.name();
      expect(result).to.equal(NAME);
    });

    it("has a symbol", async () => {
      const result = await ethDaddy.symbol();
      expect(result).to.equal(SYMBOL);
    });
  });
});
