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
        for (let i = 0; i < playersRemaining.length; i++) {
            let cost = team.reduce((n, {salary}) => n + salary, 0);

            if (cost > 50000) {
                return
            } else if (team.length === 6) {
                team.push(cost)
                teamCombos.push(team)
                return
            } else if (playersRemaining.length === 0) {
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
        <>
            <p>{teamCombos.length} Teams</p>
            {console.log(teamCombos)}
        </>
    )
};