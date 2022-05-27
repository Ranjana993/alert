import './App.css';



const App = () => {

  // Adding the item 
  const addItem = () => {
    console.log("Adding");
  }
  // Deleting the item
  const deleteItem = () => {
    console.log("delete");
  }
  // removing the item 
  const removeAll = () => {
    console.log("removing");
  }


  return (
    <div className="App">
      <h2> Alert Configuration </h2>
      <hr />
      <div className='container'>
        <div className="header">
          <table>
            <thead>
              <tr>
                <th><span><i className="glyphicon glyphicon-remove main-btns"></i></span> </th>
                <th>Alert Name</th>
                <th>Independence Varible</th>
                <th> Dependence Variable</th>
                <th>Frequency</th>
                <th>Save</th>
              </tr>
            </thead>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <td><span onClick={removeAll}><i className="glyphicon glyphicon-remove btns"></i></span> </td>
              <td> Alert1</td>
              <td>
                <span className="Variable"> ME Torque(Avg) <i onClick={deleteItem} className="glyphicon glyphicon-remove "></i></span>
                <span className="Variable">ME Speed(Avg)<i className="glyphicon glyphicon-remove"></i></span>
                <span className='option'>
                  <select className='option'>
                    <option name="option1"></option>
                    <option value="html">Speed</option>
                    <option value="java">Speed</option>
                    <option value="C++">C++</option>
                    <option value="php">Speed</option>
                    <option value="perl">Speed
                    </option>
                  </select>
                </span>
              </td>
              <td>ME Torque(Avg)
                <select className="option">
                  <option name="option2"></option>
                  <option value="html">Torque</option>
                  <option value="java">Torque</option>
                  <option value="C++">Torque</option>
                  <option value="php">Torque</option>
                  <option value="perl">Torque</option>
                </select> </td>
              <td>10</td>
              <td><span className="btns-save" type="button" onClick={addItem}>Save</span></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td><span><i className="glyphicon glyphicon-remove btns"></i></span> </td>
              <td> <input type="text" /></td>
              <td><span className="Variable"> ME Torque(Avg) <i className="glyphicon glyphicon-remove"></i></span><span className="Variable">ME Speed(Avg)<i className="glyphicon glyphicon-remove"></i></span>
                <select className="option">
                  <option name="option1"></option>
                  <option value="html">Speed</option>
                  <option value="java">Speed</option>
                  <option value="C++">Speed</option>
                  <option value="php">Speed</option>
                  <option value="perl">Speed</option>
                </select>
              </td>
              <td><label type="select" placeholder='Seclect Variable' />
                <span className='opt'>
                  <label>Select Variable</label>
                  <select className="option">
                    <option name="option2"></option>
                    <option value="html">HTML</option>
                    <option value="java">JAVA</option>
                    <option value="C++">C++</option>
                    <option value="php">PHP</option>
                    <option value="perl">PERL</option>
                  </select>
                </span>
              </td>
              <td><input type="number" placeholder='min.' /></td>
              <td><span className="btns-save" type="button" onClick={addItem}>Save</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
