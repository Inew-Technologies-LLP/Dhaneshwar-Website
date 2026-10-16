import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        // If navigating to /projects with a specific project id, allow Projects.jsx to handle scrolling to that element
        if (pathname === "/projects" && params.get("project")) {
            return;
        }

        window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
};

export default ScrollToTop;
