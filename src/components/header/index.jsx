import React from "react";
import PropTypes from "prop-types";

HeaderComponent.propTypes = {
  avatarImage: PropTypes.string,
  fullName: PropTypes.string.isRequired,
};

HeaderComponent.defaultProps = {
  avatarImage:
    "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png",
};

function HeaderComponent(props) {
  const { avatarImage, fullName } = props;
  return (
    <header>
      <div className="header__container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="avatar__user w-[55px] h-[55px]">
            <img
              src="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="menu text-2xl">
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="notification text-3xl relative">
          <i className="fa-regular fa-bell"></i>
          <div className="notification_count absolute top-[-0px] right-[-5px] w-[20px] h-[20px] rounded-full bg-[#b9e629] animate-ping"></div>
          <div className="notification_count absolute top-[-0px] right-[-5px] w-[20px] h-[20px] rounded-full bg-[#b9e629]"></div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
``;
