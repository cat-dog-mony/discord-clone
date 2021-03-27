import React from "react";
import { IconContext } from "react-icons";
import { BiSmile } from "react-icons/bi";
import "./InputWrapper.css"

const InputWrapper = () => {
  return (
    <div className="input-wrapper">
      <div className="input-box">
        <div className="inner-input">
          <div className="text-area">
            <input className="chat-input" placeholder="Message #general"/>
          </div>
          <div className="emoji-area">
            <IconContext.Provider
              value={{ className: 'smile-emoji' }}
            >
              <BiSmile />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
};

export default InputWrapper;

