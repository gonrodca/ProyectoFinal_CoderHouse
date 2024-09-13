import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./router/MainRouter";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <CartProvider>
          <MainRouter></MainRouter>
        </CartProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
