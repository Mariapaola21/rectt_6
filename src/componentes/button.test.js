import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Botones from "./button";


test("boton que cambiara correctamente al hacerle click", async () => {
  // Renderiza el componente botones
  render(<Botones />);

  // Encontrar el botón por el texto inicial
  const buttonElement = screen.getByText("haz click aqui");

  // Verifica que el texto inicial es el correcto
  expect(buttonElement.textContent).toBe("haz click aqui");

  // Simula un clic en el botón
  fireEvent.click(buttonElement);

  // Encuentra el botón nuevamente después de clickearlo
  const updatedButtonElement = await screen.findByText("Gracias por clickearme");

  // Verifica que el texto sí haya cambiado
  expect(updatedButtonElement.textContent).toBe("Gracias por clickearme");
});