import React from "react";
import { useContext } from "react";

import AppContext from "../AppContext";

const Footer = () => {
  const { initiatives } = useContext(AppContext);

  return (
    <>
      {initiatives?.length > 0 ? (
        <div className="Footer">
          <h4>
            If you like what you see here, please head over to <br />
            <a href="https://calum.cool" target="_blank">
              My Online CV website and let me know!
            </a>
          </h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
