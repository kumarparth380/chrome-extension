import React from "react";
import Form from "../../containers/form";

const Popup = () => {
  return (
    <div className="flex flex-col text-white bg-gray-900 overflow-hidden min-w-[360px] min-h-screen items-center">
      <div className="flex flex-row p-5 text-center">
        <h3 className="flex flex-row gap-4 text-xl leading-6 font-medium text-purple-300">
          <img src="logo.png" className="h-10 my-auto" alt="logo" />
          <div className="font-light text-xl my-auto">Chrome extension</div>
        </h3>
      </div>
      <div className="flex grow">
        <Form />
      </div>
    </div>
  );
};

export default Popup;
