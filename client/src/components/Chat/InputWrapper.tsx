import React from "react";
import { IconContext } from "react-icons";
import { BiSmile } from "react-icons/bi";

const InputWrapper = () => {
  return (
    <div className="inputWrapper">
      <div className="inputBox">
        <div className="innerInput">
          <div className="textArea">
            <input className="chatInput" placeholder="Message #general"/>
          </div>
          <div className="imojiArea">
            <IconContext.Provider
              value={{ className: 'smileEmoji' }}
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

