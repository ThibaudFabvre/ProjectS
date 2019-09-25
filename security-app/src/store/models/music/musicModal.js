export const musicList = {
    state: {
        tracksList: [],
    },
    reducers: {
        setTracks(state, data) {
            return {
                ...state,
                data,
            };
        },
        addTrack(state, track) {
            return {
                ...state,
                trackList: tracksList.push(track),
            };
        },
        removeTrack(state, track) {
            state.tracksList.splice(track, 1);
            return {
                ...state,
            };
        },
    },
    effects: () => ({
        async getTracks() {
            try {
                const data = await getTracks();
                this.setTracks(data);
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
    }),
};
