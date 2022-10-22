import React from 'react'
import "./Nft.css"
import nf from"../Assets/nf.gif"
import nft2 from"../Assets/nft2.gif"
import nft1 from"../Assets/nft1.gif"

function Nft() {
  return (
    <div className='nft_main_bg'>
             <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-12 col-md-12">
            <div className="grp">
              <div className="leeft">
                <div>
                  <img className="item iteem" src={nf} alt="" />
                </div>
              </div>
              <div className="rightt">
                <div>
                  <img src={nft2} className="item iteem" alt="" />
                </div>
                <div>
                  <img className="iteem item  mb-3 mt-4" src={nft1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <h5 className="white text-start ps-2">NFT</h5>
<p className="para">Welcome to the most trusted Web3 Ecosystem for Gaming and NFTs.</p>
<p className="para lh-0">WonderSwap is a dedicated NFT platform.With the objective of helping everyone to enjoy the value of digital assets, with both game-related NFTs and non-game NFTs Wonderswap is bringing an Open Market Platform where everyone in the world will be able to freely transact NFTs. All of your favourite brands and collectibles NFTs are available in one location. From games and dApps to exchanges and digital marketplaces, WonderSwap has everything a business needs to establish a successful NFT collection. WonderSwap open NFT Marketplace is your safe hotspot to the best NFT collections, dApps, video games, marketplaces, and more. It also makes it easier than ever to buy, sell, trade, and give NFTs. </p>
<p className="para lh-0">The WonderSwap platform is designed in such a way that it combines the explosive growth of NFTs with DeFi's outstanding monetization capabilities. Participate and get Wondercoin Tokens as a reward. WonderSwap supports non-fungible tokens via the open-source Simple Assets standard. WonderSwap NFTs service allows you to generate, mint, and store NFTs. All users can view their transactions on the chain, and customers may show to themselves that they were chosen fairly for random choices. We also provide a service that leverages the open-source Simple Assets NFT implementation. </p>
<p className="para lh-0">The future includes full integration with other NFT standards. Interoperability maximizes liquidity for buyers and sellers and is the WonderSwap Platform's core value proposition. </p>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Nft
