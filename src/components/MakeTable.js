import React, { useState } from 'react'
import Settings from './Settings'
import Table from './Table'
import PieChart from './PieChart'

const MakeTable = () => {
    const [mealset, setMealSet] = useState(3);
    const [energy1, setEnergy1] = useState(0);
    const [energy2, setEnergy2] = useState(0);
    const [energy3, setEnergy3] = useState(0);

    return (
        <div>
            <Settings mealSetState={[mealset, setMealSet]} />
            <Table mealSetState={[mealset, setMealSet]} />
            <PieChart energy1SetState={[energy1, setEnergy1]} energy2SetState={[energy2, setEnergy2]} energy3SetState={[energy3, setEnergy3]} />
        </div>
    );
}

export default MakeTable