import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      {/* -----------DIV------------ */}

      {/* coming div from upper side */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Framer Motion App</h1>
      </motion.div>

      {/* coming div from lower side */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Framer Motion App</h1>
      </motion.div>

      {/* coming div from right side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Framer Motion App</h1>
      </motion.div>

      {/* coming div from left side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Framer Motion App</h1>
      </motion.div>

      {/* while tap it jump like left to right */}
      <motion.div whileFTap={{ scale: 0.8 }}>Tap</motion.div>

      {/* -----------BUTTON------------ */}

      {/* on click bounch effect and hover transition */}
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        title="click"
      >
        Hello
      </motion.button>

      {/* -----------LINK------------ */}

      <motion.a
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      />

      {/* -----------INPUT------------ */}

      <motion.input whileFocus={{ scale: 1.2 }} />


          // This is test of pull request 
          
    </div>
  );
};

export default App;
