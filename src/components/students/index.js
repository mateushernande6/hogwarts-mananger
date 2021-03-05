import { useState, useEffect } from "react";
import axios from "axios";
import { Container, ContLine, DivLine } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { OpenModalThunk } from "../../store/module/openModal/thunks";

const Students = () => {
  const [studentList, setStudentList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters/students")
      .then((res) => setStudentList(res.data));
  }, []);

  const handleOpen = (item) => {
    dispatch(OpenModalThunk(item));
  };

  return (
    <>
      <Container>
        <DivLine>Alunos</DivLine>
        <ContLine>
          <>
            <div className="divWidth subTitle">
              <strong>
                <p>Nome</p>
              </strong>
            </div>
            <div className="divWidth subTitle">
              <strong>
                <p>Casa</p>
              </strong>
            </div>
            <div></div>
          </>
        </ContLine>
        {studentList.map((item, index) => (
          <ContLine key={index}>
            <div className="divWidth nameStudent">
              <p>{item.name}</p>
            </div>
            <div className="divWidth houseName">
              <p>{item.house}</p>
            </div>
            <button onClick={() => handleOpen(item)}>
              <FontAwesomeIcon className="write" icon={faFeather} />
            </button>
          </ContLine>
        ))}
      </Container>
    </>
  );
};
export default Students;
