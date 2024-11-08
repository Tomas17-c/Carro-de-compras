import React from "react";

const Carrito = ({ carritoItem, setCarritoItems }) => {
  const removeFromCarrito = () => {
    setCarritoItems((carritoItems) => {
      const itemIndex = carritoItems.findIndex(
        (item) => item.id === carritoItem.id
      );

      if (carritoItems[itemIndex].quantity > 1) {
        const updatedCarrito = [...carritoItems];
        updatedCarrito[itemIndex] = {
          ...updatedCarrito[itemIndex],
          quantity: updatedCarrito[itemIndex].quantity - 1,
        };
        return updatedCarrito;
      } else {
        return carritoItems.filter((_, i) => i !== itemIndex);
      }
    });
  };

  return (
    <div
      onClick={removeFromCarrito}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
        margin: 2,
      }}
    >
      <span>
        <carritoItem.icon />
      </span>
      <span>{carritoItem.name}</span>
      <span>${carritoItem.unitPrice}</span>
      <span>x {carritoItem.quantity}</span>
    </div>
  );
};

export default Carrito;
