/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Row = ({ craft }) => {
  console.log(craft);

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={craft.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{craft.artist}</div>
          </div>
        </div>
      </td>
      <td>
        {craft.name}
        <br />
      </td>
      <td>{craft.stockStatus}</td>
      <th>
        <button className="btn btn-outline btn-accent"><Link to={`/view/${craft._id}`}>ViewDetails</Link></button>
      </th>
    </tr>
  );
};

export default Row;
