import React from 'react';

const UserCard = ({ user, index }) => {
    const { fullName, email, balance, time } = user;

    const fullBalance = parseInt(balance)
    return (
        <React.Fragment>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {fullName}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {email}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {fullBalance}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                        </span>
                        <span className="relative">
                            active
                        </span>
                    </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                    </a>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default UserCard;