import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const SongEditForm = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        duration: "",
        is_favorite: false,
    });

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const updateSong = () => {
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(navigate(`/songs/${id}`))
            .catch(err => console.log(err))
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            updateSong();
        };
        
        useEffect(() => {
            fetch(`${API}/songs/${id}`)
                .then(res => res.json())
                .then(res => setSong(res))
                .catch(err => console.log(err))
        }, [])

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title: </label>
                <input 
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Song Name"
                    required
                />
                <br />
                <br />
                <label htmlFor="artist">Artist: </label>
                <input 
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist"
                    required 
                />
                <br />
                <br />
                <label htmlFor="album">Album :</label>
                <input 
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album"
                />
                <br />
                <br />
                <label htmlFor="is_favorite">Favorite: </label>
                <input 
                    id="is_favorite"
                    value={song.is_favorite}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                />
                <br />
                <br />
                <label htmlFor="time">Duration: </label>
                <input 
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Duration"
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
    </div>
    )
}

export default SongEditForm;