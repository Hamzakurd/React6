import Footer from "./assets/Components/Layout/Footer";

import Header from "./assets/Components/Layout/Header";

import { useState } from 'react';



function App() {

  const [data , setData] = useState({
    name:"",
    age:0,
    unversity:"",
    married:false,
    hascar:false,
  });
  console.log(data);
  
  return ( <>
      <Header />
      <div className="min-h-100">


        <form action="">
          <input
           type="text"
           placeholder="name"
           name="name"
           id=""
           onChange={(e) => setData({...data , name: e.target.value})}
          
          />
          <input
           type="number"
           placeholder="age"
           name="age"
           id=""
          
          />
          <select 
          name="uni"
          id=""
          onChange={(e) => setData({...data, unversity: e.target.value})}>
            <option value={"yarmouk"}>Yarmouk</option>
            <option value={"Just"}>Just</option>
            <option value={"Jadara"}>Jadara</option>
            </select>
            <div>
              <label htmlFor="married"></label>
              <input
              type="radio"
              name="married"
              value={"yes"}
             onChange={(e) => setData({...data , married: e.target.value})}/>

              <input
              type="radio"
              name="married"
              value={"no"}
             onChange={(e) => setData({...data , married: e.target.value})}/>
            

</div>
</form>
      </div>
      
      

      <Footer />
    </>
  );
}

export default App;