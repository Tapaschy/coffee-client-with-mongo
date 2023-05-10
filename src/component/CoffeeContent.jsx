import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeContent = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, suplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = coffees.filter(cof => cof._id !== _id);
                setCoffees(remaining);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex'>
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{details}</p>
                        </div>
                        <div className="btn-group btn-group-vertical">
                            <button className="btn btn-active">Add</button>
                            <button className="btn">
                                <Link to={`/updatecoffee/${_id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeContent;