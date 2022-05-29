import React, { useState } from 'react'
import "./AlertConfig.css"
import TableBodyData from './TableBodyData'

const data = {
    alert_name: "",
    independent_var: [
        { label: 'inputNumber 1', value: 'inputNumber 1' },
        { label: 'input 2', value: 'inputNumber 2' },
        { label: 'Input 3', value: 'inputNumber 3' }],
    dependent_var: [
        { label: 'inputNumber 1', value: 'inputNumber 1' },
        { label: 'input 3', value: 'inputNumber 3' },
        { label: 'Input 4', value: 'inputNumber 4' }],
    freq: null
}

const Xyz = () => {
    const [formData, setFormData] = useState(false)
    const [initialData, setInitialData] = useState([])
    const [rowData, setRowData] = useState([])


    const addItem = () => {
        formData ? setInitialData([...initialData]) : console.log("Clicked on add btn")
        setRowData([...rowData, {}])
        setFormData(true)
    }

    const deleteItem = () => {
        setFormData(false)
    }

    return (
        <>
            <div className='container'>
                <h3>Alert configuration</h3><hr />
                <table>
                    <thead>
                        <tr>
                            <th><button className='add' onClick={addItem}>+</button></th>
                            <th>Alert Name</th>
                            <th>Independent Variable</th>
                            <th>Dependent Variable</th>
                            <th>Frequency</th>
                            <th>Save</th>
                        </tr>
                    </thead>
                    {
                        rowData.map(() => {
                            return <TableBodyData OnClick={deleteItem} option={data} setRowData={setRowData} />
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Xyz
