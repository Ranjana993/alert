import React from 'react'
import "../components/AlertConfig.css"

const DataList = ({ OnClick, option }) => {
    return <tr>
        <td>
            <button className='del-btn' onClick={OnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </td>
        <td className='input--Name'><input type="text" value="" placeholder='enter Name' /></td>
        <td>
            <div>
                <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Select Variable...</option>
                        <option value="1"> {option.dependent_var[0]}</option>
                        <option value="2">{option.dependent_var[1]}</option>
                        <option value="3">{option.dependent_var[2]}</option>
                    </select>
                </div>
            </div>
        </td>
        <td>
            <div>
                <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Select Variable...</option>
                        <option value="1"> {option.dependent_var[0]}</option>
                        <option value="2">{option.dependent_var[1]}</option>
                        <option value="3">{option.dependent_var[2]}</option>
                    </select>
                </div>
            </div>
        </td>
        <td>
            <input type="number" className='freq' placeholder="min" />
        </td>
        <td>
            <button className='save-btn'>Save</button>
        </td>
    </tr>
}
export default DataList