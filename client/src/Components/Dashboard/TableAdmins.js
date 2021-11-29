import { BiEdit, BiTrash } from "react-icons/bi";

import React from 'react'

const TableAdmins = ({user}) => {
    return (
        <>
       
            <tr  >
        <td >
          <span className="fw-normal">
            <div className="small text-gray">{user._id}</div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray"><span style={{marginRight:"10px"}}>{user.name}</span><span>{user.lastName}</span> </div>
          </span>
        </td>
        <td>
          <span className="fw-normal">
            <div className="small text-gray">{user.age}</div>
          </span>
        </td>
        
        
        <td>
          <span className="fw-normal">{user.phone}</span>
        </td>
        <td>
          <span className="fw-normal">{user.email}</span>
        </td>
        <td>
       
          <a >
            <BiEdit style={{ color: "orange" }} />{" "}
          </a>
          <a>
            {" "}
            <BiTrash
              
              style={{ color: "orange", }}
            />{" "}
          </a>
        </td>
      </tr>
        
        </>
    )
}

export default TableAdmins
