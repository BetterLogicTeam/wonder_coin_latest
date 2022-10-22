import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../apis/api';
import { Dna } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function CheckRegister() {
    const [address, setaddress] = useState("Connect Wallet")
    const [spinner, setspinner] = useState(false)
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
    const CheckAddress = async () => {
        try {
            let acc = await loadWeb3()
            setspinner(true)


            console.log("Address", acc);
            let res = await axios.get(`https://wondercoin-api.herokuapp.com/checkuseraddress?id='${acc}'`)
            console.log("RES_Get", res.data
            );
            if (res.data.data == 0) {
                navigation('/Register')
            } else {
                navigation("/buy")
                
            }

        } catch (e) {
            console.log("Error While Calling Get Address Api", e);
            setspinner(false)

        }
    }

    useEffect(() => {
        getAddress()
        CheckAddress()
        setInterval(() => {

        }, 1000);

    }, [])
    return (
        <div style={{height:'70vh'}}>
            {
                spinner ?
                    <>
                        <Dna
                            visible={true}
                            height="100%"
                            width="100%"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </>
                    :
                    <></>
            }

        </div>
    )
}
