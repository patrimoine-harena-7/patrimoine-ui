import { DateInput, Create, NumberInput, SimpleForm, TextInput } from 'react-admin';
import styles from '../components/Patrimoine.module.css'

export const PatrimoineCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nom" />
            <TextInput source="possesseur.nom" />
            <DateInput source="t" />
            <NumberInput source="valeur_comptable" />
        </SimpleForm>
    </Create>
);