import React from 'react';

const Packages = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl my-12">
                <div className='card-body'>
                    <h2 className="text-center text-2xl font-bold">Add a Package</h2>
                    <form onSubmit={handleSubmit}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <input value="Add Package" type="submit" className='btn btn-accent w-full max-w-xs mt-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Packages;