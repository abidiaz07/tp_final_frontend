import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Conversations from "./components/Pages/Conversations";
import { ConversationDetail } from "./components/Pages/ConversationDetail";
import { ContactDetail } from "./components/Pages/ContactDetail";
import { ChatProvider } from "./components/Context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/conversations" element={<Conversations />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Conversations />} />
        </Routes>
        <Routes>
          <Route path="/conversations/:id" element={<ConversationDetail />} />
        </Routes>
        <Routes>
          <Route path="/contacts/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
}

export default App;
