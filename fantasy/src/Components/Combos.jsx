import { useContext } from "react";
import PlayerContext from '../Context/playersContext';

export default function Combos() {
    const { players, rowNumbers } = useContext(PlayerContext);
    let teamCombos = [];

    for (let i = 0; i < players.length; i++) {
        let team = [];
        let player = structuredClone(players[i]);

        if (rowNumbers.includes(player.id)) {
            let newPlayers = [...players];
            player.salary = player.salary * 1.5;
            team.push(player);
            newPlayers.splice(i, 1);

            buildTeams(team, newPlayers);
        }
    }

    function buildTeams(team, playersRemaining) {
        let cost = team.reduce((n, {salary}) => n + salary, 0);

        if (cost > 50000) {
            return
        } else if (playersRemaining.length === 0 && team.length === 6) {
            team.push(cost);
            teamCombos.push(team);
            return
        }

        for (let i = 0; i < playersRemaining.length; i++) {
            if (team.length === 6) {
                team.push(cost);
                teamCombos.push(team);
                return
            } 

            let newTeam = [...team];
            let playersList = structuredClone(playersRemaining);
            
            newTeam.push(playersList[i]);
            let remainingPlayers = playersList.slice(i+1);

            buildTeams(newTeam, remainingPlayers);
        }
    };

    return (
        <div id="teamCombosCont">
            {
                teamCombos.length === 0 ? null :
                <p>{teamCombos.length} Teams</p>
            }
            <div id='teamCombos'>
                {teamCombos.map(team => 
                    <div className="team">
                        <tbody>
                            {team.map(player => 
                                player.name ? 
                                    <tr className='teamRow'>
                                        <td>{player.name}</td>
                                        <td>{player.fppg} </td>
                                        <td>{player.oprk}</td> 
                                        <td>${player.salary}</td>
                                    </tr> 
                                : null    
                            )}
                            <p>Total Cost: ${team[6]}</p>
                        </tbody>
                    </div>
                )}
            </div>
        </div>
    )
};