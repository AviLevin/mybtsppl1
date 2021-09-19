import React, { useState, useEffect } from "react";
import classes from "./EmployeesHK.module.css";
import CheckBox from "../CheckBox/CheckBox";

import Employee from "./Employee/Employee";

function EmployeesHK() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const nation = [
    { value: "BR", label: "Brazil" },
    { value: "AU", label: "Australia" },
    { value: "CA", label: "Canada" },
    { value: "CH", label: "Switzerland" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
    { value: "DK", label: "Denmark" },
    { value: "DK", label: "Denmark" },
    { value: "DK", label: "Denmark" },
    { value: "DK", label: "Denmark" },
    { value: "DK", label: "Denmark" },
  ];

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(nation);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={classes.container}>
        <p>hooks</p>

        <div className={classes.check}>
          <div className="row">
            <div className={classes.checklist}>
              {nation.map((na, index) => (
                <CheckBox
                  key={index}
                  value={na.value}
                  label={na.label}
                  // onChange={onToggleSelectNat}
                />
              ))}
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>

          <div className="col-11 ">
            {items.map((user) => (
              <Employee
                id={user.id}
                name={user.name}
                email={user.email}
                gender={user.gender}
                car={user.car}
                pic_url={user.pic_url}
              />
            ))}
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default EmployeesHK;
