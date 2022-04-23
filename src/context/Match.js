import { createContext, useContext, useEffect, useState } from "react";

const MatchContext = createContext({
  match: null,
});

export const MatchProvider = ({ children }) => {
  const match = useMatchCache();

  return (
    <MatchContext.Provider value={match}> {children}</MatchContext.Provider>
  );
};

export const useMatch = () => useContext(MatchContext)

export const useMatchCache = () => {
  const key = 'boardgame-life-match';
  const [match, setMatch] = useState(null)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(key));
    
    if (localData)
      setMatch(localData)
  }, [])

  return {
    match
  }
};
