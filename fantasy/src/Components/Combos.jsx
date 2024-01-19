import {data} from '../Context/sampleData'

export default function Combos() {
    let teamCombos = [];

    for (let i = 0; i < data.length-6; i++) {
        let team = [];
        let player = structuredClone(data[i]);
        let players = [...data];
        player.salary = player.salary * 1.5;
        team.push(player);
        players.splice(i, 1);
        if (player.fppg  > 9.9) {
            buildTeams(team, players);
        }
    }

    function buildTeams(team, players) {
        for (let i = 0; i < players.length; i++) {
            let newTeam = [...team];
            let playersList = structuredClone(players);
            newTeam.push(playersList[i]);
            let remainingPlayers = playersList.slice(i+1);
            let cost = team.reduce((n, {salary}) => n + salary, 0);
            
            if (cost > 50000) {
                return
            } else if (team.length === 6) {
                team.push(cost)
                teamCombos.push(team)
                return
            } else if (players.length === 0) {
                return
            }

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