import { Link } from "react-router-dom";
import logo from "../../../assets/image/two.jpg";

const Cart2 = () => {
    return (
        <div>
            <Link to={'/second'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" className="rounded-xl"/>
          </figure>
          <h2 className="card-title font-bold">
          Serene Landscape in Watercolor
          </h2>
          <p className="text-sm">
          Capture the tranquility of nature with a serene landscape painted in watercolor. With gentle brushstrokes.
          </p>
        </div>
      </div>
      </Link>
        </div>
    );
};

export default Cart2;