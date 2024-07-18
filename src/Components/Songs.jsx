import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_API_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
            .then(res => res.json())
            .then (res => setSongs(res))
            .catch(err => console.log(err))
    },[]);

    return (
        <div className="songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Favorite?</th>
                            <th>Song Title</th>
                            <th>Artist</th>
                            <th>Song Time</th>
                        </tr>
                    </thead>
               <tbody>
                {songs.map((song) => {
                    return <Song key={song.id} song={song} id={song.id} />
                })}
            </tbody>
        </table>
      </section>
    </div>
  )
}

export default Songs;