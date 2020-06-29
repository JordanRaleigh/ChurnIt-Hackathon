import React from 'react';
import { Link } from 'react-router-dom';

function compare(a, b) {
  if (a.category.toUpperCase() < b.category.toUpperCase()) {
    return -1;
  }
  if (a.category.toUpperCase() > b.category.toUpperCase()) {
    return 1;
  }
  return 0;
}

export default function CategoryList(props) {
  const { categories } = props;
  console.log(categories);
  const sorted = categories.sort(compare);
  return (
    <div className="flex flex-row flex-wrap flex items-center justify-center">
      <h1 className="w-full text-blue-800 flex text-center items-center justify-center bg-white h-auto py-20 md:text-4xl sm:text-2xl mb-4">
        Welcome to ChurnIt, select a category below to see which credit card you
        should use!
      </h1>
      <p>
        {sorted.map((category) => (
          <div
            key={category.id}
            className=" bg-gray-100 flex items-center justify-center mt-10 p-2 mr-4 rounded shadow-xl"
          >
            <Link to={`/categories/${category.id}`}>
              <h1 className="text-gray-900 text-xl flex items-center justify-center title-font font-medium mb-1">
                {category.category}
              </h1>
            </Link>
          </div>
        ))}
      </p>
    </div>
  );
}
