import React, { FC, useState } from "react";
import { useErrorBoundary } from "use-error-boundary";

import FestHeader from "../components/fest_header";
import FestMain from "../components/fest_main";

const Fest: FC = () => {
  const [choiceFest, setChoiceFest] = useState("Cannes");
  const { ErrorBoundary } = useErrorBoundary();
  return (
    <div>
      <ErrorBoundary
        render={() => (
          <FestHeader choiceFest={choiceFest} setChoiceFest={setChoiceFest} />
        )}
        renderError={({ error }) => (
          <p>An error has been caught: {error.message}</p>
        )}
      />
      <ErrorBoundary
        render={() => <FestMain choiceFest={choiceFest} />}
        renderError={({ error }) => (
          <p>An error has been caught: {error.message}</p>
        )}
      />
    </div>
  );
};

export default Fest;

// const JustRenderMe = () => {
//   throw new Error("💥");
// };

// if (choiceFest === "Venice") {
//   JustRenderMe();
// }
