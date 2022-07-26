import React from 'react';

const AddAd = () => {
    const handleAddAd = (event) => {
        event.preventDefault();
        const ads = { title: event.target.name.value, videoID: event.target.videoID.value };

        fetch('https://tiusareza.herokuapp.com/addAds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ads)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })

        event.target.name.value = '';
        event.target.videoID.value = '';

    }
    return (
        <div>
            <h2 className="text-center font-semibold text-secondary text-3xl my-3">Add an Ads</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Add an Ad!</h1>
                        <p class="py-6">Give ads to user. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleAddAd}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Ad Name</span>
                                    </label>
                                    <input required name='name' type="text" placeholder="Ad name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Video ID</span>
                                    </label>
                                    <input required name='videoID' type="text" placeholder="Video ID" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Add Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAd;