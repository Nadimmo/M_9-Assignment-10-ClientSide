import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {
    const cart = useLoaderData()
    console.log(cart)
    const navigate = useNavigate()

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          category: formData.get('category'),
          description: formData.get('description'),
          customization: formData.get('customization'),
          price: parseFloat(formData.get('price')),
          stockStatus: formData.get('stockStatus'),
          email: formData.get('email'),
          user: formData.get('user'),
          time: formData.get('time'),
          photo: formData.get('photo'),
          artist: formData.get('artist'),
          rating: parseFloat(formData.get('rating'))
        };
        
        console.log(data);
        
        // Uncomment and update the fetch URL to send data to the backend
        fetch(`https://assignment-10-server-delta-roan.vercel.app/landscapes/${cart._id}`, {
          method: "PUT",
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire("Update Carte Successfully");
          navigate(`/update/${cart._id}`)
          form.reset();
        });
      };
    
    return (
        <div>
            <div className="card shrink-0 modal-action shadow-2xl bg-base-100 content">
          <form onSubmit={handlerSubmit} className="card-body">
            <div className="lg:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                defaultValue={cart.name}
                  name="name"
                  type="text"
                  placeholder="painting name"
                  className="input input-bordered lg:w-[400px]"
                  required
                />
              </div>
              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <input
                defaultValue={cart.category}
                  name="category"
                  type="text"
                  placeholder="category"
                  className="input input-bordered lg:w-[260px]"
                  required
                />
              </div>
            </div>
            <div className="lg:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                defaultValue={cart.description}
                  name="description"
                  type="text"
                  placeholder="description"
                  className="input input-bordered lg:w-[400px]"
                  required
                />
              </div>
              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <select name="customization" className="select select-bordered w-full max-w-xs" required>
                  <option disabled selected value="">You are customization anything</option>
                  <option  value="Yes">Yes</option>
                  <option  value="No">No</option>
                </select>
              </div>
            </div>
            <div className="lg:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                defaultValue={cart.price}
                  name="price"
                  type="number"
                  placeholder="price"
                  className="input input-bordered lg:w-[400px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">StockStatus</span>
                </label>
                <select name="stockStatus" className="select select-bordered lg:w-[260px]" required>
                  <option disabled selected value="">Select Your Stock Status</option>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>
            
            <div className="lg:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                defaultValue={cart.time}
                  name="time"
                  type="text"
                  placeholder="time"
                  className="input input-bordered lg:w-[400px]"
                  required
                />
              </div>
              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                defaultValue={cart.photo}
                  name="photo"
                  type="url"
                  placeholder="image"
                  className="input input-bordered lg:w-[260px]"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-success">Update</button>
            </div>
          </form>
        </div>
        <br /><br />
        </div>
    );
};

export default Update;