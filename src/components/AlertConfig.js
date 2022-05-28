import React, { useState } from 'react'
import "./AlertConfig.css"
import DataList from '../components/TableBodyData'


const data = {
    alert_name: "",
    independent_var: ['inputNumber 1', 'input 2', 'Input 3'],
    dependent_var: ['InputNumber1', 'input 4', 'Input 5'],
    freq: null
}
const Xyz = () => {
    const [formData, setFormData] = useState(false)
    const [state, setState] = useState(data)
    const [item, setItem] = useState([])

    const addItem = () => {
        if (formData) {
            setItem(...state, DataList)
        }
        else {
            console.log("Clicked on add btn")
        }
        setFormData(true)
        console.log(state);
    }

    // Deleting the item
    const deleteItem = () => {
        console.log("clicked on delete btn");
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
                        formData ? <DataList OnClick={deleteItem} option={data} />
                            : null
                    }
                    {
                        item.map((index) =>  <DataList key={index
                            } OnClick={deleteItem} option={data} />
                        )
                    }
                </table>
            </div>
        </>
    )
}

export default Xyz
