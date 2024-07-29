import * as React from 'react';
import { useEffect, useState } from 'react';
import { CardContentInner,  useDataProvider } from 'react-admin';
import styles from '../components/User.module.css';
import { UserList } from './UserList';

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: string,
    phone: string
};


const UserSimpleList: React.FC = () => {
    const dataProvider = useDataProvider();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        dataProvider.getList<User>('users', {
            pagination: { page: 1, perPage: 10 }
        })
            .then(({ data }) => {
                setUsers(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [dataProvider]);

    return (
        <CardContentInner className={styles.flexContainer}>
            {users.map(user => (
                <div className={styles.userCard}>
                    <h2>Votre Profil</h2>
                    <p className={styles.p}>Nom :  {user.name}</p>
                    <p className={styles.p}>Nom d'Utilisateur : {user.username}</p>
                    <p className={styles.p}>Email : {user.email}</p>
                    <p className={styles.p}>Adresse : {user.address}</p>
                    <p className={styles.p}>Télephone : {user.phone}</p>
                </div>
            ))}
        </CardContentInner>
    );
};

export default UserSimpleList;
