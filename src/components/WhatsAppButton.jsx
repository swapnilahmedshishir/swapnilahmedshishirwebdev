import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, MessageSquare } from "lucide-react";

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/8801602555023?text=Hello%20Swapnil!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      "_blank"
    );
  };

  const message =
    "Hello Swapnil! I came across your portfolio and would like to discuss a project.";

  return (
    <>
      {/* Main WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="fixed bottom-6 right-6 z-50"
          >
            {/* Expanded Contact Card */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-16 right-0 w-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm shadow-2xl shadow-green-500/20"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-3 right-3 p-1 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500/10">
                        <MessageCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Chat on WhatsApp
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm">
                      Let's discuss your project! I typically respond within
                      minutes during business hours.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-700/30">
                        <MessageSquare className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{message}</span>
                      </div>
                    </div>

                    <motion.button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Start Conversation
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/40 transition-all duration-300 relative group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Animated Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Main Icon */}
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="whatsapp"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notification Badge */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[10px] font-bold text-white">1</span>
              </motion.div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {isHovered && !isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 rounded-lg shadow-lg"
                  >
                    <div className="text-sm text-white whitespace-nowrap">
                      Chat with me!
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 right-0 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <span className="text-xs text-green-400 font-medium">
                Available
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
