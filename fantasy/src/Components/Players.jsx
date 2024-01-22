import { data } from '../Context/sampleData';
import { useContext } from "react";
import PlayerContext from '../Context/playersContext';

export default function Players() {
    const { players, setPlayers, rowNumbers, setRowNumbers } = useContext(PlayerContext);

    function loadSamplePlayers(e) {
        e.preventDefault();
        setPlayers(data);
        setRowNumbers([]);
    };

    function clearPlayers(e) {
        e.preventDefault();
        setPlayers([]);
        setRowNumbers([]);
    }
    
    function handleCheckboxChange(e) {
        let newRowNumbers = [...rowNumbers];

        if (newRowNumbers.includes(e.target.value)) {
            newRowNumbers = newRowNumbers.filter(id => id !== e.target.value);
        } else {
            newRowNumbers.push(e.target.value);
            // Sort and reverse needed to handle deleting multiple players
            newRowNumbers.sort().reverse();
        }

        setRowNumbers(newRowNumbers);
    };

    function deletePlayer(e) {
        e.preventDefault();
        let newPlayers = [...players];
        newPlayers = newPlayers.filter(player => player.id !== e.target.value);
        setPlayers(newPlayers);
    };

    return (
        <div id="playerCont">
            <button onClick={loadSamplePlayers}>Load Sample Data</button>
            <button onClick={clearPlayers}>Clear Players</button>
            <table>
                <thead>
                    <tr>
                        <th>Captain</th>
                        <th>Name</th>
                        <th>FPPG</th>
                        <th>OPRK</th>
                        <th>Salary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, rowNumber) => 
                        <tr key={rowNumber} >
                            <td>
                                <input 
                                    type="checkbox" 
                                    id={rowNumber}
                                    value={player.id} 
                                    onChange={handleCheckboxChange}
                                />
                            </td>
                            <td>{player.name}</td>
                            <td>{player.fppg}</td>
                            <td>{player.oprk}</td>
                            <td>{player.salary}</td>
                            <td><button value={player.id} onClick={deletePlayer}>
                                x
                            </button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};