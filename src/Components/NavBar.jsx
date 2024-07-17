import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/songs">Songs</Link>
            </h1>
            <button>
                <Link to="/songs/new">Add new Song</Link>
            </button>
        </nav>
    );
};

export default NavBar;