import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface Props {}
const MotionBox = motion(Box);

const GoBack = (props: Props) => {
  const router = useRouter();
  return (
    <MotionBox
      cursor="pointer"
      h="50px"
      w="50px"
      whileTap={{ scale: 0.6 }}
      onClick={() => router.back()}
    >
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          fillRule="evenodd"
        />
      </svg>
    </MotionBox>
  );
};

export default GoBack;
