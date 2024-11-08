import { useState } from "react";
import "./App.css";
import productos from "./productos";
import Item from "./components/Item";
import Carrito from "./components/Carrito";
import TotalPrecio from "./components/TotalPrecio";

function App() {
  const [carritoItems, setCarritoItems] = useState([]);

  return (
    <div className="container text-center mt-4">
      <div className="row justify-content-between">
        <div className="col-5 mt-1">
          <h3>Productos Disponibles</h3>
          {productos.map((producto) => (
            <div key={producto.id} className="border rounded-2 p-2 mb-2">
              <Item producto={producto} setCarritoItems={setCarritoItems} />
            </div>
          ))}
        </div>

        <div className="col-5 mt-1">
          <h3>Carrito</h3>
          {carritoItems.map((carritoItem) => (
            <div key={carritoItem.id} className="border rounded-2 p-2 mb-2">
              <Carrito
                carritoItem={carritoItem}
                setCarritoItems={setCarritoItems}
              />
            </div>
          ))}

          <div className="mt-3">
            <TotalPrecio carritoItems={carritoItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
