import { Flex, Menu} from "antd"
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion"
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined
} from "@ant-design/icons"
const Sidebar = () => {
  return (
    <>
    <Flex align="center" justify="center">
        <motion.div whileHover={{
          rotate: "-60deg",
          transition: {
            duration: .2,
          }
        }} className="text-[#4f6f52] my-8 font-medium cursor-pointer">
            <FaLeaf className="text-5xl" />
        </motion.div>
    </Flex>
    <Menu mode="inline" defaultActiveFirst={['1']} className="flex flex-col gap-5 font-semibold"
    items={[
      {
        key: '1',
        icon: <OrderedListOutlined />,
        label: "Dashboard"
      },
      {
        key: '2',
        icon: <UserOutlined />,
        label: "My Orders"
      },
      {
        key: '3',
        icon: <CarryOutOutlined />,
        label: "To Do"
      },
      {
        key: '4',
        icon: <ProfileOutlined />,
        label: "Profile"
      },
      {
        key: '5',
        icon: <SettingOutlined />,
        label: "Setting"
      },
      {
        key: '6',
        icon: <LogoutOutlined />,
        label: "Logout"
      }
    ]}
     />
    </>
  );
};

export default Sidebar;