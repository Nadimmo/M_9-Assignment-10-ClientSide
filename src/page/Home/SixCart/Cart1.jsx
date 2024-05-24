import { Link } from "react-router-dom";
import logo from "../../../assets/image/one.jpg";
const Cart1 = () => {
  return (
    <div>
      <Link to={'/first'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" />
          </figure>
          <h2 className="card-title font-bold">
            Classic Pencil Sketch Portrait
          </h2>
          <p className="text-sm">
            A timeless pencil sketch portrait that captures the essence and
            personality of the subject with delicate shading and fine detail.
          </p>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default Cart1;
