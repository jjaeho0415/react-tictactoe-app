import React from "react";
import "./ExpenseForm.css";

const ExpneseForm = ({
  charge,
  handleCharge,
  amount,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">상품</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="예) 콜라"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">비용</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="예) 100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          제출
        </button>
      </form>
    </div>
  );
};
export default ExpneseForm;