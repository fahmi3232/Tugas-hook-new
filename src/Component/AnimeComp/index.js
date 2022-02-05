import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import OnePieceComp from "./Action/OnePieceComp";
import '../MovieComp/style.css'
// import OnePunchManComp from "./Action/OnePunchManComp";
import BleachComp from "./Action/BleachComp";
import AttackOnTittanComp from "./OverPower/AttackOnTittanComp";
import HaikyuuComp from "./Sports/HaikyuuComp";

const Anime = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="mt-5">
      <h3 className="cont" style={{textAlign: "left"}}>Best Anime</h3>
      <div className="cont mt-3">

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="home" title="Action">
          <OnePieceComp />
          {/* <OnePunchManComp /> */}
          <BleachComp />
        </Tab>
        <Tab eventKey="profile" title="Over Power">
          <AttackOnTittanComp />
        </Tab>
        <Tab eventKey="contact" title="Sports">
          <HaikyuuComp />
        </Tab>
      </Tabs>
        </div>
    </div>
  );
};

export default Anime;
