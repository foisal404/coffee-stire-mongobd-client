import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Coffees = () => {
    const coffeColection=useLoaderData()
    const [coffees,setCoffees]=useState(coffeColection)
    return (
        <div>
            <h2 className='text-center text-5xl'>All coffees in Total {coffeColection.length}</h2>
            <div className='grid gap-4 grid-cols-2'>
            {
                coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Coffees;