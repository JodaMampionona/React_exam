import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const appartementsData = 
    [
        {
          "id": 1,
          "description": "A cozy 2-bedroom apartment located downtown with a fully equipped kitchen and a balcony.",
          "price": 1200,
          "picture": "https://picsum.photos/200"
        },
        {
          "id": 2,
          "description": "Spacious 3-bedroom apartment in a quiet neighborhood, close to public transport and schools.",
          "price": 1500,
          "picture": "https://picsum.photos/200"
        },
        {
          "id": 3,
          "description": "Modern 1-bedroom loft with large windows and a beautiful city view, located near restaurants and shops.",
          "price": 1000,
          "picture": "https://picsum.photos/200"
        },
        {
          "id": 4,
          "description": "Luxury 4-bedroom penthouse with a private rooftop terrace and high-end appliances.",
          "price": 2500,
          "picture": "https://picsum.photos/200"
        },
        {
          "id": 5,
          "description": "Affordable studio apartment perfect for students, within walking distance of the university.",
          "price": 800,
          "picture": "https://picsum.photos/200"
        },
        {
          "id": 6,
          "description": "Charming 2-bedroom apartment in a historic building, featuring wooden floors and original architecture.",
          "price": 1300,
          "picture": "https://picsum.photos/200"
        }
      ];

const AppartementsList = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [keyword, setKeyword] = useState('');

  const filteredAppartements = appartementsData.filter(appartement => {
    const withinPriceRange = 
      (minPrice === '' || appartement.price >= minPrice) &&
      (maxPrice === '' || appartement.price <= maxPrice);
    const matchesKeyword = appartement.description.toLowerCase().includes(keyword.toLowerCase());
    return withinPriceRange && matchesKeyword;
  });

  return (
    <div>
      <h1>Liste des appartements</h1>
      <input
        type="number"
        placeholder="Prix minimum"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix maximum"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recherche par description"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {filteredAppartements.map(appartement => (
          <li key={appartement.id}>
            <Link to={`/appartement/${appartement.id}`}>
              {appartement.title} - {appartement.price} Ariary
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppartementsList;
