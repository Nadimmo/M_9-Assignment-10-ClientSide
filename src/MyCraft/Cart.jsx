/* eslint-disable react/prop-types */
import { IoLogoDesignernews } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = ({cart,handlerRemove}) => {
    // console.log(cart)
    return (
        <div className="mt-10">
        <div>
          <div className="card card-compact lg:h-[540px] lg:w-[360px] bg-base-100 shadow-xl p-6">
            <figure>
              <img
                src={cart?.photo}
                alt="loading.."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm"><IoLogoDesignernews className="text-xl" /> {cart?.name}</h2>
              <h2 className="text-2xl font-bold">{cart?.category}</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <p className="text-[16px]">Rating: <span className="font-bold">{cart?.rating} star</span> </p>
                <p className="text-[16px]">Prices: <span className="font-bold">${cart?.price}</span> </p>
                <p className="text-[16px]">Customization: <span className="font-bold">{cart?.customization} </span> </p>
                <p className="text-[16px]">Stock Status: <span className="font-bold">{cart?.stockStatus}</span> </p>
              </div>
              <div className="card-actions mt-10">
                <button className="btn btn-outline btn-accent"> <Link to={`/update/${cart._id}`}>Update</Link> </button>
                <button onClick={()=> handlerRemove(cart._id)} className="btn btn-outline btn-error lg:ml-28">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;