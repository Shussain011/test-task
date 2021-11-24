import React from "react";

const Table = ({ amount }) => {
  let reaminingValue = 100.9999999 - amount;
  let drawnValue = 100.9999999;
  if (amount == 200) {
    drawnValue = 100.9999999;
  } else {
    drawnValue = 100.9999999 - reaminingValue;
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col" className="heading">
            Address
          </th>
          <th scope="col" className="heading">
            Drawn
          </th>
          <th scope="col" className="heading">
            Remaining
          </th>
          <th scope="col" className="heading">
            Spendable Balance
          </th>
          <th scope="col" className="heading">
            Balance
          </th>
          <th scope="col" className="heading">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="row">
              <div className="col-3 ">
                <div className="icon-back">
                  <img
                    src="/assets/img/museum.png"
                    alt="address-icon"
                    width="17px"
                    height="17px"
                  />
                </div>
              </div>
              <div className="col-9 py-1">
                <span className="address-field">
                  boa1456fjknd12345345908nnn1324234
                </span>
              </div>
            </div>
          </td>
          <td className="table-item">{drawnValue}</td>
          <td
            className="table-item"
            style={{ color: reaminingValue < 0 ? "red" : "black" }}
          >
            {reaminingValue.toFixed(9)} BOA
          </td>
          <td className="table-item">100.9999999 BOA</td>
          <td className="table-item">100.9999999 BOA</td>
          <td className="py-3 px-4">
            <img
              src="/assets/img/garbage.png"
              alt="trash icon"
              width="20px"
              height="20px"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
