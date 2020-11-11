import { server } from '@hackhouse/client/utils';
import { ListingsData } from '@hackhouse/types';
import React from 'react';
import './listings.css';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

interface ListingsProps {
  title: string;
}

export const Listings = ({ title }: ListingsProps) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({
      query: LISTINGS,
    });

    console.log(data);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Load Listings</button>
    </div>
  );
};

export default Listings;
