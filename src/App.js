import logo from './logo.svg';
import './App.css';
import Comp1 from './mycomponents/Comp1';
import Comp2 from './mycomponents/Comp2';
import Comp3 from './mycomponents/Comp3';
import Tp1_Calc from './mycomponents/Tp1_Calc';



function App() {
   
 const finparent=(p)=>{
    alert('Hello From Parent' +p)
 }

  return (
    <div className="App">
    
    
   <Tp1_Calc/>
    </div>
  );
}

export default App;
