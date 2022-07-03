import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5'>
                <div className="card flex items-center justify-center h-28 bg-secondary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage Withdraw!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/manage-withdraw')}>manage</button>
                        </div>
                    </div>
                </div>
                <div className="card flex items-center justify-center h-28 bg-secondary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage Purchase!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/manage-purchase')}>manage</button>
                        </div>
                    </div>
                </div>
                {/* <div className="card flex items-center justify-center h-28 bg-green-400 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage Reviews!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/reviews')}>manage</button>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card flex items-center justify-center h-28 bg-green-600 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage blogs!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/blogs')}>manage</button>
                        </div>
                    </div>
                </div> */}
                <div className="card flex items-center justify-center h-28 bg-green-800 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage Users!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/all-user')}>manage</button>
                        </div>
                    </div>
                </div>
                {/* <div className="card flex items-center justify-center h-28 bg-purple-400 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Manage Packages!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/packages')}>manage</button>
                        </div>
                    </div>
                </div> */}
                <div className="card flex items-center justify-center h-28 bg-purple-400 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Add Ads!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-xs btn-warning" onClick={() => navigate('/add-ads')}>manage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;