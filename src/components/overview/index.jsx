import React, { useState } from "react";
import PropTypes from "prop-types";

OverviewComponent.propTypes = {
  fullName: PropTypes.string,
};

OverviewComponent.defaultProps = {
  fullName: "No Name",
};

function OverviewComponent(props) {
  const { fullName } = props;
  let totalTodoDay = 8;
  const [totalCompleted, setTotalCompleted] = useState(0);
  return (
    <section className="overview mt-[30px] mb-[20px]">
      <h2 className="message__welcome uppercase text-2xl font-bold text-left text-[#a7aeb1]">
        xin chào, {fullName}
      </h2>
      <div className="overview__content p-[15px] bg-[#3f4f57] rounded-[20px] my-[10px] flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="overview__content-date text-4xl uppercase font-medium text-white">
            may 08
          </div>
          <div className="icon_more w-[35px] h-[35px] text-center leading-[30px] rotate-45 text-white rounded-full border-2 border-white">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="total__todo-day text-[#bbc0c3] font-medium text-xl">
                {totalTodoDay} To-Dos
            </div>
            <div className="total__todo-completed text-xl font-medium text-[#91bb1f]">
                {totalCompleted} Done
            </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewComponent;
