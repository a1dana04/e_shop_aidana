import { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

interface CategoryProps {
  title: string;
  subcategories?: string[];
}

const Category: React.FC<CategoryProps> = ({ title, subcategories = [] }) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="mx-auto w-full text-black   ">
      <div
        onClick={handleClick}
        className="flex items-start  text-lg text-black hover:text-gray-900 focus:outline-none  w-52 justify-between pb-2 pt-3 "
      >
        {title}
        <span className=" ml-8 text-xl text-black">
          {showCategories ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </span>
      </div>

      {showCategories && (
        <div className=" ">
          {subcategories.length > 0 ? (
            <ul className="space-y-2">
              {subcategories.map((subcategory, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-800">
                  {subcategory}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No subcategories available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
