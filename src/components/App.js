import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Home from "./Home";
import { ContactsProvider } from "../Contexts/ContactsProvider";
import { ConversationsProvider } from "../Contexts/ConversationsProvider";
import { SocketProvider } from "../Contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage('id');

  const home = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Home id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>

  )

  return (
    id ? home : <Login onIdSubmit={setId} />
  )

}

export default App;
