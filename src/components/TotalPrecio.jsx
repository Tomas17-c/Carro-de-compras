import React, { useEffect, useState } from "react";

const TotalPrecio = ({ carritoItems }) => {
  const [totalPrecio, setTotalPrecio] = useState(0);

  useEffect(() => {
    const newTotal = carritoItems.reduce((acc, item) => {
      return acc + item.unitPrice * item.quantity;
    }, 0);

    setTotalPrecio(newTotal);
  }, [carritoItems]);

  return carritoItems.length !== 0 ? (
    <div>
      <p className="p-3 mb-2 rounded-3 bg-success bg-opacity-50 text-black">
        Precio Total: ${totalPrecio.toFixed(2)}
      </p>
    </div>
  ) : (
    <p>Por favor, seleccione uno o más productos para agregar al carrito</p>
  );
};

export default TotalPrecio;
