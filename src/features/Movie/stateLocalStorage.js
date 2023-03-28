const localStorageKey = "state";

export const saveStateInLocalStorage = (state) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

export const getStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey));