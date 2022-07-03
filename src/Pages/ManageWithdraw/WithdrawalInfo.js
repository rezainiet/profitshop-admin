import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify'

const WithdrawalInfo = ({ withdraw, index }) => {
    console.log(withdraw);
    const { address, amount, email, method, status, _id, time } = withdraw;

    const [selected, setSelected] = useState({ status });

    const handleChange = (event) => {
        const newValue = event.target.value;
        console.log(newValue);
        setSelected(event.target.value);

        fetch(`https://profitshop.herokuapp.com/completedWithdraw/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newValue })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Success!')
            });

        const successes = { email, amount, address, method, time };

        if (newValue === "success") {
            fetch(`https://profitshop.herokuapp.com/successWithdraw/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(successes)
            })
                .then(res => res.json())
                .then(data => {
                    // window.location.reload();
                    console.log(data);
                    toast.success('Withdraw Success.');
                });
        };


        const rejected = { email, amount, address, method, time, status: newValue };

        if (newValue === "reject" || newValue === "success") {
            fetch('https://profitshop.herokuapp.com/allWithdrawResult', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(rejected)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        };

    };


    return (
        <>
            {
                withdraw.status === "pending" && <tr>
                    <th>{index + 1}</th>
                    <td>{method}</td>
                    <td>{amount}</td>
                    <td>{address}</td>
                    <td>{email}</td>
                    <td>
                        <select className='text-primary font-semibold' onChange={handleChange}>
                            <option value="pending">Pending</option>
                            <option value="success">Success</option>
                            <option value="reject">Reject</option>
                        </select>
                    </td>
                </tr>
            }
        </>
    );
};

export default WithdrawalInfo;