
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4">
        <span className="font-sans text-base font-normal">Loading data</span>
      <motion.div
        className="flex space-x-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="w-5 h-5 bg-[#F58735] rounded-full"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: [0, -10, 0],
                transition: {
                  delay: index * 0.2,
                  repeat: Infinity,
                  duration: 1.5,
                },
              },
            }}
          />
        ))}
        <motion.div
          className="w-4 h-4 bg-[#F58735] rounded-full absolute"
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: {
              opacity: 1,
              y: [0, -20, 0],
              transition: {
                delay: 0.8,
                repeat: Infinity,
                duration: 1.5,
              },
            },
          }}
        />
      </motion.div>
    </div>
        </div>
       
  );
};

export default LoadingAnimation
