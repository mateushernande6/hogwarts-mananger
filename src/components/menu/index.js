import { Header } from "./style";
import BestCard from "../card";
import Students from "../students";
import SimpleModal from "../modal";
import { useState } from "react";
const Menu = () => {
  // const [teste, setTeste] = useState(false);

  return (
    <>
      <Header>
        <div className="center-header">
          <img src=" https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png" />
          <h2>Hogwarts Score Manager</h2>
        </div>
      </Header>
      <BestCard />
      <Students />
      <SimpleModal />
    </>
  );
};
export default Menu;
