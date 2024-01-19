import { createContext, useState } from "react";

const PlayersContext = createContext();

export function PlayersProvider({children}) {
    const [ players, setPlayers ] = useState([]);
    const [ captains, setCaptains ] = useState([]);

    return (
        <PlayersContext.Provider
            value = {{ players, setPlayers, captains, setCaptains }}
        >
            {children}
        </PlayersContext.Provider>
    );
};

export default PlayersContext;