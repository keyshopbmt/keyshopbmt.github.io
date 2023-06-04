import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required,NumberInput } from 'react-admin';

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm >
            <TextInput source="title" validate={[required()]} fullWidth />
            <NumberInput source="price" />
            <TextInput source="description" validate={[required()]} fullWidth />
            <TextInput source="category" validate={[required()]} fullWidth/>
            <TextInput source="image" />
            <DateInput source="date_create" />
        </SimpleForm>
    </Create>
);
