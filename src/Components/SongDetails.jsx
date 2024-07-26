import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const SongDetails = () => {
    const [song, setSong] = useState({ name: ""});
    let navigate = useNavigate();
    let { id } = useParams();
    
    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then(res => res.json())
            .then(res => setSong(res))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = () => {
        fetch(`${API}/songs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(navigate("/songs"))
            .catch(err => console.log(err))
    };

    const handleBack = () => {
        fetch(`${API}/songs`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(navigate("/songs"))
            .catch(err => console.log(err))
    }

    return (
        <article>
            <h3>
                Title: {song.name}
                <br />
                Artist: {song.artist}
                <br />
                Album: {song.album}
                <br />
                Duration: {song.time} mins
                <br />
                Favorite: {song.is_favorite ? "Y" : "N" }
            </h3>
            <div>
                {" "}
                <Link to={`/songs/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
             <div>
                {" "}
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div>
                {" "}
                <button onClick={handleBack}>Back</button>
            </div>
        </article>
    );
};

export default SongDetails;