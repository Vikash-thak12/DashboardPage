import { Flex } from "antd";
import Banner from "./Banner";

const MainContent = () => {
  return (
    <div className="flex-1 border border-black rounded-md">
        <Flex gap="2.3rem">
            <Banner />
        </Flex>
    </div>
  );
};

export default MainContent;