

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { loadWeb3 } from '../../apis/api'
import Table from '../Table/Table'
import moment from "moment";


export default function Refferral_history() {
    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)



    const referral_API = async () => {
        try {

            let acc=await loadWeb3()
            let responce = await axios?.get(`https://wondercoin-api.herokuapp.com/directIncome?id='${acc}'`)
            responce = responce?.data?.data;

            console.log("Res", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    user_id:item.uid,
                    token_amount:item.token_amount,
                    income:item.income,
                    amount:item.amount,
                 
                    edate: moment(item?.edate).format("M/D/YYYY h:m:s A"),
                    

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
            {Header:'Token Amount',accessor:'token_amount'},
            {Header:'Income',accessor:'income'},
            {Header:'Amount',accessor:'amount'},
           
            { Header: 'Date', accessor: 'edate' },

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
                        name="Referral Income"
                    />
                </div>


            </div>
        </div>
    )
}
