import { Datagrid, DateField, EditButton, List, NumberField, TextField } from 'react-admin';
import styles from '../components/Patrimoine.module.css';
export const PatrimoineList = () => (
    <List className={styles.patrimoineListStyle}>
        <h2 className={styles.color}>Vos Patrimoine(s)</h2>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
            <TextField source="possesseur.nom" />
            <DateField source="t" />
            <NumberField source="valeur_comptable" />
            <EditButton />
        </Datagrid>
    </List>
);