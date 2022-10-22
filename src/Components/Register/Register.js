import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { toast } from 'react-toastify'
import { loadWeb3 } from '../../apis/api'
import './Register.css'

export default function Register() {
    const [address, setaddress] = useState("Connect Wallet")
    const [getValue, setgetValue] = useState("")
    const [spinner_reg, setspinner_reg] = useState(false)

    let navigation = useNavigate()


    const getAddress = async () => {
        let acc = await loadWeb3()
        if (acc == "No Wallet") {
            console.log("wallet");
            toast.error("No Wallet");
            setaddress("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Network");

            setaddress("Wrong Network")
        } else if (acc == "Connect Wallet") {
            toast.success("Connect Wallet");

        } else {
            setaddress(acc)

        }

    }





    const Register_Api = async () => {
        let acc = await loadWeb3()

        try {
            setspinner_reg(true)

            let Res = await axios.post("https://wondercoin-api.herokuapp.com/registration", {
                "sidAddress": getValue,
                "accountnumber": acc
            })
            if (Res.data.data == "Successfull") {
                navigation("/buy")
            } else {
                toast.error(Res.data.data)
                setspinner_reg(false)

            }

            // console.log("Res",Res.data.data);

        } catch (e) {
            console.log("Error While Calling Register api", e);
            setspinner_reg(false)

        }
    }

    useEffect(() => {
        getAddress()


    }, [])

    return (
        <div>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4 py_0 heading">
                            <div class="pools">

                                <div class="tab-content">
                                    <div class="container py_0 tab-pane active">
                                        <div class="exchange_tab">
                                            <div class="exchange_wrap2 pt_5">
                                                <div class="exchange_hd">
                                                    <h3 class="text-center">Metamask Connected</h3>
                                                </div>

                                            </div>
                                            <br />
                                            <div class="exchange_arrow">
                                                <h6>Referral Address</h6>


                                            </div>
                                            <div class="exch_bg mb-4">

                                                <div class="exchange_wrap" style={{ padding: "8px 0PX 6PX 1PX" }}>

                                                    <input type="text" class="input_set5" placeholder="Enter Referral Address" required onChange={(e) => setgetValue(e.target.value)} />



                                                </div>
                                            </div>
                                            <div class="exchange_arrow">
                                                <h6>Self Address</h6>


                                            </div>
                                            <div class="exch_bg mb-4">

                                                <div class="exchange_wrap" style={{ padding: "8px 0PX 6PX 1PX" }}>

                                                    <input type="text" class="input_set5" value={address} placeholder="Self Address" />



                                                </div>
                                            </div>

                                            <div class="wallet_btn mr_set">
                                                <button class="btn btn1 button btn-success" onClick={() => Register_Api()} >
                                                    {
                                                        spinner_reg ?
                                                            <>
                                                                <div class="spinner-border" role="status">
                                                                    <span class="visually-hidden">Loading...</span>
                                                                </div>
                                                            </> :
                                                            <>
                                                                Submit
                                                            </>
                                                    }

                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}
