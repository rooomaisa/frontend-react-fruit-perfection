import React from 'react';
import './App.css'
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
import citroenen from './assets/citroenen.jpeg';
import limoen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import Product from "./components/Product.jsx";


function App() {
    function logClick(){
        console.log('clicked');

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Ons verhaal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Blog</a>
                    </li>
                    <ShoppingCart className="shopping-cart-icon"/>
                </ul>
            </nav>
            <header className="App-header">
                <h1>Fruit Perfection</h1>
                <button className="button" onClick={logClick} >Shop nu</button>
            </header>

        <main>
            <Product image={citroenen}
                     title={"Citroen"}
                     description={"Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."}
            />
            <Product image={limoen}
                     title={"limoen"}
                     description={"Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."}
            />
            <Product image={ijsblokjes}
                     title={"Ijsblokjes"}
                     description={"Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."}
            />
        </main>
        </>
    );
}

export default App
