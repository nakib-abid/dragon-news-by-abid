import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ singleNews }) => {
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <img
        className="w-full object-cover rounded-lg"
        src={singleNews.image_url}
        alt={singleNews.title}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            className="w-10 h-10 rounded-full"
            src={singleNews.author.img}
            alt={singleNews.author.name}
          />
          <div className="ml-3">
            <h2 className="text-lg font-semibold">{singleNews.author.name}</h2>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{singleNews.title}</h3>
        <p className="text-gray-700 mb-4">
          {singleNews.details.slice(0, 100)}...{" "}
          <Link to={`/news/${singleNews._id}`} className="text-blue-500">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-500 font-bold">
              {singleNews.rating.number}
            </span>
            <span className="text-gray-500 ml-1">
              ({singleNews.rating.badge})
            </span>
          </div>
          <div className="flex items-center">
            <FaShareAlt className="text-gray-500 cursor-pointer" />
            <span className="text-gray-500 ml-1">{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
