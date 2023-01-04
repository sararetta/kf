import React, { useState } from "react";
import "./App.css";
import Divder from "./components/Divider";
import Footer from "./components/Footer";
import Group from "./components/Group";
import Header from "./components/Header";
import { groupsProps } from "./shared/types";
function App() {
  const [groups, setGroups] = useState<groupsProps[]>([]);
  const [addGroup, setAddGroup] = useState(false);
  return (
    <div className="App">
      <Header />
      <Divder />
      <Group
        groups={groups}
        setGroups={setGroups}
        addGroup={addGroup}
        setAddGroup={setAddGroup}
      />
      <Footer
        onClick={() => {
          setAddGroup(true);
        }}
      />
    </div>
  );
}

export default App;
