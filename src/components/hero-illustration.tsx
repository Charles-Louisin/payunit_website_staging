import { motion } from "framer-motion";

export const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background gradient circles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-teal-200/30 to-purple-200/30 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-green-200/20 to-teal-200/20 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main illustration container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-[600px] aspect-[4/3] mx-auto"
      >
        {/* Credit Card */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[380px] h-[220px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          animate={{ x: [-5, 0, -5] }}
          transition={{ 
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Card background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]" />
          </div>
          
          {/* Card logo */}
          <div className="absolute top-6 right-6">
            <div className="w-12 h-8 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-90" />
          </div>
          
          {/* Card chip */}
          <div className="absolute top-8 left-8">
            <div className="w-12 h-9 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] opacity-50" />
              <div className="grid grid-cols-3 gap-[2px] p-[2px]">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[2px] bg-yellow-600/50" />
                ))}
              </div>
            </div>
          </div>

          {/* Card number */}
          <div className="absolute top-28 left-8 right-8">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
                ))}
              </div>
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
                ))}
              </div>
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
                ))}
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-300 font-mono">4242</span>
              </div>
            </div>
          </div>

          {/* Card holder name and expiry */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
            <div className="text-gray-300 font-mono text-sm">JOHN DOE</div>
            <div className="text-gray-300 font-mono text-sm">12/25</div>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="absolute right-0 top-0 -translate-y-1/2 w-[280px] h-[520px] bg-white rounded-[45px] shadow-2xl overflow-hidden"
          animate={{ y: [-5, 5, -5] }}
          transition={{ 
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
          
          {/* Phone screen */}
          <div className="absolute inset-2 bg-gray-50 rounded-[40px] overflow-hidden">
            {/* App header */}
            <div className="absolute top-0 inset-x-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-gray-900 font-medium">Payment</div>
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-600">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Payment amount */}
            <div className="absolute top-24 inset-x-0 text-center">
              <div className="text-gray-500 text-sm font-medium">Amount to pay</div>
              <div className="text-4xl font-bold text-gray-900 mt-2">$127.00</div>
            </div>

            {/* Payment methods */}
            <div className="absolute top-48 inset-x-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-blue-600 rounded"></div>
                    <div className="text-sm font-medium text-gray-700">•••• 4242</div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between opacity-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-gray-600 rounded"></div>
                    <div className="text-sm font-medium text-gray-700">•••• 8888</div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Pay button */}
            <div className="absolute bottom-8 inset-x-6">
              <button className="w-full bg-teal-500 text-white rounded-2xl py-4 font-medium text-lg shadow-lg shadow-teal-500/25 flex items-center justify-center space-x-2">
                <span>Pay Now</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements - Repositioned and ultra-smooth animations */}
        <motion.div
          className="absolute top-24 left-24 px-3 py-1 bg-teal-400 text-white text-sm rounded-full shadow-lg"
          animate={{ y: [-3, 3, -3] }}
          transition={{ 
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          ✓ Sécurisé
        </motion.div>

        <motion.div
          className="absolute top-12 left-44 px-3 py-1 bg-blue-500 text-white text-sm rounded-full shadow-lg"
          animate={{ y: [-3, 3, -3] }}
          transition={{ 
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          ⚡ Traitement
        </motion.div>

        <motion.div
          className="absolute top-12 left-4 px-3 py-1 bg-purple-500 text-white text-sm rounded-full shadow-lg"
          animate={{ y: [-3, 3, -3] }}
          transition={{ 
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          🔒 Crypté
        </motion.div>

        {/* Dollar Sign - Ultra-smooth animation */}
        <motion.div
          className="absolute top-40 left-20 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shadow-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          $
        </motion.div>

        {/* Wifi Signal - Repositioned and smoother fade */}
        <motion.div
          className="absolute top-40 left-48 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            opacity: [0.6, 0.9, 0.6],
            y: [-2, 2, -2]
          }}
          transition={{ 
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Check Circle - Ultra-smooth animation */}
        <motion.div
          className="absolute bottom-16 right-12 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shadow-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          ✓
        </motion.div>
      </motion.div>
    </div>
  );
}; 