/* eslint-disable react/prop-types */
import { IoLogoDesignernews } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carts = ({cart}) => {
    // console.log(cart)
    return (
        <div className="mt-10">
        <div>
          <div className="card card-compact lg:h-[560px] lg:w-[360px] bg-base-100 shadow-xl p-6">
            <figure>
              <img
                src={cart?.photo}
                alt="loading.."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm"><IoLogoDesignernews className="text-xl" /> {cart?.name},<p className="text-sm">{cart.artist}</p> </h2>
              <h2 className="text-2xl font-bold">{cart?.category}</h2>
              <p className="text-[16px] opacity-[0.6]">{cart?.description}</p>
              <div className="lg:flex justify-between">
                <p className="text-[16px]">Processing Time: {cart?.time}</p>
                <p className="text-[16px]">Prices: ${cart?.price}</p>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-info"> <Link to={`/view/${cart._id}`}>View Details</Link> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Carts;