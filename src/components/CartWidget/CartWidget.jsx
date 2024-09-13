import { Flex, Text } from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <FaCartArrowDown />
      <Text margin={"5px"} color={"red"}>
        {cartState}
      </Text>
    </Flex>
  );
};
