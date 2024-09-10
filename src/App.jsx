import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <>
      <ChakraProvider>
        <MainRouter></MainRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
