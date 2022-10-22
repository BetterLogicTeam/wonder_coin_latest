import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { loadWeb3 } from '../../apis/api'
import Table from '../Table/Table'
import moment from "moment";


export default function Buy_Coin_History() {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)


    


    const referral_API = async () => {
        try {

            let acc=await loadWeb3()
            let responce = await axios?.get(`https://wondercoin-api.herokuapp.com/buycoin_history?id='${acc}'`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    user_id:item.user_id,
                    payBNB:item.payBNB,
                    USDValue:item.USDValue,
                    RequestToken:item.RequestToken,
                    PayBNBtxn:<><a href={`https://bscscan.com/tx/${item.PayBNBtxn}`} target="_blank" className='Link_text' >View Pay BNB txn </a></>,
                    PaidTokentxnid:<><a href={`https://bscscan.com/tx/${item.PaidTokentxnid}`} target="_blank" className='Link_text' >View Paid Token txn</a></>,
                    Request_date:  moment(item?.Request_date).format("M/D/YYYY h:m:s A"),
                    

                });



            }
            )
            // console.log("responce", arr);


            setreferralApi(arr)





        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    
    }, [])





    var [withdrawal_history, set_withdrawal_history] = new useState({
        cols: [
            // {Header:'User_id',accessor:'user_id'},
            {Header:'Pay BNB',accessor:'payBNB'},
            {Header:'USD Value',accessor:'USDValue'},
            {Header:'Request Token',accessor:'RequestToken'},
            { Header: 'Pay BNB TXN', accessor: 'PayBNBtxn' },
            { Header: 'Paid Token TXN', accessor: 'PaidTokentxnid' },
            { Header: 'Date', accessor: 'Request_date' },

        ],
        rows: [
            { Wallet_Address: '500', Transaction_Hash: 'View Txn', Date: '18/06/2022' },
          
        ]
    });
    return (
        <div>
            <div className="container">
                <div className="buy_coin_history " >

                    <Table
                        data={referralApi}
                        columns={withdrawal_history.cols}
                        name="Buy Coin History"
                    />
                </div>


            </div>
        </div>
    )
}
