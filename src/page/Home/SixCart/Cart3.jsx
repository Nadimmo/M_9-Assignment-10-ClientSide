import { Link } from "react-router-dom";
import logo from "../../../assets/image/there.jpg";

const Cart3 = () => {
    return (
        <div>
            <Link to={'/third'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" className="rounded-xl"/>
          </figure>
          <h2 className="card-title font-bold">
          Imeless Oil Paintings
          </h2>
          <p className="text-sm">
          Rich, textured oil artworks capturing beauty and emotion vividly. Perfect for adding elegance and depth to any space, each piece tells a unique story.
          </p>
        </div>
      </div>
      </Link>
        </div>
    );
};

export default Cart3;