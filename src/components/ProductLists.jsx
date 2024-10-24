import data from "../PlantData.js"
import { Button, Card, Flex, Image, Typography } from "antd";
const { Meta } = Card;
const ProductLists = () => {
  return (
    <div>
    <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong>
            My listing
        </Typography.Title>
        <Button type="link" >
            View all
        </Button>
    </Flex>
    <Flex align="center" justify="center" gap="large" flex={1} className="bg-transparent">
        {data.map((plant) => (
            <Card key={plant.id} className="rounded-md">
                <Image src={plant.picture} width={200} height={200} alt="Picture" />
                <Meta title={plant.name} className="mt-5 text-center font-bold text-3xl" />
            </Card>
        ))}
    </Flex>
    </div>
  );
};

export default ProductLists;