import {ethers} from "ethers";
import ABI from "../ABI.json";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Wallet = ({saveState}) => {

    const navigateTo = useNavigate();

    const connnectWallet = async () => {
        try {
            if(window.ethereum){
                const provider = new ethers.BrowserProvider(window.ethereum);  // Metamask will inject the window.ethereum object into your browser
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"  // this will make sure that the metamask will open in you browser;
                });
                // await provider.send("eth_requestAccounts", []);   // Through this line Metamask will open automatically

                const signer = await provider.getSigner();
                const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
                const contract = new ethers.Contract(contractAddress, ABI, signer);  // Instance of our contract.
                saveState({web3: provider, contract, accounts: accounts[0]});
                navigateTo("/view-all-tasks");

            }else{
                alert("Please Install Metamask Wallet");
                throw new Error("Please Install Metamask Wallet");
            }

        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

  return (
    <div>
        <button onClick={connnectWallet}>Connect Wallet</button>
    </div>
  )
}

Wallet.propTypes = {
    saveState: PropTypes.func.isRequired,
};

export default Wallet;