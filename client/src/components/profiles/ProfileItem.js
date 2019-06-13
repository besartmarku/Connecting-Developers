import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    githubusername
  }
}) => {
  const [avatarUrl, setAvatarUrl] = useState();

  useEffect(() => {
    async function fetchAvatar() {
      const result = await axios(
        `https://avatars.githubusercontent.com/${githubusername}`
      );
      setAvatarUrl(result.config.url);
    }
    fetchAvatar();
  }, [avatarUrl]); // Or [] if effect doesn't need props or state

  return (
    <div className="profile bg-light">
      <img src={avatarUrl} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
