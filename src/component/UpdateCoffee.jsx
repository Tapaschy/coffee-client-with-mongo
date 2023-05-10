import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id, name, quantity, suplier, taste, category, details, photo } = coffee;
    const updatedCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, suplier, taste, category, details, photo };
        console.log(updateCoffee)
        // send data to server site not database
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className='bg-[#F4F3F0] p-36'>
            <h1 className='text-center font-semibold text-4xl'>Your coffee house</h1>
            <form onSubmit={updatedCoffee}>
                <div className='flex mb-5'>
                    <div className="form-control mr-2 w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="label">
                            <input type="text" placeholder="Coffee Name" defaultValue={name} name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={quantity} placeholder="Available quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <div className="form-control mr-2 w-1/2">
                        <label className="label">
                            <span className="label-text">Suplier name</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={suplier} placeholder="Suplier name" name='suplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={taste} placeholder="Taste" name='taste' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <div className="form-control mr-2 w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={category} placeholder="Category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={details} placeholder="Details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className="form-control mr-2 w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="label">
                            <input type="text" defaultValue={photo} placeholder="Photo url" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default UpdateCoffee;