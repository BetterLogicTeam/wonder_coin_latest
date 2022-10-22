import React from 'react'
import "./Home.css"
import {FaUserPlus} from "react-icons/fa"
import {GoDeviceDesktop} from "react-icons/go"
import {ImDatabase} from "react-icons/im"


function Home() {
  return (
    <div className='Home_main_bg'>
        {/* <h2 className='home_h2'>Launching Time</h2>
        <div className="container">
            <div className="row mt-3">
                <div className="d-flex justify-content-center">
               <p className='home_pa'>4d</p>
               <p className='home_pa'>14h</p>
               <p className='home_pa'>10m</p>
               <p className='home_pa'>15s</p>
               </div>
            </div>
        </div> */}
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h3 className='home_sub_h'>A Complete DeFi Ecosystem</h3>
                    <p className='white'>Wondercoin offers DeFi technologies so that enterprises and token owners can confidently acquire, exchange, produce, and secure crypto assets.Numerous innovative features that Wondercoin will offer you will radically transform the cryptocurrency market.</p>
                </div>
            </div>
        </div>

        <div class="row m-0 justify-content-center mt-5">
			                <div class="col-sm-6 col-md-3 col-lg-3">
			                    <div class="how-item">
			                        <div class="how-item__thumb">
			                            {/* <i class="las fa fa-user-plus"></i> */}
                                        <FaUserPlus className='white'></FaUserPlus>
			                            <div class="badge badge--lg badge--round radius-50">01</div>
			                        </div>
			                        <div class="how-item__content">
			                            <h4 class="title white">Margin Trading </h4>
			                        </div>
			                    </div>
			                </div>
			                 <div class="col-sm-6 col-md-3 col-lg-3">
			                    <div class="how-item">
			                        <div class="how-item__thumb">
			                            {/* <i class="las fa fa-desktop"></i> */}
                                        <GoDeviceDesktop className='white'></GoDeviceDesktop>
			                            <div class="badge badge--lg badge--round radius-50">02</div>
			                        </div>
			                        <div class="how-item__content">
			                            <h4 class="title white">Lending </h4>
			                        </div>
			                    </div>
			                </div>

			                

			                <div class="col-sm-6 col-md-3 col-lg-3">
			                    <div class="how-item1">
			                        <div class="how-item__thumb">
			                            {/* <i class="las fa fa-database"></i> */}
                                        <ImDatabase className='white'></ImDatabase>
			                            <div class="badge badge--lg badge--round radius-50">03</div>
			                        </div>
			                        <div class="how-item__content">
			                            <h4 class="title white">Liquidity Providing</h4>
			                        </div>
			                    </div>
			                </div>

			                
			               
			            </div>
      
    </div>
  )
}

export default Home
