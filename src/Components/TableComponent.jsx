import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import "../Styles/TableComponent.css";
const TableComponent = ({
  data,
  deleteCategory,
  editCategory,
  deleteProduct,
  editProduct,
}) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category ID</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.product_id}>
              <td>{index + 1}</td>
              <td>{item.product_id}</td>
              <td className="name">
                <span>{item.product_name}</span>
                <span>
                  <MdEdit onClick={() => editProduct(item.product_id)} />
                  <MdDelete onClick={() => deleteProduct(item.product_id)} />
                </span>
              </td>
              <td>{item.category_id || ""}</td>
                {
                    item.category_id?
              <td className="name" >
                <span>
                {item.category_name || ""}
                </span>
                    <span>  
                  <MdEdit onClick={() => editCategory(item.category_id)} />
                  <MdDelete onClick={() => deleteCategory(item.category_id)} />
                </span>
              </td>
                :<td><span>Edit product to add category</span></td>
                }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
