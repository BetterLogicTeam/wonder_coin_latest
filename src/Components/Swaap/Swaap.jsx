import React from "react";
import "./Swaap.css";
import nft from "../Assets/nft.gif";
import nftsell from "../Assets/nftsell.gif";
import nftvi from "../Assets/nftvi.gif";
import nftbe from "../Assets/nftbe.gif";
import nftt from "../Assets/nftt.gif";
import nftw from "../Assets/nftw.gif";

function Swaap() {
  return (
    <div className="swaap_main  ">
      <div className="container ">
        <div className="row  mt-3">
          <div className="col-lg-6 mt-3">
            <h1 className="text-white text-start">Welome to WonderLand</h1>
            <p className="text-white text-start land_txt">
            WonderSwap introduces Wonderland, a digital innovation technology, to the real estate market. In order to actualize the global real estate investment information sharing ecosystem and develop a system where anybody can participate and exchange real estate investment information simply and safely,
            </p>
          </div>

          <div className="col-md-5 ">
            <img className="w-100 land" src={nft} alt="" />
          </div>
        </div>

        <div className="row mt-3">

        <div className="col-md-5 ">
            <img className="w-100 land" src={nftsell} alt="" />
          </div>
          <div className="col-lg-6 mt-2">
            <h1 className="text-white text-start">Sell And Purchase Home </h1>
            <p className="text-white text-start land_txt">
            The Wondercoin Token is the utility token of the Wondereland platform. Payment for current and upcoming platform features is made using Wondercoin Token. In other words, the Wondercoin Token serves as the platform's main means of payment for goods and services.
            </p>
          </div>

         
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 mt-3">
            <h1 className="text-white text-start">Visions of Wonderland</h1>
            <p className="text-white text-start land_txt">
            {/* The vision of Wonderland is to build a complete DeFi ecosystem that will enable investors to use tokenized real estate shares as financial instruments in novel protocols, going beyond simply offering real estate investing on the blockchain. */}
            The vision of Wonderland is to build a complete DeFi ecosystem that will enable investors to use tokenized real estate shares as financial instruments in novel protocols, going beyond simply offering real estate investing on the blockchain
            </p>
          </div>

          <div className="col-md-5 ">
            <img className="w-100 land" src={nftvi} alt="" />
          </div>
        </div>
        <div className="row  mt-3">

          
        <div className="col-md-5 ">
            <img className="w-100 land" src={nftbe} alt="" />
          </div>
          <div className="col-lg-6 mt-3">
            <h1 className="text-white text-start">
            Benefits of Wonder Land</h1>
            <p className="text-white text-start land_txt">
            {/* SwapSpace aggregates the swap offers from major crypto exchanges, then arranges the deals in order by the best rate, and shows you the results. It produces swaps without charging you, its customer, an extra fee. */}
            As we expand this ecosystem, we will address major concerns that investors encounter. We will essentially remove all sponsor fees, providing all investors with proportionately better returns and more depreciation. We will run every real estate syndicate through a DAO, which will allow investors to be more involved in property decisions.
            </p>
          </div>

        </div>

        <div className="row  mt-3">

          

  <div className="col-lg-6 mt-3">
    <h1 className="text-white text-start">
    Technology of Metaverse</h1>
    <p className="text-white text-start land_txt">
    {/* SwapSpace aggregates the swap offers from major crypto exchanges, then arranges the deals in order by the best rate, and shows you the results. It produces swaps without charging you, its customer, an extra fee. */}
    AR and VR have been around for many years and have been extensively employed for immersive gaming experiences. The use of these technologies in Metaverse is clear, and both the Metaverse and immersive tech will continue to expand.AI in Metaverse can be used to produce non-player characters, according to the Top Technologies Shaping Metaverse (NPCs). With AI's processing skills, NPCs can be placed across the 3D environments to enable lifelike conversations with users or can be utilised to do other particular jobs.
    </p>
  </div>
  <div className="col-md-5 ">
    <img className="w-100 land" src={nftt} alt="" />
  </div>

</div>
        <div className="row  mt-3">

        <div className="col-md-5 ">
    <img className="w-100 land" src={nftw} alt="" />
  </div>

  <div className="col-lg-6 ">
    <h1 className="text-white text-start">
   
With Wonder Land Development
</h1>
    <p className="text-white text-start land_txt">
    {/* SwapSpace aggregates the swap offers from major crypto exchanges, then arranges the deals in order by the best rate, and shows you the results. It produces swaps without charging you, its customer, an extra fee. */}
    WonderSwap will provide a high-level overview of our technological services, as well as explanations, examples, and tutorials. The WonderSwap also provides additional resources to help with Wonderland implementation. WonderLand is part of a developing marketplace ecosystem. Third parties can use WonderSwap's open NFT Marketplace to list, purchase, and settle transactions using a smart contract. Anyone with blockchain trust and transaction verification can run a fully functional virtual marketplace.
    </p>
  </div>
 

</div>
      </div>
    </div>
  );
}

export default Swaap;
