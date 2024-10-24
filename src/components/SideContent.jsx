import { Flex } from "antd";
import SideDetails from "./sidedetails";

const SideContent = () => {
  return (
    <Flex vertical gap="2.3rem" style={{ width: 350}}>
        <SideDetails />
    </Flex>
  );
};

export default SideContent;