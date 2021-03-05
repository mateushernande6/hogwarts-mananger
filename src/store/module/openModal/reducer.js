const OpenModalReducer = (
  state = { student: { name: "", image: "", house: "" }, openModal: false },
  action
) => {
  switch (action.type) {
    case "@openModal/OPEN":
      return action.resp;
    case "@openModal/CLOSE":
      return action.resp;

    default:
      return state;
  }
};
export default OpenModalReducer;
