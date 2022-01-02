import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../Contexts/ContactsProvider";
import { ConversationsProvider } from "../Contexts/ConversationsProvider";
import { SocketProvider } from "../Contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>

  )

  return (

    id ? dashboard : <Login onIdSubmit={setId} />

  )

}

export default App;
