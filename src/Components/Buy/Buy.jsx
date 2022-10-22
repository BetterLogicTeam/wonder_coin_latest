import React, { useEffect, useState } from 'react'
import "./Buy.css"
import click from "../Assets/click.png"
import axios from 'axios'
import { loadWeb3 } from '../../apis/api';
import { toast } from 'react-toastify';
import { wonderCoinAddress, wonderCoin_Abi } from '../../Utils/Contract_Address';
import { ThreeDots } from 'react-loader-spinner';
import { SyncLoader } from 'react-spinners';


let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
function Buy() {
  let [liveRate, setliveRate] = useState(0)
  let [amount, setamount] = useState(0)
  let [meticmultiplyablevalue, setmeticmultiplyablevalue] = useState(0)
  let [connected, setconnected] = useState("Wallet is locked")
  let [valueBNB, setvalueBNB] = useState(0)
  let [valueCoin, setvalueCoin] = useState(0)
  let [balanceUle, setbalanceUle] = useState(0)
  let [TrxBalance, setTrxBalance] = useState(0)
  let [spiner, setspiner] = useState(false)
  const [loading, setloading] = useState(false)



  const walletConnected = async () => {
    try {
      let acc = await loadWeb3()

      if (acc == 'No Wallet') {
        toast.error('No Wallet')
        setconnected('Wallet is locked')

      }
      else if (acc == 'Wrong Network') {
        toast.error(' Wrong Network Please Connect Polygon Network')
        setconnected('Wallet is locked')
      }
      else {
        // setaddress(acc)
        setconnected('Wallet is Unlocked')
      }



    } catch (e) {
      console.log("Error While WalletConnect", e);
    }
  }

  const UleBalance = async () => {
    let acc = await loadWeb3()

    let contract = await new window.web3.eth.Contract(wonderCoin_Abi, wonderCoinAddress)
    let result = await contract.methods.balanceOf(acc).call()
    // result = parseInt(result)
    result = window.web3.utils.fromWei(result);
    // result = result.toFixed(1)
    // setBlnce(result);

    setbalanceUle(result)
    console.log("Balance Ule", result);


    let bNB_balance = await window.web3.eth.getBalance(acc)
    result = parseInt(result)

    bNB_balance = window.web3.utils.fromWei(bNB_balance)
    // bNB_balance = bNB_balance.toFixed(8)

    console.log("Addressss", bNB_balance);
    console.log("Balance_BNB", bNB_balance);

    setTrxBalance(bNB_balance)

  }

  const getLiveRate = async () => {
    try {
      setloading(true)
      let res = await axios.get('https://wondercoin-api.herokuapp.com/live_rate')
      console.log("Res", res.data.data[0].usdperunit);
      setliveRate(res.data.data[0].usdperunit)
      setloading(false)

    } catch (e) {
      console.log("Erroe while calling LiveRate Api ", e);
      // setloading(false)

    }
  }


  const getValue_BNB = async () => {
    try {

      let Res = await axios.get(`https://wondercoin-api.herokuapp.com/getconvertValue?id=${amount}`)
      console.log("RES_BNB", Res);
      setvalueBNB(Res.data.data[0].ethereum)
      setvalueCoin(Res.data.data[0].Token)
    } catch (e) {
      console.log("Error While Calling GetValue API", e);
    }
  }


  const buyToken = async () => {
    let acc = await loadWeb3();
    if (acc == 'No Wallet') {
      toast.error('No Wallet')
    }
    else if (acc == 'Wrong Network') {
      toast.error('Wrong Network Please Connect Polygon Network')
    }
    else {

      let Res = await axios.post('https://wondercoin-api.herokuapp.com/check_buy_condition', {
        "address": acc
      })
      // console.log("CHeckUser",Res);
      Res = Res.data.data
      if (Res != "Success") {
        toast.error(Res)

      } else {




        let res = await axios.get(`https://wondercoin-api.herokuapp.com/checkuseraddress?id='${acc}'`)
      
        if (res.data.data == 0) {
          toast.error("User is Not Register")

        } else {

          setspiner(true)

          valueBNB = valueBNB.toString()

          let bnb = window.web3.utils.toWei(valueBNB)

          try {
            let contract = await new window.web3.eth.Contract(wonderCoin_Abi, wonderCoinAddress)
            // let token = await new window.web3.eth.Contract(tokenAbi, tokenAddress)

            // let approveCall = await token.methods.approve(contractAddressbnb, ule).send({ from: acc });
            // toast.success('Approved')
            let sellCall = await contract.methods.buy().send({ from: acc, value: bnb });
            toast.success('Transection Succesfull')

            sellCall = sellCall.transactionHash
            let res = await axios.post(`https://wondercoin-api.herokuapp.com/buycoin`, {
              "accountnumber": acc,
              "usdamount": amount,
              "tokenamount": valueCoin,
              "bnbamount": valueBNB,
              "trx": sellCall
            });

            console.log("Buy_Api_Res", res);

            setspiner(false)

          }
          catch (err) {
            console.log("error while calling fuction sell", err)
            setspiner(false)

          }
        }
      }

    }
    // setloader(false)
  }



  const fifty = async (value) => {
    if (value == 50) {
      setmeticmultiplyablevalue(value)
      setamount('')
      count2 = 0
      count3 = 0
      count4 = 0
      count1 = count1 + 1;

      setamount(value * count1);

    }
    else if (value == 100) {
      count1 = 0
      count3 = 0
      count4 = 0
      setmeticmultiplyablevalue(value)
      setamount('')
      count2 = count2 + 1;

      setamount(value * count2);


    }
    else if (value == 500) {
      count1 = 0
      count2 = 0
      count4 = 0
      setmeticmultiplyablevalue(value)
      setamount('')
      count3 = count3 + 1;

      setamount(value * count3);


    }
    else if (value == 1000) {

      setamount('')
      setmeticmultiplyablevalue(value)
      count1 = 0
      count3 = 0
      count2 = 0
      count4 = count4 + 1;

      setamount(value * count4);


    }
    else if (value == 0) {

      setamount('')
      setmeticmultiplyablevalue(value)
      count1 = 0
      count3 = 0
      count2 = 0
      count4 = 0;

      setamount(value * count4);


    }

    // setamount(value * count);


  }






  useEffect(() => {
    getValue_BNB()
  }, [amount])



  useEffect(() => {

    getLiveRate()
    walletConnected()
    UleBalance()
  }, [])


  return (
    <div className='buy_main'>

      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-6">
            <div className="card buy_card">
              {
                loading ?
                  <>
                    <div className='loader rounded-4 d-flex justify-content-center align-items-center w-100 h-100 '>
                      <SyncLoader color='#fff' />
                    </div>
                  </> :
                  <>

                  </>
              }
              <div className="card-header buy_hea">
                <h2 className='white text-start buy_header_h'>Buy Coin</h2>
                <h5 className='white text-start'>Available Coin Balance : {balanceUle} Coin</h5>
                <h5 className='white text-start'>Available BNB Balance : {TrxBalance} BNB</h5>
                <h5 className='white text-start'>Live Rate : <span><input type="text" value={`1 WonderCoin =${liveRate} USD`} className="text-dark card_in w-50" /></span>   </h5>

              </div>
              <div className="card-body">
                <h6 className='para text-start'>
                  {connected}
                </h6>
                <div className="input_buy">
                  <input type="text" className='card_in text-dark' value={amount} /> <span className='white mt-2 fs-5 ms-1'>USD</span>
                </div>
                <div className="input_buy mt-3">
                  <input type="text" className='card_in text-dark' value={valueCoin} /> <span className='white mt-2 fs-5 ms-1'>Coin Value</span>
                </div>
                <div className="input_buy mt-3">
                  <input type="text" className='card_in text-dark' value={valueBNB} /> <span className='white mt-2 fs-5 ms-1'>BNB Value</span>
                </div>

                <div className="row mt-3 ">
                  <div className="col-lg-3 col-3">
                    <button className='btn input_btn' onClick={() => { fifty(50) }}>+50$</button>
                  </div>
                  <div className="col-lg-3 col-3">
                    <button className='btn input_btn' onClick={() => { fifty(100) }}>+100$</button>
                  </div>
                  <div className="col-lg-3 col-3">
                    <button className='btn input_btn' onClick={() => { fifty(500) }}>+500$</button>
                  </div>
                  <div className="col-lg-3 col-3">
                    <button className='btn input_btn' onClick={() => { fifty(1000) }}>+1000$</button>
                  </div>
                </div>
                <button className='btn input_btn mt-3' onClick={() => { fifty(0) }}>Reset</button>
                <div className="d-flex justify-content-center mt-3" style={{ cursor: 'pointer' }}>
                  <div className="buy_token" onClick={() => buyToken()}>
                    {
                      spiner ?
                        <>
                          <div class="spinner-border spinnerload" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </>

                        :

                        <>
                          <img src={click} alt="" />
                          <h4 className='white'>Buy Coin</h4>

                        </>
                    }

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Buy
