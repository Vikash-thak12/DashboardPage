import { Flex } from "antd";
import Banner from "./Banner";
import ProductLists from "./ProductLists";

const MainContent = () => {
  return (
    <div className="flex-1 rounded-md">
        <Flex gap="2.3rem" vertical>
            <Banner />
            <ProductLists />
        </Flex>
    </div>
  );
};

export default MainContent;