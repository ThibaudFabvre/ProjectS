export const musicModal = {
    state: {
        tracksList: [],
        activeTrack: 0,
        volume: null,
        isPlaying: false,
    },
    reducers: {
        addTrack(state, track) {
            return {
                ...state,
                tracksList: state.tracksList.concat({ name: track.name, path: track.filePath }),
            };
        },
        setActiveTrack(state, number) {
            const newValue = number--;
            return {
                ...state,
                activeTrack: newValue,
            };
        },
        removeTrack(state, track) {
            state.tracksList.splice(track, 1);
            return {
                ...state,
            };
        },
        setVolume(state, input) {
            return {
                ...state,
                volume: input,
            };
        },
        setTracks(state, data) {
            return {
                ...state,
                tracksList: data,
            };
        },
        setIsPlaying(state, boolean) {
            return {
                ...state,
                isPlaying: boolean,
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
