import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, required, NumberInput } from 'react-admin';

const PostEdit = (props) => (
    <Edit {...props} title="Edit Data Honda">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" validate={[required()]} fullWidth/>
            <NumberInput source="price" />
            <TextInput source="description" validate={[required()]} fullWidth/>
            <TextInput source="category" />
            <TextInput source="image" />
            <DateInput source="date_create"/>
        </SimpleForm>
    </Edit>
);

export default PostEdit;
