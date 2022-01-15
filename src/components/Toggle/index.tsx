import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

export const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={checked}
        onChange={() => setChecked(!checked)}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};
