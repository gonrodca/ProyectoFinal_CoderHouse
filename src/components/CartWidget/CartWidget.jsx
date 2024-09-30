import { Flex, Text } from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);
  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <FaCartArrowDown />
      <Link to="/checkout">
        <Flex margin={"10px"}>
          <Text fontSize={"1rem"}>{qtyTotalItems}</Text>
        </Flex>
      </Link>
    </Flex>
  );
};
