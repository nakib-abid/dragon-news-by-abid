import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-slate-200 p-2">
      <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
      <Marquee pauseOnHover className="space-x-8">
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto?</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto?</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto?</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
