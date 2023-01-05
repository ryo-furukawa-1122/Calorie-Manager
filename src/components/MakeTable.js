import React, { useState } from 'react'
import Settings from './Settings'
import Table from './Table'

const MakeTable = () => {
    const [mealset, setMealSet] = useState(5);
    return (
        <div>
            <Settings mealSetState={[mealset, setMealSet]} />
            <Table mealSetState={[mealset, setMealSet]} />
        </div>
    );
}

export default MakeTable