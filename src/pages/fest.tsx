import React, { FC, useState } from "react";

import FestHeader from "../components/fest_header";

const Fest: FC = () => {
  const [choiceFest, setChoiceFest] = useState("Cannes");

  return (
    <div>
      <FestHeader choiceFest={choiceFest} setChoiceFest={setChoiceFest} />
    </div>
  );
};

export default Fest;
