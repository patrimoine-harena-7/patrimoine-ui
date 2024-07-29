import { Datagrid, EditButton, EmailField, List, TextField } from 'react-admin';
import styles from '../components/User.module.css';

export const UserList = () => (
    <List className={styles.userListSimple}>
            <h2 className={styles.color}>Voici votre Profil</h2>
        <Datagrid className={styles.userList}>
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="phone" />
            <EditButton  />
        </Datagrid>
    </List>
);