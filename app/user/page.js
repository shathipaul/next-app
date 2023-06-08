'use client'
import React from 'react';
import { Poppins } from 'next/font/google'
import { useGetCounterQuery } from '../Redux/Features/counter/counterSlice';

const poppins = Poppins({
    weight: '500',
    style: 'normal',
    subsets: ['latin']
})

// const Users = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();

const Users = () => {
    const { data } = useGetCounterQuery();

    console.log(data)

    return (
        <div className={poppins.className}>
            <h1>abc</h1>

            {/* {
                data.map(e => <div key={e.id}>
                    <p>User Id: {e.id}</p>
                    <p>User Name: {e.name}</p>
                </div>)
            } */}

        </div>
    );
};

export default Users;