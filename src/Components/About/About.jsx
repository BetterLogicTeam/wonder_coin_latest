import React from "react";
import "./About.css";
import about from "../Assets/about.png";
import { AiOutlineCheck } from "react-icons/ai";
import f2 from "../Assets/f2.webp";
import f6 from "../Assets/f6.webp";
import f4 from "../Assets/f4.webp";
import f5 from "../Assets/f5.webp";
import f from "../Assets/f.webp";
import f1 from "../Assets/f1.webp";

function About() {
  return (
    <div className="about_main_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="white text-start ps-2">
              Future of Decentralized Exchange
            </h4>
            <p className="para text-start">
              WonderSwap supports a variety of the most popular digital
              currencies and has a variety of features that make it the best
              place to start trading With the intention of enhancing investor
              protection, a number of specialised blockchain security and
              auditing companies have teamed up with WonderSwap We at WonderSwap
              are Building the Future of Decentralized Exchanges.
            </p>
            <p className="para text-start">
              WonderSwap is the easiest place to buy and sell cryptocurrency.
            </p>

            <h4 className="white text-start ps-2">Wondercoin</h4>

            <p className="para text-start">
              The Wondercoin Token is a digital asset that connects the
              WonderSwap Platform and its core functionality. It serves as the
              official pair token on the platform and combines staking and
              incentives. Users will be able to trade and exchange their tokens
              for alternative assets with safety and ease after WonderSwap
              launches. Wondercoin will be the first digital money for common
              people, marking a significant advancement in the global use of
              cryptocurrencies.
            </p>
            <h4 className="white text-start ps-2">
              Has it been listed in any exchange?
            </h4>
            <p className="para text-start">
              As of now it can be purchased through our website which can be
              linked to trust wallet, very soon it will be listed in DEX
              exchange and then token would be tradable, very soon it will be
              listed in many more exchanges.
            </p>
          </div>

          <div className="col-lg-6">
            <img src={about} className="about_img" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-start white">
              Which Wallets Supports WonderSwap?
            </h4>
            <p className="text-start white  passingAlert">
              Many decentralised wallets, including MetaMask, TrustWallet,
              MathWallet, TokenPocket, WalletConnect, Binance Chain Wallet, and
              SafePal Walle, are fully compatible with WonderSwap and its token
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">No sign-up</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">18 partners</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">More than 900 coins</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">Fixed and floating rates</span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">No sign-up</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">18 partners</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">More than 900 coins</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex res_mt">
              <AiOutlineCheck className="check"></AiOutlineCheck>{" "}
              <span className="white">Fixed and floating rates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5    ">
          <h4  className="white text-start ps-2 py-2">Why WonderSwap?</h4>
          <div className="col-lg-6">
            <img src={f} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">Coin Support</span>
            </h6>
            <div className="pasda ">
              {" "}
              <p className="para abp">
                WonderSwap supports a variety of the most popular digital
                currencies and has a variety of features that make it the best
                place to start trading. Wonderswap offers DeFi technologies so
                that enterprises and token owners can confidently acquire,
                exchange more than 1000 cryptocurrency and tokens.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={f1} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">Security</span>
            </h6>
            <div className="pasda ">
              {" "}
              <p className="para abp">
                A number of specialised blockchain security and auditing
                businesses have partnered with WonderSwap with the goal of
                strengthening investor protection. The WonderSwap Security
                Protocol is an end-to-end transactional layer that supports
                digital non-fungible token payment infrastructure. With
                WonderSwap's ultra-protected servers, you may trade discreetly
                with the assurance that your money is secure.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2    ">
          <div className="col-lg-6">
            <img src={f2} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">
                Earning and Rewarding
              </span>
            </h6>
            <div className="pasda ">
              {" "}
              <p className="para abp">
                WonderSwap is the best passive income project, offering various
                methods to earn. As a fundamental element of our diversified
                investing strategy, WonderSwap enables its clients to earn large
                risk-free income. The way WonderSwap is set up seeks to attack
                every aspect of the cryptocurrency market as it exists right
                now.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={f4} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">
                Cross chain Swapping
              </span>
            </h6>
            <div className="pasda ">
              {" "}
              <p className="para abp">
                WonderSwap is a gateway that enables token transfers between the
                top blockchains in the world. It integrates cross chain swaps to
                provide traders access to multiple markets at once. Wonderswap
                enables trading operations across numerous chains and investment
                in projects running across particular chains.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2    ">
          <div className="col-lg-6">
            <img src={f5} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">Low fees</span>
            </h6>
            <div className="pasda ">
              {" "}
              <p className="para abp">
                The fees at WonderSwap are among the lowest in the industry. A
                user will notice that 0.5% of their transaction is being taken
                away when they conduct a swap. WonderSwap follows a fee-free
                governance model and operates without any governance fees. Using
                miner fees, Swap encourages network security.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={f6} className="d-flex" alt="" />

            <h6 className="text-start white mt-1">
              <span className="white text-start ps-2 about_sub_h">Easy to use</span>
            </h6>
            <div className="pasda ">
              {" "}
   res_mt            <p className="para abp">
                With WonderSwap You can Swap your Crypto Tokens Cross-Chain In
                Just One Tap. Wonderswap enables its users to swap native to
                native assets from one blockchain to another without needing to
                rely on a third party by utilising cross-chain communication
                across blockchains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
