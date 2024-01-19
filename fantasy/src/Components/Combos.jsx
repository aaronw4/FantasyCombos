import {data} from '../Context/sampleData'

export default function Combos() {
    let teamCombos = [];

    for (let i = 0; i < data.length-6; i++) {
        let team = [];
        let player = structuredClone(data[i]);
        let players = [...data];
        player.salary = player.salary * 1.5;
        team.push(player);
        let remainingPlayers = players.slice(i+1);
        buildTeams(team, remainingPlayers);
    }

    function buildTeams(team, players) {
        if (team.length === 6) {
            teamCombos.push(team)
            return
        } else if (players.length === 0) {
            return
        }

        for (let i = 0; i < players.length; i++) {
            let newTeam = [...team];
            let playersList = structuredClone(players);
            newTeam.push(playersList[i]);
            let remainingPlayers = playersList.slice(i+1);
            buildTeams(newTeam, remainingPlayers);
        }
    };

    return (
        <>
            <p>{data.length}</p>
            <p>{console.log(teamCombos)}</p>
        </>
    )
};