import React, { useEffect } from 'react';
import { useState } from 'react';
import auth from '../../firebase.init';
import WithdrawalInfo from './WithdrawalInfo';
import { useAuthState } from 'react-firebase-hooks/auth';

const ManageWithdraw = () => {
    const [user] = useAuthState(auth);

    // thi is for  withdraw section. for only Masud Reza
    //  h ythere I'm Masud Rrza. only I can see all of the thinks

    const [withdrawal, setWithdrawal] = useState([]);

    useEffect(() => {
        fetch('https://profitshop.herokuapp.com/getWithdraw')
            .then(res => res.json())
            .then(data => setWithdrawal(data));
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Method</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* <!-- row 1 --> */}

                        {
                            withdrawal.map((withdraw, index) => <WithdrawalInfo index={index} withdraw={withdraw} key={withdraw._id}></WithdrawalInfo>)
                        }
                    </tbody>

                    {
                        // user?.email === "masudrezaog@gmail.com" && <tbody>

                        //     {/* <!-- row 1 --> */}

                        //     {
                        //         withdrawal.map((withdraw, index) => <WithdrawalInfo index={index} withdraw={withdraw} key={withdraw._id}></WithdrawalInfo>)
                        //     }
                        // </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageWithdraw;