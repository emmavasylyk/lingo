import {
  Datagrid,
  Filter,
  List,
  NumberField,
  Pagination,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

const LessonFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by title" source="title" alwaysOn />
  </Filter>
);

const LessonPagination = (props: any) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);
export const LessonList = () => {
  return (
    <List filters={<LessonFilter />} pagination={<LessonPagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
