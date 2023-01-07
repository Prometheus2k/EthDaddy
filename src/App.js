import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Domain from "./components/Domain";

// ABIs
import ETHDaddy from "./abis/ETHDaddy.json";

// Config
import config from "./config.json";

function App() {
  const [account, setAccount] = useState(null);
  const loadBlockchainData = async () => {};

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <div className="cards__section">
        <h2 className="cards__title">Welcome to ETH Daddy!</h2>
      </div>
    </div>
  );
}

export default App;
