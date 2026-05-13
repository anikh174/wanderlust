import Image from 'next/image';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { PiCalendarFill } from 'react-icons/pi';

const DestinationsCard = ({destination}) => {
    const {category, country, imageUrl, duration, destinationName, description
, departureDate, price} = destination;
    return (
        <div className='border border-gray-300'>
            <Image src={imageUrl} alt={destinationName} height={400} width={400} className='h-50'></Image>

            <div className='p-5'>
                <div className='flex items-center gap-1'><LuMapPin /> <span>{country}</span></div>
                <div className='flex items-center justify-between text-lg font-bold'>
                    <p>{destinationName}</p>
                    <p>${price}<span className='text-sm text-gray-400'>/person</span></p>
                </div>

                <p className='flex items-center gap-1'><PiCalendarFill /> <span>{duration}</span></p>
            </div>
        </div>
    );
};

export default DestinationsCard;