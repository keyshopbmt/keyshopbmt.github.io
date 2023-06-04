import * as React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataprovider/dataProvider";
import { authProvider } from "./authProvider";
import PostEdit from "./postEdit";
import PostList from "./postList";
import { PostCreate } from "./postCreate";
import Dashboard from "./Dashboard";
import { i18nProvider } from "./i18nProvider";

export const httpClient = () => {
  const { token } = JSON.parse(localStorage.getItem("auth")) || {};
  return { Authorization: `Bearer ${token}` };
};

function Ad() {
  return (
    <Admin
      dataProvider={dataProvider("http://localhost:8000/", httpClient)}
      i18nProvider={i18nProvider}
      dashBoard={Dashboard}
      authProvider={authProvider}
    >
      <Resource
        name="products"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
}
export default Ad;
