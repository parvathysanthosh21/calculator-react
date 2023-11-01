import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')

  function exprEval(){
    try{
        setValue(eval(value))
    }
    catch{
        setValue("Invalid...!" )
    }
}
  return (
    <div className='mainbody'>
     <div className='box'>
      <form action="">
        <div className='display'>
          <input type="text" value={value} disabled/>
        </div>
        <div>
          <input type="button" value='AC' className='ac keys shadow' onClick={(e)=>setValue('')}/>
          <input type="button" value='DE' className=' keys shadow' onClick={(e)=>setValue(value.slice(0,-1))}/>
          <input type="button" value='/' className='operator shadow' onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='7' className='shadow' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='8' className='shadow' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='9' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='*'className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" className='shadow'  value='4' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" className='shadow'  value='5' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" className='shadow'  value='6' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='+' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='1'className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='2' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='3' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='-' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='0' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='.' className='shadow'  onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='=' className='equal shadow' onClick={exprEval}/>
        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
