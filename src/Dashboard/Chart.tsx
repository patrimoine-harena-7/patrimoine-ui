import { ListBase, WithListContext } from 'react-admin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../Dashboard/Dashboard.module.css';

const Chart = () => (
    <ListBase  resource="patrimoine" disableSyncWithLocation perPage={100}>
        <WithListContext 
            render={({ data }) => (
                <LineChart className={styles.chartDesign} width={600} height={400} data={data}>
                    <XAxis dataKey="t" />
                    <YAxis />
                    <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="valeur_comptable" type="monotone" stroke="#8884d8" />
                </LineChart>
            )}
        />
    </ListBase>
);

export default Chart;
