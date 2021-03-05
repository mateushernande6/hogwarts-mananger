import { OpenModal, CloseModal } from "./action";

export const OpenModalThunk = (studentHere) => (dispatch, getState) => {
  const { openModal } = getState();
  const showStudent = {
    ...openModal,
    student: { studentHere },
    openModal: true,
  };
  dispatch(OpenModal(showStudent));
};

export const CloseModalThunk = () => (dispatch, getState) => {
  const { openModal } = getState();
  const showStudent = {
    ...openModal,

    openModal: false,
  };
  dispatch(CloseModal(showStudent));
};
