import { DeleteDestination } from "@/components/DeleteDialog/DeleteDestinationsDialog";
import { EditModal } from "@/components/EditModal/EditModal";
import { Button, Description } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { PiCalendarFill } from "react-icons/pi";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destination = await res.json();
  const {country, imageUrl, duration, destinationName, price, description } =
    destination;
  return (
    <div className="max-w-7xl mx-auto my-5">

      <div className="flex items-center justify-end gap-3  mt-5 mb-3">
        <EditModal destination={destination}></EditModal>
        <DeleteDestination destination={destination}></DeleteDestination>
      </div>
      <div className="">
        <Image
          src={imageUrl}
          alt={destinationName}
          height={500}
          width={800}
          className="w-full h-120 object-cover"
        ></Image>

        <div className="p-5">
          <div className="flex items-center gap-1">
            <LuMapPin /> <span>{country}</span>
          </div>
          <div className="flex items-center justify-between text-lg font-bold">
            <p>{destinationName}</p>
            <p>
              ${price}
              <span className="text-sm text-gray-400">/person</span>
            </p>
          </div>

          <p className="flex items-center gap-1">
            <PiCalendarFill /> <span>{duration}</span>
          </p>
        </div>

        <div className="mt-5">
            <p className="text-3xl font-bold">Overview</p>

            <p className="mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;
