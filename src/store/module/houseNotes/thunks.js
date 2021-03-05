import { addNote, subNote } from "./action";

export const AddHouseNotesThunk = (note, houseName) => (dispatch, getState) => {
  const { notes } = getState();
  const house = notes.find((house) => house.name === houseName);
  house.note = house.note + Number(note);
  const sortedNotes = notes.sort((a, b) => {
    if (a.note > b.note) {
      return -1;
    }
    if (a.note < b.note) {
      return 1;
    }

    return 0;
  });
  console.log("sorted", sortedNotes);
  localStorage.setItem("notes", JSON.stringify(sortedNotes));
  dispatch(addNote(sortedNotes));
};

export const SubHouseNotesThunk = (note, houseName) => (dispatch, getState) => {
  const { notes } = getState();
  const house = notes.find((house) => house.name === houseName);
  house.note = house.note + Number(note);
  dispatch(addNote(notes));
};
