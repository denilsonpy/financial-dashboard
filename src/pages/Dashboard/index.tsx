import React from "react";

import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Denilson",
      label: "denilson",
    },
    {
      value: "Ryan",
      label: "denilson",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export { Dashboard };
