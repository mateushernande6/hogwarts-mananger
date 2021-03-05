import { Card, CardContainer } from "./style";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const BestCard = () => {
  const { notes } = useSelector((state) => state);
  const [houseNotes, setHouseNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    setHouseNotes(JSON.parse(localStorage.getItem("notes")) || notes);
  }, [notes[0].note, notes[1].note, notes[2].note, notes[3].note]);
  console.log("notesCard", notes);
  console.log("houseNotes", houseNotes);
  return (
    <CardContainer>
      {houseNotes.map((item, index) => (
        <Card key={index}>
          <div className="divH3">
            <div>#{index + 1}</div>
            <h3>{item.name}</h3>
          </div>
          <div className="divImage">
            <img src={item.image} alt="imagem" />
          </div>
          <h2>{item.note}</h2>
        </Card>
      ))}
    </CardContainer>
  );
};
export default BestCard;
