// Action creator
//Named export
export const selectSong = (song) => {
    // return an action
    // It is required to have a type
    // It is optional to have a payload
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

