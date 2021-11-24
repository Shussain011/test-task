import React, { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [amount, setAmount] = useState(0);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  console.log(amount, "amountttt");
  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5 mb-3">
          <div className="col-12 text-center">
            <h1>Blockchain Wallet</h1>
          </div>
        </div>
        <div className="row main-container p-2">
          <div className="col-12 content p-5">
            <h5>
              <b>Reciever</b>
            </h5>
            <div className="row d-flex mt-4">
              <div className="col-4">
                <label className="form-label label">Address</label>
                <select className="form-control">
                  <option>boa1456fjknd12345345908nnn1324234</option>
                </select>
              </div>
              <div className="col-3 offset-2">
                <label className="form-label label label-input">Amount</label>
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control input"
                    aria-label="Amount (to the nearest dollar)"
                    defaultValue="100.9999999"
                    onChange={handleAmount}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white input">BOA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 content mt-2 p-5">
            <h5>
              <b>Fee</b>
            </h5>
            <div className="row d-flex mt-4">
              <div className="col-4">
                <label className="form-label label">Option</label>
                <select className="form-control">
                  <option>Medium</option>
                  <option>Low</option>
                  <option>High</option>
                </select>
              </div>
              <div className="col-3 offset-2">
                <label className="form-label label label-input">Fee</label>
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control input"
                    aria-label="Amount (to the nearest dollar)"
                    defaultValue="2.52000000"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white input">BOA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 content mt-2 p-5">
            <h5>
              <b>Sender</b>
            </h5>
            <div className="row d-flex justify-content-end py-2">
              <button className="btn-add">Add Sender</button>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <Table amount={amount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
