import { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import {useAuth} from '../../features/auth/hooks/useAuth'
import { useNavigate } from "react-router";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { user, loading, handleLogout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (
        <header className="navbar">

            <div className="navbar__logo" onClick={() => navigate("/")}>
                ResumeIQ
            </div>

            <div className="navbar__profile" ref={dropdownRef}>

                <button 
                className="navbar__profile-btn"
                onClick={() => setIsOpen(!isOpen)}>

                    <div className="navbar__avatar">
                        {user?.username?.charAt(0).toUpperCase()}
                    </div>

                    <span className="navbar__username">
                        {user?.username}
                    </span>

                    <span className={`navbar__arrow ${ isOpen ? "navbar__arrow--open" : ""}`}>
                        ▼
                    </span>

                </button>

                {isOpen && (
                    <div className="navbar__dropdown">

                        <div className="navbar__dropdown-user">
                            <strong>{user?.username}</strong>
                            <span>{user?.email}</span>
                        </div>

                        <hr />

                        <button className="navbar__logout" 
                        onClick={async () => {
                            setIsOpen(false);
                            await handleLogout();
                        }} >
                           {loading ? "Logging out..." : "Logout"}
                        </button>

                    </div>
            )}

            </div>

        </header>
    );
};

export default Navbar;