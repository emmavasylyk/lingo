import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  BooleanField,
  Filter,
  TextInput,
  Pagination,
} from "react-admin";

const ChallengeOptionFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by text" source="text" alwaysOn />
  </Filter>
);

const ChallengeOptionPagination = (props: any) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

export const ChallengeOptionList = () => {
  return (
    <List
      filters={<ChallengeOptionFilter />}
      pagination={<ChallengeOptionPagination />}
    >
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />

        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
};
