import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard/Dashboard";
import { PatrimoineList } from "./components/PatrimoineList";
import { PatrimoineEdit } from "./components/PatrimoineEdit";
import { PatrimoineCreate } from "./components/PatrimoineCreate";
import { UserList } from "./components/UserList";
import { UserEdit } from "./components/UserEdit";

const DataProvider = jsonServerProvider("http://localhost:3000");

export const App = () => (
  <Admin dataProvider={DataProvider} dashboard={Dashboard}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="patrimoine" list={PatrimoineList} edit={PatrimoineEdit} create={PatrimoineCreate} />
  </Admin>

);