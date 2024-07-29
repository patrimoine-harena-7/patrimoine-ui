import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const PatrimoineEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nom" />
            <TextInput source="possesseur.nom" />
            <DateInput source="t" />
            <NumberInput source="valeur_comptable" />
        </SimpleForm>
    </Edit>
);