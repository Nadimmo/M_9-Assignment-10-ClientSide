/* eslint-disable react/jsx-key */
import { IoLogoDesignernews } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const FirstPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-center  mt-5">
        <h2 className="text-4xl font-bold">
          Classic Pencil Sketch Portrait
        </h2>
        <p className="text-sm mt-2">
          A timeless pencil sketch portrait that captures the essence and
          personality <br /> of the subject with delicate shading and fine
          detail.
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {
                data.map(cart => <div>
          <div className="card card-compact lg:h-[560px] lg:w-[360px] bg-base-100 shadow-xl p-6">
            <figure>
              <img
                src={cart?.image}
                alt="loading.."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm"><IoLogoDesignernews className="text-xl" /> {cart?.item_name} </h2>
              <h2 className="text-2xl font-bold">{cart?.subcategory_Name}</h2>
              <p className="text-[16px] opacity-[0.6]">{cart?.short_description}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-info"> <Link to={`/first/${cart.id}`}>View Details</Link> </button>
              </div>
            </div>
          </div>
                </div> )
            }
      </div>
      <br /><br />
    </div>
  );
};

export default FirstPage;
