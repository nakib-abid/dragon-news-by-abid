import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div>
            <h2 className="font-semibold mb-4">Login with</h2>
            <div className="space-y-3 *:w-full">
                <button className="btn"><FaGoogle />Login with google</button>
                <button className="btn"><FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default Social;