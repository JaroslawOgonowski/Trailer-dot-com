import { createSlice } from "@reduxjs/toolkit";

const muteSwitchSlice = createSlice({
    name: "muteSwitch",
    initialState: {
        soundOn: true,
        src: "https://www.youtube.com/embed/Di310WS8zLk?controls=0",
    },
    reducers: {
        toggleMode: state => {
            state.soundOn = !state.soundOn;
        },
        soundOffSrc: state => {
          state.src = "https://www.youtube.com/embed/Di310WS8zLk?controls=0&mute=1";
        },
        soundOnSrc: state => {
          state.src = "https://www.youtube.com/embed/Di310WS8zLk?controls=0";
        },
    },
});

export const { toggleMode } = muteSwitchSlice.actions;

export const selectModeState = state => state.muteSwitch;
export const selectMode = state => selectModeState(state).soundOn;
export const selectSrc = state => selectModeState(state).src;

export default muteSwitchSlice.reducer;