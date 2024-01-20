import { createContext, useState } from "react";

const PlayersContext = createContext();

export function PlayersProvider({children}) {
    const [ players, setPlayers ] = useState([]);
    const [ rowNumbers, setRowNumbers ] = useState([]);
    const [ captains, setCaptains ] = useState([]);

    return (
        <PlayersContext.Provider
            value = {{ 
                players, setPlayers, 
                captains, setCaptains,
                rowNumbers, setRowNumbers
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
};

export default PlayersContext;