import { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // do this
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < 100) {
          // do this
          handleShow(false);
        } else handleShow(true);
      });
    };
  });
  // }, []);
  return (
    <div className={`nav ${show && "nav__balck"}`}>
      <img
        className="nav__logo"
        src="https://www.themoviedb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
