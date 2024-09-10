import { Flex, Text } from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <FaCartArrowDown />
      <Text margin={"5px"} color={"red"}>
        5
      </Text>
    </Flex>
  );
};
