import { Link } from "react-router-dom";

const Song = ({ song, id }) => {
    return (
        <tr>
            <td>
                {song.is_favroite ? (
                    <span>Y</span>
                ) : (
                    <span>N</span>
                )}
            </td>
         <td>
            <Link to={`/songs/${id}`}>{song.name}</Link>
        </td>
        <td>
            <Link to={`/songs/${id}`}>{song.artist}</Link>
        </td>
        <td>
            <Link to={`/songs/${id}`}>{song.time}</Link>
        </td>
    </tr>
    )
}

export default Song