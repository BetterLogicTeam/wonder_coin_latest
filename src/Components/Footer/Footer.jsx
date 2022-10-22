import React from 'react'
import logo from "../Assets/logo.png"
import "./Footer.css"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
import {AiFillMediumSquare} from "react-icons/ai"


function Footer() {
  return (
    <div className='footer_main'>
      <div className="container">
        <div className="row">
             <div className="col-lg-3 col-md-3">
                  <img src={logo}  className='footr_logo'alt="" />
                    <p className='text-white ffoter_para' >Trade, lend, borrow, earn and more, in a growing suite of DeFi products from Wondercoin Join us Now !!</p>
<div className="d-flex">

<BsTwitter className='icon_footer'></BsTwitter>
<AiFillInstagram className='icon_footer'></AiFillInstagram>
<BsDiscord className='icon_footer'></BsDiscord>
<AiFillMediumSquare className='icon_footer'></AiFillMediumSquare>

</div>
             </div>
             <div className="col-lg-2 col-md-2 mt-3">
                 <h6 className='text-white right'> <a href="#"></a> useful links</h6>
                <a href="#" className='foot_pra'> About Us</a><br />
                 <a href="#" className='foot_pra'> NFT</a><br />
                  <a href="#" className='foot_pra'> NFT Open Market</a><br />
                  <a href="#" className='foot_pra'> L.P Farming</a><br />
             </div>
  
             <div className="col-lg-2 col-md-2 mt-3">
                 <h6 className='text-white right '>Swap</h6>
                 <a className='foot_pra mrr' >Swap Exchange</a><br />
                 <a className='foot_pra mrr' >Wonder Land</a>
                
             </div>
             <div className="col-lg-3 col-md-2 mt-3">
                 <h6 className='text-white right'>Help</h6>
                 <a className='foot_pra mrr' >Terms & Conditions</a><br />
                 <a className='foot_pra mrr' >Privacy Policy</a>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
