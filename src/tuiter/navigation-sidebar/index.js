import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more","login","register","profile"];
    const {currentUser} = useSelector((state) => state.user);
    return (
        <div className="list-group">
            {links.map((link, index) =>
                <Link key={index} to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    {link}
                </Link>
            )}
            { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
        </div>
    );
};
export default NavigationSidebar;