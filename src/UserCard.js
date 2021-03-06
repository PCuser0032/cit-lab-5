import React from "react";
import UserAvatar from "./UserAvatar";

const UserCard = (props) => {
  return (
    <div className="people">
      <div className="card mt-4 fs-5">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">{props.user.gender}</div>
            <div className="col">
              {props.user.name.first} {props.user.name.last}
            </div>
            <div className="col">{props.user.location.city}</div>
            <div className="col">{props.user.dob.age}</div>
            <div className="col">{props.user.phone}</div>
            <div className="col-auto">
              <UserAvatar
                src={props.user.picture.large}
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
