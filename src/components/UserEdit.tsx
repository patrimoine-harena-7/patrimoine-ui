import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);