import { Link } from "react-router-dom";
import logo from "../../../assets/image/four.jpg";

const Cart4 = () => {
    return (
        <div>
            <Link to={'/four'}>
      <div className="card h-[400px] w-[340px] bg-base-100 shadow-xl hover:shadow-slate-500">
        <div className="card-body">
          <figure>
            <img src={logo} alt="Shoes" className="rounded-xl"/>
          </figure>
          <h2 className="card-title font-bold">
          Expressive Charcoal Sketching
          </h2>
          <p className="text-sm">
          Dynamic charcoal sketches capturing raw emotion and intricate detail. Ideal for adding a touch of classic artistry and sophistication to your decor.
          </p>
        </div>
      </div>
      </Link>
        </div>
    );
};

export default Cart4;