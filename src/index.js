import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

import ResourcesStore from "./stores/ResourcesStore";
import ContainerComponent from "./containers/Container";
import FetchContainer from "./containers/FetchContainer";

const App = observer(({ resourceStore }) => {
  const { resources: { checklists }, loading } = resourceStore;

  return (
    <div>
      <div>
        <ContainerComponent fetchChecklists={resourceStore.fetchChecklists} />
        <hr />
        <FetchContainer loading={loading} checklists={checklists} />
      </div>
    </div>
  );
});

ReactDOM.render(
  <App resourceStore={new ResourcesStore()} />,
  document.getElementById("container")
);
