import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  

  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col my-5 gap-3">
        {
            categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>{category.category_name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Leftbar;
