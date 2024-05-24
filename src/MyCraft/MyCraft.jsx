/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Cart from "./Cart";

const MyCraft = () => {
  const cartes = useLoaderData()
  const [carts, setCarts] = useState(cartes);
  console.log(cartes)



  const handlerRemove = id => {
          Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://assignment-10-server-delta-roan.vercel.app/landscapes/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((result) => {
                  if (result.deletedCount > 0) {
                    // If deletion is successful, update UI without reloading
                    const remaining = carts.filter((catr) => catr._id !== id)
                    setCarts(remaining)
                    Swal.fire("Deleted!", "Your item has been deleted.", "success");
                    
                  }
                })
                .catch((error) => {
                  // If deletion fails
                  Swal.fire("Error!", "Something went wrong while deleting the item.", "error");
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // If user cancels deletion
              Swal.fire("Cancelled", "Your item is safe :)", "info");
            }
          });
        };


  return (
    <div>
      <div className="text-center">
                    <h1 className="text-4xl font-bold">Ethereal Twilight Tranquility</h1>
                    <p className="text-sm mt-3 opacity-[0.6]">Discover the magic of twilight with this ethereal landscape, where the fading light of day meets <br /> the emerging stars of night, painting the sky in hues  of lavender and gold, creating a moment  <br /> of serenity and reflection</p>
                </div>
           <div className="grid lg:grid-cols-3 gap-6">
                {
                    cartes.map(cart => <Cart key={cart._id}  handlerRemove={handlerRemove} cart={cart}></Cart>)
                }
            </div>
            <br /><br />
    </div>
  );
};

export default MyCraft;