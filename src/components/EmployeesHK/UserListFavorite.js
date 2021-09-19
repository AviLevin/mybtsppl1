import React, { useState } from "react";
import _ from "lodash";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
import classes from "./EmployeesHK.module.css";
import Employee from "./Employee/Employee";

const UserListFavorite = ({}) => {
  const { isLoading, onUserFavoriteToggle, favorites } = usePeopleFetch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col"></div>

        <div className="col-11 ">
        {favorites.map((user, index) => {
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
};

export default UserListFavorite;
