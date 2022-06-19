import React, { useEffect } from 'react';
import { useState } from 'react';
import PurchasedInfo from './PurchasedInfo';

const ManagePurchase = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/purchased')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Package Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* <!-- row 1 --> */}

                        {
                            orders.map((order, index) => <PurchasedInfo index={index} order={order} key={order._id}></PurchasedInfo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePurchase;