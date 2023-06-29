import { useState } from "react";
import "./style.css";
import * as React from "react";

export const DropdownBottom = ({ faq, answer }) => {
  const [question, setQuestion] = useState(false);
  const [chevron, setChevron] = useState("fa fa-chevron-down");

  const buttonClickHandler = () => {
    setChevron((prev) =>
      prev === "fa fa-chevron-down" ? "fa fa-chevron-up" : "fa fa-chevron-down"
    );
    setQuestion((prev) => !prev);
  };
  console.log(question);
  return (
    <div className="btn-group">
      <div className="dropdown">
        <button
          onClick={buttonClickHandler}
          className="dropdown-question"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {faq}{" "}
          <i
            style={{ float: "right", paddingRight: 10 }}
            className={chevron}
            aria-hidden="true"
          ></i>
        </button>
        {question && (
          <div>
            <p className="dropdown-answer">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};
const Dropdown = ({ faq, answer }) => {
  const [question, setQuestion] = useState(false);
  const [chevron, setChevron] = useState("fa fa-chevron-down");

  const buttonClickHandler = () => {
    setChevron((prev) =>
      prev === "fa fa-chevron-down" ? "fa fa-chevron-up" : "fa fa-chevron-down"
    );
    setQuestion((prev) => !prev);
  };
  console.log(question);
  return (
    <div className="btn-group">
      <div className="dropdown">
        <button
          onClick={buttonClickHandler}
          className="dropdown-question"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="text-border-question">
            {faq}{" "}
            <i
              style={{ float: "right", paddingRight: 10 }}
              className={chevron}
              aria-hidden="true"
            ></i>
          </span>
        </button>
        {question && (
          <div>
            <p className="dropdown-answer">{answer}</p>
          </div>
        )}
        <hr
          style={{
            color: "black",
            height: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Dropdown;
