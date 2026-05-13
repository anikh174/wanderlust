import DestinationsCard from '@/components/DestinationsCard/DestinationsCard';
import React from 'react';

const DestinationsPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json();
    console.log(destinations)
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold my-5'>Explore All Destinations</h2>

            <div className='grid grid-cols-4 gap-5 p-5'>
                {
                    destinations.map(destination=> <DestinationsCard key={destination._id} destination={destination}></DestinationsCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;