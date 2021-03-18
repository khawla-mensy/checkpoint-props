import React from "react";
import PropTypes from "prop-types";
function ProfileComponent(props) {
    console.log(props);
    return (
        <div style={{ bbackgroundColor: "lightblue" }}>
            <h2 style={{ color: "red" }}>THIS IS MY PROFILE</h2>

            <h4>{props.fullname}</h4>
            <h4>{props.bio}</h4>
            <h4>{props.profession}</h4>
            {props.children}
            <button
                onClick={() => props.handleName(props.fullname)}
                className="button"
            >
                Click
            </button>
        </div>
    );
}

ProfileComponent.defaultProps = {
    fullname: "default fullname",
    bio: "nothing",
};
ProfileComponent.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};
export default ProfileComponent;
