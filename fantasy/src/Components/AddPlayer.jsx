import { useContext, useState } from "react";
import PlayerContext from '../Context/playersContext';

export default function AddPlayer() {
    const { players, setPlayers } = useContext(PlayerContext);
    const [ name, setName ] = useState('');
    const [ fppg, setFppg ] = useState(0);
    const [ oprk, setOprk ] = useState(0);
    const [ salary, setSalary ] = useState(0);

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleFppgChange(e) {
        setFppg(e.target.value);
    };

    function handleOprkChange(e) {
        setOprk(e.target.value);
    };

    function handleSalaryChange(e) {
        setSalary(e.target.value);
    };

    function resetForm() {
        setName('');
        setFppg(0);
        setOprk(0);
        setSalary(0);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const id = (players.length + 1).toString();
        
        setPlayers([...players, {
            id: id, 
            name: name,
            fppg: Number(fppg),
            oprk: Number(oprk),
            salary: Number(salary)
        }]);

        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:{' '}
                <input type="text" value={name} onChange={handleNameChange}/>
            </label>
            <label>
                FPPG:{' '}
                <input type="number" value={fppg} onChange={handleFppgChange}/>
            </label>
            <label>
                OPRK:{' '}
                <input type="number" value={oprk} onChange={handleOprkChange}/>
            </label>
            <label>
                Salary:{' '}
                <input type="number" value={salary} onChange={handleSalaryChange}/>
            </label>
            <input type="submit" value='Submit'/>
            <input type="reset" value='Reset' onClick={resetForm}/>
        </form>
    );
};