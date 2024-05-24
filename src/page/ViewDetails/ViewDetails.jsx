import {  Link, useLoaderData} from "react-router-dom";

const ViewDetails = () => {
  const arts = useLoaderData();
  // console.log(arts);



  return (
    <div className="hero mt-5">
      <div className="flex-col ">
        <img
        title={arts.name}
          src={arts.photo}
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="text-left mt-5">
          <h1 className="text-4xl font-bold">{arts.name}</h1>
          <p className="py-2 text-xl">
            {arts.description}
          </p>
          <h3 className="text-2xl text-center font-extrabold py-4">More Details</h3>
          <div className="grid lg:grid-cols-3">
            <div>
                <p className="text-lg">StockStatus: <b className="italic">{arts.stockStatus}</b></p>
                <p className="text-lg">Price: <b className="italic">${arts.price}</b></p>
            </div>
            <div>
                <p className="text-lg">Artist Name: <b className="italic">{arts.artist}</b></p>
                <p className="text-lg">Processing Time: <b className="italic">{arts.time}</b></p>
            </div>
            <div>
                <p className="text-lg">Customization: <b className="italic">{arts.customization}</b></p>
                <p className="text-lg">Rating: <b className="italic">{arts.rating} star</b></p>
            </div>
          </div>
          <br />
          <button className="btn btn-info"> <Link to={'/'}> Go Back</Link></button>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default ViewDetails;
