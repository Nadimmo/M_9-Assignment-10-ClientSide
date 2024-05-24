import { Link } from "react-router-dom";
import logo from "../../../assets/image/five.jpg";

const Cart5 = () => {
    return (
        <div>
            <Link to={'/five'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" className="rounded-xl"/>
          </figure>
          <h2 className="card-title font-bold">
          Vibrant Cartoon Drawing
          </h2>
          <p className="text-sm">
          Bright and lively cartoon drawings that bring characters to life with vivid colors and playful designs. Perfect for adding fun and creativity to any space.
          </p>
        </div>
      </div>
      </Link>
        </div>
    );
};

export default Cart5;