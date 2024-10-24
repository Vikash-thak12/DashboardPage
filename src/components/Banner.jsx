import { Card, Flex, Typography } from "antd";

const Banner = () => {
  return (
    <Card>
      <Flex>
        <Flex>
            <Typography.Title level={2}>
                Create and sell Products
            </Typography.Title>
            <Typography.Text type="secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio vel aspernatur soluta reiciendis, pariatur ea dolorum ratione debitis!
            </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;