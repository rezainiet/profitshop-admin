import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const PurchasedInfo = ({ order, index }) => {
    const { packageName, buyer, status, transactionId, price, _id, perAds, ads } = order;

    const [selected, setSelected] = useState({ status });

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelected(event.target.value);

        fetch(`https://tiusareza.herokuapp.com/getInfo/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newValue, buyer })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Package updated.')

            });
        const date = new Date().toISOString().slice(0, 10);
        const successPackageInfo = { packageName, buyer, price, date, perAds, ads };

        if (newValue === "success") {
            fetch(`https://tiusareza.herokuapp.com/successBuy/${buyer}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(successPackageInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Package Successfully bought!');
                })
            // .then(window.location.reload())
        }
    };


    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{transactionId}</td>
                <td>{price}</td>
                <td>{buyer}</td>
                <td>{packageName}</td>
                <td>
                    <select className='text-primary font-semibold' onChange={handleChange}>
                        <option value="pending">Pending</option>
                        <option value="success">Success</option>
                        <option value="reject">Reject</option>
                    </select>
                </td>
            </tr>
        </>
    );
};

export default PurchasedInfo;