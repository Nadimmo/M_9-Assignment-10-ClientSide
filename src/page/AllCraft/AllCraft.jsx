import { useLoaderData } from "react-router-dom";
import Row from "../../MyCraft/Row";

const AllCraft = () => {
    const crafts = useLoaderData()
    console.log(crafts)
    return (
        <div>
                  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Artist Name</th>
        <th>Panting Category</th>
        <th>Stack Status </th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        crafts.map(craft => <Row key={craft._id} craft={craft}></Row>)
      }

    </tbody>
  </table>
 </div>
        </div>
    );
};

export default AllCraft;