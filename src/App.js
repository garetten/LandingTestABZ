import './App.scss';


import Header from './component/header/Header';
import Button from './component/button/Button';
import CartList from './component/CartList/CartList';
import Form from './component/form/Form';


import {useState} from 'react';


function App() {
  const [page, setPage] = useState(1);
  const [cartArr,setCartArr] = useState([]);
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <div className="main__container">
          <div className="main__content content">
            <div className="content__title">Test assignment for front-end developer</div>
            <div className="content__text">What defines a good front-end developer
             is one that has skilled knowledge of HTML, CSS, JS with a vast 
             understanding of User design thinking as they'll be building web interfaces with accessibility in mind. 
             They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
            
            <Button className = "content__button" >Sign up</Button>
          </div>
        </div>
      </main>
      <CartList page={page} setPage={setPage} setCartArr={setCartArr} cartArr={cartArr}></CartList>
      <Form setPage={setPage} setCartArr={setCartArr}></Form>
    </div>
  );
}

export default App;
