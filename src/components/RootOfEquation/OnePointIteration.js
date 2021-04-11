import React, {
    useState
  } from 'react';
  import {
    Container
  } from 'react-bootstrap';
  import {
    Table
  } from 'antd';
  import Axios from 'axios';
  
  
  import '../../App.css';
  import Topbar from '../Topbar';
  import Footer from '../Footer';
  
  
  
  const header = [{
    title: () => {
      return <p> Iteration </p>;
    },
    dataIndex: 'iteration',
    key: 'iteration',
    align: 'center',
  
  
  }, {
    title: () => {
      return <p> X <sub> old </sub></p> ;
    },
    dataIndex: 'x_old',
    align: 'center',
    width: 300,
  
  
  }, {
    title: () => {
      return <p> X <sub> new </sub></p> ;
    },
    dataIndex: 'x_new',
    align: 'center',
    width: 300,
  
  }, {
    title: 'Error',
    dataIndex: 'Error',
    align: 'center',
    width: 300,
  
  }]
  
  var newArr = [];
  
  export default function OnePoint() {
    const [equation, setEquation] = useState("");
    const [btnState, setBtnState] = useState(0);
    let [x_old, setOldX] = useState(0);

    const handleSubmit = (e) => {
      if (btnState === 0) {
        e.preventDefault();
        onepoint();
      }
    };
  
    const onepoint = () => {
  
      Axios
        .post("http://localhost:5000/api/OnePointAPI", {
          x_old: parseFloat(x_old),
          equation: equation,
        })
        .then(res => {
          console.log(res.data.tmpArr);
          newArr = res.data.tmpArr;
          setBtnState(1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    return (
      <div>
        <Topbar/>
        <p></p>
              <div>
              <Container>  
                <h1><code>One-Point Position</code></h1>
                <p>Equation :<span>&nbsp;&nbsp;</span>{equation}</p>
                <p>X :<span>&nbsp;&nbsp;</span>{x_old}</p>

  
  
                <form onSubmit={handleSubmit}>
                    <label>
                      Equation :<span>&nbsp;&nbsp;</span>
                      <input disabled={btnState} type="text" value={equation} onChange={e => setEquation(e.target.value)}
                      />
                    </label>
                    <p></p>
                    <label>
                      X<sub>L</sub> :<span>&nbsp;&nbsp;</span>
                      <input disabled={btnState} type="text" value={x_old} onChange={e => setOldX(e.target.value)}
                      />
                    </label>
                    <p></p>
  
                    {btnState === 0  ? 
                    <button type="submit" disabled={btnState} value="Submit">Submit</button> :
                    <button type="submit" disabled={!btnState} value="Submit">Reset</button> }
                  </form>
                  <p></p><p></p>
              <div>
              {<Table dataSource={newArr} columns={header} rowKey='iteration' pagination={false}/>}
              </div>
            </Container>
  
        </div>
        <Footer />
      </div>
    );
  }
  
  
  
  
  