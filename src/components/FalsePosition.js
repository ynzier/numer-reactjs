import React, { useState,useEffect } from 'react';
import * as math from 'mathjs';
import '../App.css';
import Topbar from './Topbar';
import { Container } from 'react-bootstrap';
import { Table } from 'antd';

const axios = require('axios');


const header = [{
  title: 'Iteration',
  dataIndex: 'iteration',
}, {
  title: 'Xl',
  dataIndex: 'xl',
}, {
  title: 'Xr',
  dataIndex: 'xr',
}, {
  title: 'Xm',
  dataIndex: 'xm',
}, {
  title: 'Error',
  dataIndex: 'Error',
}]

var tmpArr = [];


export default function FalsePos(){
  const [equation, setEquation] = useState("");
  const [btnState, setBtnState] = useState(0);
  let [xl, setXL] = useState(0);
  let [xr, setXR] = useState(0);
  const[result,setResultArr] = useState(tmpArr);


  const handleSubmit = (e) => {
    if(btnState === 0)
    {
      e.preventDefault();
      falsepos();
      setResultArr([...result,tmpArr]);
      setBtnState(1);
    }
  };
  
  const falsepos = () => {
    let table = document.getElementById("output");
    let n = 0;
    var xm = 0;
    var check = parseFloat(0.0000000);
    

   /* async function makeDeleteRequsest(i)
    {
          let test = await axios.delete('http://localhost:3333/users/'+i )
    }
   for(var i = 1 ; i<25 ;i++){
      makeDeleteRequsest(i);
    }*/



    do{
      
      xm = findxm(xl,xr);
      
      console.log(check);//error
      n++;
      console.log(n);
      if(funcal(xl)*funcal(xm)>0) {
        check=Math.abs((xm-xl)/xm).toFixed(8);
        xl = (xm);
      }
      else {
        check=Math.abs((xm-xr)/xm).toFixed(8);
        xr = (xm);
      }
      console.log('iteration: ' ,n, ' Xl: ',xl,' XR: ',xr,' XM: ',xm);

      tmpArr.push({
        'iteration': n,
        'xl': xl,
        'xr': xr,
        'xm': xm,
        'Error': check,
    });

    
    /*  async function makePostRequest() {
        const data = {  iteration: n,
          XL: xl,
          XR: xr,
          XM: xm,
          ERROR: check,  };

          let res = await axios.post('http://localhost:3333/api/FalsePosAPI', {
            xl :parseFloat(xl),
            xr :parseFloat(xr),
            equation: equation
           })
           .then(res => {
             setResult({result:res.data.result})
               console.log(this.state.result)
           })
           .catch(err => {
             console.log(err);
           });
          

      }*/

     // makePostRequest();
    }while(check>0.000001 || n<20)
  }
  
  //หาXm ปกติ
  const findxm = (xl,xr) => {
    return (parseFloat(xl)+parseFloat(xr))/2
  }
  
  // แก้สมาการ X
  const funcal = (X) => {
    const expression = equation;
    const expr = math.compile(expression);
    let scope = {x:parseFloat(X)};
    return expr.evaluate(scope);
  }
  console.log(tmpArr);
  
  return (
    <div>
      <div><Topbar/></div>
      <p></p>
            <div>
            <Container>  
              <h1>Bisection Method</h1>
              <p>Equation :<span>&nbsp;&nbsp;</span>{equation}</p>
              <p>X<sub>L</sub> :<span>&nbsp;&nbsp;</span>{xl}</p>
              <p>X<sub>R</sub> :<span>&nbsp;&nbsp;</span>{xr}</p>


              <form onSubmit={handleSubmit}>
                  <label>
                    Equation :<span>&nbsp;&nbsp;</span>
                    <input type="text" value={equation} onChange={e => setEquation(e.target.value)}
                    />
                  </label>
                  <p></p>
                  <label>
                    X<sub>L</sub> :<span>&nbsp;&nbsp;</span>
                    <input type="text" value={xl} onChange={e => setXL(e.target.value)}
                    />
                  </label>
                  <p></p>
                  <label>
                    X<sub>R</sub> :<span>&nbsp;&nbsp;</span>
                    <input type="text" value={xr} onChange={e => setXR(e.target.value)}/>
                  </label>
                  <p></p>

                  {btnState === 0  ? 
                  <button type="submit" disabled={btnState} value="Submit">Submit</button> :
                  <button type="submit" disabled={!btnState} value="Submit">Reset</button> }
                </form>
                <p></p><p></p>

  
            <div>
              {<Table style={{width:"auto",margin:"auto"}} dataSource={result} columns={header} pagination={false} />}
            </div>
          </Container> 

      </div>
      
    </div>
  );
}




