import Category from '../../Category';

const categories = [
  {
    title: 'Men’s Fashion',
    subcategories: ['Clothing', 'Shoes', 'Accessories'],
  },
  { title: 'Electronics', subcategories: ['Phones', 'Laptops', 'Accessories'] },
  {
    title: 'Home & Lifestyle',
    subcategories: ['Furniture', 'Decor', 'Kitchen'],
  },
  {
    title: 'Medicine',
    subcategories: ['Health', 'Supplements', 'Medical Devices'],
  },
  {
    title: 'Sports & Outdoor',
    subcategories: ['Sportswear', 'Equipment', 'Shoes'],
  },
  {
    title: 'Baby’s & Toys',
    subcategories: ['Educational Toys', 'Strollers', 'Building Blocks'],
  },
  {
    title: 'Groceries & Pets',
    subcategories: ['Fresh Fruits', 'Bread', 'Seafood'],
  },
  {
    title: 'Health & Beauty',
    subcategories: ['Multivitamins', 'Fish Oil & Omega-3', 'Face Masks'],
  },
];

const CategoryList: React.FC = () => {
  return (
   
      <div className=" container">
        <div className="mb-24 text-black  relative h-52 w-52 z-50 ">
          <div className=" border-r-2 border-solid border-black min-h-full absolute top-0 z-50 bg-white w-52 " style={{paddingRight: '16rem'}}>
            {categories.map((category, index) => (
              <Category
                key={index}
                title={category.title}
                subcategories={category.subcategories}
              />
            ))}
          </div>
        </div>
      </div>
  
  );
};

export default CategoryList;
