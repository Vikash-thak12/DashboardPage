import { Card, Flex, Image, Typography } from "antd";
import plant from "../assets/first.png"

const SideDetails = () => {
  return (
    <div>
      <Card className="relative">
        <Flex vertical gap="large">
            <Typography.Title level={4} strong>
                Today <br /> 5 Orders
            </Typography.Title>
            <Typography.Title level={4} strong>
                This Month <br /> 240 Orders
                </Typography.Title>
        </Flex>
        <Image src={plant} alt="Logo" style={{
            position: "absolute",
            bottom: -50, 
            left: 120, 
            height: '300px',
            width: '300px'
        }} />
      </Card>
    </div>
  );
};

export default SideDetails;