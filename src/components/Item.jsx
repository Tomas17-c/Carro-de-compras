import React from "react";

const Item = ({ producto, setCarritoItems }) => {
  const addToCarrito = () => {
    setCarritoItems((carritoItems) => {
      const itemIndex = carritoItems.findIndex(
        (item) => item.id === producto.id
      );

      if (itemIndex !== -1) {
        const updatedCarrito = [...carritoItems];
        updatedCarrito[itemIndex] = {
          ...updatedCarrito[itemIndex],
          quantity: updatedCarrito[itemIndex].quantity + 1,
        };
        return updatedCarrito;
      } else {
        return [...carritoItems, { ...producto, quantity: 1 }];
      }
    });
  };

  return (
    <div
      onClick={addToCarrito}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
        margin: 2,
        alignItems: "center", // Asegura que el ícono y el texto estén alineados
      }}
    >
      {/* Renderizamos el icono */}
      <span>
        <producto.icon />
      </span>
      <span>{producto.name}</span>
      <span>${producto.unitPrice}</span>
    </div>
  );
};

export default Item;
