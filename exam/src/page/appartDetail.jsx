import React from 'react';
import { useParams } from 'react-router-dom';

const appartementsData = [
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

const AppartementDetail = () => {
  const { id } = useParams();
  const appartement = appartementsData.find(app => app.id === parseInt(id));

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <h1>{appartement.title}</h1>
      <p>{appartement.description}</p>
      <p>Prix: {appartement.price} Ariary</p>
      <img src={`https://via.placeholder.com/400?text=Appartement+${appartement.id}`} alt={appartement.title} />
    </div>
  );
};

export default AppartementDetail;
