import { Link } from "react-router-dom";
import logo from "../../../assets/image/six.jpg";

const Cart6 = () => {
    return (
        <div>
            <Link to={'/six'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" className="rounded-xl"/>
          </figure>
          <h2 className="card-title font-bold">
          Golden Horizon
          </h2>
          <p className="text-sm">
          A mesmerizing sunset over rolling hills, with the sky ablaze in shades of gold and orange, casting a warm glow over the tranquil landscape.
          </p>
        </div>
      </div>
      </Link>
        </div>
    );
};

export default Cart6;