import React from 'react';
import FaveButton from './FaveButton';

const TrackList = ({ tracks, playlist, handleLike }) => {
    return ( 
        <div className="track-list">
            <h2>{playlist}</h2>
            {tracks.map((track) => (
                <div className="track-details" key={track.id}>
                    <h2>{ track.artist }</h2>
                    <h3>{ track.name }</h3>
                    <h3>{ track.year }</h3>
                    <h3>{ (track.liked ? "Likes: 1" : "Likes: 0")}</h3>
                    {/* <h3>{ track.liked }</h3> */}
                    {/* <button onClick={() => handleLike(track.id)}>Like</button> */}
                    <FaveButton id={track.id} handleLike={handleLike}/>
                </div>
            ))}
        </div>
     );
}
 
export default TrackList;
