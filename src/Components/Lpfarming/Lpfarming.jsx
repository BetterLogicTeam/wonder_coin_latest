import React from "react";
import "./Lpfarming.css";

import nftf from "../Assets/nftf.jpg";
import nftfar from "../Assets/nftfar.gif";
import nftfr from "../Assets/nftfr.gif";

import "./Responsive.css"

function Lpfarming() {
  return (
    <div className="Lp_f_main">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-12 col-md-12">
            <div className="grp">
              <div className="leeft">
                <div>
                  <img className="item iteem" src={nftf} alt="" />
                </div>
              </div>
              <div className="rightt">
                <div>
                  <img src={nftfar} className="item iteem" alt="" />
                </div>
                <div>
                  <img className="iteem item  mb-3 mt-3" src={nftfr} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <h5 className="white text-start ps-2">
            Farming</h5>
<p className="para">DeFi has numerous prospects, but there is a high technical barrier and a steep learning curve. WonderSwap simplifies the process of obtaining farming rewards for everybody, regardless of experience. You leave the investing to us instead of wasting time and effort hunting for fantastic possibilities, bridging tokens, and looking at charts. Then you get paid directly from the farm's profits.
We work with a number of DeFi titans.
Earn Rewards by Keeping Wondercoin!
</p>
<p className="para lh-0">
When you buy Wondercoin, a 6% fee is charged to the holders as a reflection. The treasury is where we farm DeFi projects over several chains and protocols. We convert all farming revenues into Wondercoin rewards. </p>
<p className="para lh-0">
These gains are distributed over time. The longer you stay, the more perks you will receive.
The income stream is dependent on the farm's development, which is exponential rather than linear, therefore estimates of linear returns will be severely deceptive. As an investor, you should instead consider the farm's prior performance and the team's ability to continue producing in a sustainable and risk-managed manner.
</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lpfarming;
