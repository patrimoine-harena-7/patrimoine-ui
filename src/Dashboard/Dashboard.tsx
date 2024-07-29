import { Resource, ShowGuesser,} from 'react-admin';
import  Chart  from './Chart';
import { Card, CardContent, CardHeader } from '@mui/material';
import styles from '../Dashboard/Dashboard.module.css';
import UserSimpleList from '../components/UserSimpleList';

const Dashboard = () => (
    <Card>
        <CardHeader title="Dashboard" />
        <CardContent>
            <CardContent className={styles.flexContainer}>
                <Chart/>
                <Resource name="users" list={UserSimpleList}/>
                
            </CardContent>
        </CardContent>
    </Card>
);

export default Dashboard;
