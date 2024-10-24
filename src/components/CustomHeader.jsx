import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import {MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons"

const CustomHeader = () => {
  return (
    <Flex  align="center" justify="space-between">
        <Typography.Title level={3} type="secondary" className="flex items-center">
            Welcome Back, Vikash
        </Typography.Title>
        <Flex align="center" gap={"3rem"}>
            <Search allowClear placeholder="Search Here" />
            <Flex align="center" gap="3rem">
                <MessageOutlined className="text-2xl bg-green-300 p-2 rounded-md cursor-pointer hover:bg-[#4f6f52]" />
                <NotificationOutlined className="text-2xl bg-green-300 p-2 rounded-md cursor-pointer hover:bg-[#4f6f52]" />
                <Avatar icon={<UserOutlined />} />
            </Flex>
        </Flex>
    </Flex>
  );
};

export default CustomHeader;