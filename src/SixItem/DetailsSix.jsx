import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsSix= () => {
    const carts = useLoaderData()
    const {id }= useParams()
    const idInt = parseInt(id)
    const data = carts.find((cart) => cart.id === idInt)
    console.log(idInt)
    return (
        <div className="hero mt-5">
      <div className="flex-col ">
        <img
        title={data.item_name}
          src={data.image}
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="text-left mt-5">
          <h1 className="text-4xl font-bold">{data.item_name}</h1>
          <p className="py-2 text-xl">
            {data.short_description}
          </p>
          <h3 className="text-2xl text-center font-extrabold py-4">More Details</h3>
          <div className="grid lg:grid-cols-3 gap-5">
                <p className="text-lg">Processing Time: <b className="italic">{data.processing_time}</b></p>
                <p className="text-lg">Price: <b className="italic">${data.price}</b></p>
                <p className="text-lg">Rating: <b className="italic">{data.rating} star</b></p>
          </div>
          <br />
          <button className="btn btn-info"> <Link to={'/'}> Go Back</Link></button>
        </div>
      </div>
      <br /><br />
    </div>
    );
};

export default DetailsSix;