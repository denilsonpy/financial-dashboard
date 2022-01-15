import React, { useMemo } from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters } from "./styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type } = match.params;

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saidas";
  }, [type]);

  const months = [
    { value: 7, label: "Agosto" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const years = [
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
    { value: 2018, label: "2018" },
  ];

  return (
    <Container>
      <ContentHeader title={title} lineColor="#e44c43">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button className="tag-filter tag-filter-recurrent">Recorrentes</button>
        <button className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#e44c43"
          title="Setup"
          subtitle="17/11/2003"
          amount="R$ 210"
        />
      </Content>
    </Container>
  );
};

export { List };
