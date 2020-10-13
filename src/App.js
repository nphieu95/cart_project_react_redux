import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <div>
        {/* <!-- Header --> */}
        <Header></Header>
        {/* <!-- Main --> */}
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer></ProductsContainer>
                {/* <!-- Message --> */}
                <MessageContainer></MessageContainer>
                {/* <!-- Cart --> */}
                <CartContainer></CartContainer>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer></Footer>
    </div>
  );
}

export default App;
