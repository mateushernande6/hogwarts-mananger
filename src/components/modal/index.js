import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { CloseModalThunk } from "../../store/module/openModal/thunks";
import {
  ImageModal,
  InfoModal,
  HouseLogo,
  DivModal,
  InputModal,
  DivButton,
  DivNote,
  PaperModal,
} from "./style";
import { useEffect, useState } from "react";
import { AddHouseNotesThunk } from "../../store/module/houseNotes/thunks";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: "flex",
//     position: "absolute",
//     width: "776px",
//     height: "488px",
//     backgroundColor: "#E5EDF2",
//     border: "none",
//     outline: "none",
//     boxShadow: theme.shadows[5],
//   },
// }));

export default function SimpleModal() {
  // const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const open = useSelector((state) => state.openModal.openModal);
  const person = useSelector((state) => state.openModal.student.studentHere);
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const [send, setSend] = useState();
  const [gainOrLose, setGainOrLose] = useState("");

  const handleClose = () => {
    console.log("close");
    dispatch(CloseModalThunk());
  };

  let houseLogo = "";

  if (person?.house === "Gryffindor") {
    houseLogo =
      "https://sites.google.com/site/beatrizpereirahistorias/_/rsrc/1382539370934/hogwards/salao-comunal/preciso-ser-uma-super-heroina/gryf_rave_colour_copy.png?height=393&width=400";
  } else if (person?.house === "Hufflepuff") {
    houseLogo =
      "https://www.pngkit.com/png/full/241-2415355_aeo8gde-harry-potter-lockscreens-hufflepuff.png";
  } else if (person?.house === "Slytherin") {
    houseLogo =
      "http://2.bp.blogspot.com/-Qxx6yYUPGb4/TzaZUYBMzjI/AAAAAAAAAEE/iH6_jEXTob8/s400/7836281.png";
  } else {
    houseLogo =
      "https://www.rpnation.com/data/xfmg/thumbnail/19/19446-277824760feed4a4ec42ff1c06345dba.jpg?1516415144";
  }
  // console.log(houseLogo);

  const handleSub = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  useEffect(() => {
    setSend(false);
  }, [open]);

  const handleSend = (gainOrLose) => {
    setSend(true);
    setGainOrLose(gainOrLose);
    dispatch(AddHouseNotesThunk(note, person?.house));
  };

  const body = (
    <PaperModal style={modalStyle}>
      <ImageModal src={person?.image} />
      <InfoModal>
        <DivModal>
          <HouseLogo src={houseLogo} />
          <p>{person?.house}</p>
        </DivModal>
        <h2 id="simple-modal-title">{person?.name}</h2>

        {send ? (
          <>
            {gainOrLose === "gain" ? (
              <DivNote gainOrLose={gainOrLose}>+{note}</DivNote>
            ) : (
              <DivNote gainOrLose={gainOrLose}>-{note}</DivNote>
            )}
          </>
        ) : (
          <form onSubmit={handleSub}>
            <InputModal onChange={handleChange} type="number" />
            <DivButton>
              <button onClick={() => handleSend("gain")} className="gain">
                Gain
              </button>
              <button onClick={() => handleSend("lose")} className="lose">
                Lose
              </button>
            </DivButton>
          </form>
        )}
      </InfoModal>
    </PaperModal>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
