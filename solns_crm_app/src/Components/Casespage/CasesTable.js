import React, { useEffect, useState } from "react";
import "./CaseTable.css";
import { useNavigate } from "react-router-dom";

const CasesTable = ({
  id,
  index,
  num,
  lastname,
  firstname,
  productS,
  itr,
  pan,
  aadhaar,
  residentialproof,
  bankstatement,
}) => {
 

  let productStatus = "";
  let aproveStatus = "";

  if (
    pan !== undefined &&
    itr !== undefined &&
    residentialproof !== undefined &&
    bankstatement !== undefined &&
    aadhaar !== undefined
  ) {
    aproveStatus = "Documents Uploaded";
  } else {
    aproveStatus = "Documents pending";
  }

  if (productS !== undefined) {
    productStatus = `${productS}`;
  } else {
    productStatus = "Not Selected";
  }


  // handling Clicks

  const navigate = useNavigate();
  const handleclickOnCase = (id) => {
    navigate("/onboard", {
      state: {
        _id: id,
      },
    });
  }

  return (
    <tr key={index}>
      <td>{num}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>
        {productStatus}
        <button className="btn btn-submit" onClick={() => {handleclickOnCase(id)}}>select</button>
      </td>
      <td>
        {" "}
        {aproveStatus}
        <button className="btn btn-submit" onClick={() => {handleclickOnCase(id)}}>upload</button>
      </td>
    </tr>
  );
};

export default CasesTable;
