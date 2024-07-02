import {
  Datagrid,
  Filter,
  List,
  Pagination,
  TextField,
  TextInput,
} from "react-admin";

const CourseFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by title" source="title" alwaysOn />
  </Filter>
);

const CoursePagination = (props: any) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);
export const CourseList = () => {
  return (
    <List filters={<CourseFilter />} pagination={<CoursePagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="imageSrc" />
      </Datagrid>
    </List>
  );
};
