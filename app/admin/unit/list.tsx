import {
  Datagrid,
  Filter,
  List,
  Pagination,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const UnitFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Поиск по title" source="title" alwaysOn />
  </Filter>
);

const UnitPagination = (props: any) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

export const UnitList = () => {
  return (
    <List filters={<UnitFilter />} pagination={<UnitPagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField source="courseId" reference="courses" />
        <TextField source="order" />
      </Datagrid>
    </List>
  );
};
