import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold mb-4">Find us on</h2>

      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"><FaFacebookSquare /> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter /> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagramSquare /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
