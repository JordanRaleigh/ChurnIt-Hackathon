import React from 'react';
import { NavLink } from 'react-router-dom';

const CreditCardPerks = (props) => {
  const { categories } = props.perk;
  const { perks } = props.perk;
  // console.log(props);
  const displayPointsForCategory = (category) => {
    const foundPerk = perks.find((perk) => perk.categoryId === category.id);
    return foundPerk.points;
  };
  return (
    <div className="md:flex shadow-lg  mx-6 md:mx-auto my-10 max-w-lg md:max-w-1">
      <h1 className="text-gray-800 font-medium mr-auto flex text-center items-center justify-center">
        {props.perk.issuer} {props.perk.card}
      </h1>
      <h1 className="bg-gray-200 flex text-center items-center justify-center rounded-full px-5 text-sm font-semibold text-gray-700 mr-2">
        {props.perk.network}
      </h1>
      {categories.map((category) => (
        <div key={category.id}>
          <NavLink to={`/categories/${category.id}`}>
            <p className="text-gray-800 font-medium mr-auto flex text-center items-center justify-center">
              {category.category}
            </p>
          </NavLink>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 flex text-center items-center justify-center">
            {displayPointsForCategory(category)} Points
          </p>
        </div>
      ))}
    </div>
  );
};

export default CreditCardPerks;
