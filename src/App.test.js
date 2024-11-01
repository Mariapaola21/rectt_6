import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App"; // Asegúrate de que la ruta es correcta

test("renderiza el componente Botones y cambia el texto al hacer clic", async () => {
  // Renderiza el componente App
  render(<App />);

  // Encuentra el botón por el texto inicial
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