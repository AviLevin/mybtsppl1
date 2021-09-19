import React, { useState, useEffect } from "react";
import classes from "./EmployeesHK.module.css";
import CheckBox from "../CheckBox/CheckBox";

import Employee from "./Employee/Employee";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";


  const EmployeesHK = ({}) => {
    const {
      users,
      isLoading,
      setPage,
      page,
      onUserFavoriteToggle,
      isFavorited,
      handleScroll,
      onToggleSelectNat,
    } = usePeopleFetch();
    const [hoveredUserId, setHoveredUserId] = useState();
  
    const nation = [
      { value: "BR", label: "Brazil" },
      { value: "AU", label: "Australia" },
      { value: "CA", label: "Canada" },
      { value: "CH", label: "Switzerland" },
      { value: "DE", label: "Germany" },
      { value: "DK", label: "Denmark" },
     
    ];
  
    const handleMouseEnter = (index) => {
      setHoveredUserId(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredUserId();
    };
 


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
                  onChange={onToggleSelectNat}
                />
              ))}
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>

          <div className="col-11 ">
          {users &&
            users.map((user, index) => {
              return (
              <Employee
              key={index}
                id={user.id}
                name={user.name.first}
                location={user.location.country}
                pic_url={user.picture.medium}
              
              />
              );
              })}
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }


export default EmployeesHK;
