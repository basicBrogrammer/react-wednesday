const CommunicationContext = React.createContext();

const CommunicationContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const state = { messages, notifications };
  const actions = { setMessages, setNotifications };

  return (
    <CommunicationContext.Provider value={{ state, actions }}>
      {children}
    </CommunicationContext.Provider>
  );
};

export default CommunicationContextProvider;
