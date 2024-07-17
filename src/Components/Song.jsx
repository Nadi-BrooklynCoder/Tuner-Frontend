import { Link } from "react-router-dom";

const Song = ({ song, id }) => {
    return (
        <div>
            <h2>
                <Link to={`/songs/${id}`}>{song.name}</Link>
            </h2>
        </div>
    )
}

export default Song