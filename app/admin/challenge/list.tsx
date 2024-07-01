import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  SelectField,
  Filter,
  TextInput,
  Pagination,
} from "react-admin";

const ChallengeFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Поиск по тексту" source="question" alwaysOn />
  </Filter>
);

const ChallengePagination = (props: any) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

export const ChallengeList = () => {
  return (
    <List filters={<ChallengeFilter />} pagination={<ChallengePagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="question" />
        <SelectField
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
        />
        <ReferenceField source="lessonId" reference="lessons" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
