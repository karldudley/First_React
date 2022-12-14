import React, { useState } from 'react';
import TrackList from './TrackList';

const Home = () => {
    const [tracks, setTracks] = useState([
        {artist: "Daughters", name: "The reason they hate me", year: 2018, liked: false, id: 1},
        {artist: "Death Grips", name: "I've seen the footage", year: 2012, liked: false, id: 2},
        {artist: "Nirvana", name: "Aneurysm", year: 1992, liked: false, id: 3},
        {artist: "Le Tigre", name: "Deceptacon", year: 1999, liked: false, id: 4}
    ]);

    const handleLike = (id) => {
        const newTracks = [...tracks];
        for (let i=0; i<newTracks.length; i++){
            if (newTracks[i].id == id){
                (newTracks[i].liked ? newTracks[i].liked=false : newTracks[i].liked=true)
            }
        }
        setTracks(tracks => tracks = [...newTracks]);
    }

    return ( 
        <div className="track-list">
            <TrackList tracks={tracks} playlist="Friday Night Bangers" handleLike={handleLike} />
            {/* <TrackList tracks={tracks.filter((track) => track.year >= 2000)} playlist="Modern Friday Night Bangers"/> */}
        </div>
    );
}
        
 
export default Home;
