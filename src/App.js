import React,{useState,useEffect} from 'react';
import {Switch,Route,BrowserRouter as Router} from  'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import { db  } from './firebase';
import Itemadd from './Itemadd';

function App() {

  const [post,setpost] = useState([]);

  useEffect(()=> {

    db.collection('posts').onSnapshot(snapshot => {
    
      setpost(snapshot.docs.map(doc => ({id:doc.id , post:doc.data()}
      
      )))})
    } , [])


  return (
    <div className="App">
     <Router>
      <Switch>
      <Route path="/contact" >
      <Header />
<h1>Contact</h1>

</Route>
<Route path="/item" >
<Header />

<div className="hammad">
 {//price,image,disc,name
        post.map(({post,id }) => 
          (<Itemadd key={id}   price={post.price} image={post.image} disc={post.disc} name={post.name} />))
      }
      
      
</div>
</Route>
<Route path="/search" >
<h1>Search</h1>

</Route>
<Route path="/" >
  <Header />
<Home />

</Route>

      </Switch>



     </Router>
    </div>
  );
}

export default App;
