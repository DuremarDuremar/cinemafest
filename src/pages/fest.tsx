import React, { FC, useState } from "react";

import FestHeader from "../components/fest_header";
import FestMain from "../components/fest_main";

const Fest: FC = () => {
  const [choiceFest, setChoiceFest] = useState("Cannes");

  return (
    <div>
      <FestHeader choiceFest={choiceFest} setChoiceFest={setChoiceFest} />
      <FestMain choiceFest={choiceFest} />
    </div>
  );
};

export default Fest;
