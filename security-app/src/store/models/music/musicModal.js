export const musicList = {
    state: {
        tracksList: [],
    },
    reducers: {
        addTrack(state, track) {
            return {
                ...state,
                trackList: tracksList.push(track),
            };
        },
    },
    effects: () => ({
        fetchTracks() {
            try {
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
    }),
};
