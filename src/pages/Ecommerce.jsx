import React from "react";
import {
  earningData,
  ecomPieChartData,
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  medicalproBranding,
  recentTransactions,
  SparklineAreaData,
  weeklyStats,
} from "../data/dummy";
import {
  Button,
  Stacked,
  SparkLine,
  Card,
  Pie,
  LineChart,
} from "../components";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { useStateContext } from "../contexts/Context";
import { motion } from "framer-motion";
import avatar from "../data/avatar6.png";
const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] gap-3 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Card */}
      {/* <div className="col-span-5 grid ">

      </div> */}
      <motion.div
        className="rounded-xl   lg:w-80 shadow-md    p-6 flex flex-col justify-between pt-7 bg-white dark:bg-secondary-dark-bg card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
       
      >
      <img 
    src={avatar} 
    alt="Background" 
    className="absolute top-0 -right-4 sm:-right-8 md:hidden h-full object-cover z-0" 
    // use md:-right-16 lg:-right-20 for larger screens
  />
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-xl"></div>

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex flex-col">
            <motion.p
              className="text-gray-500 dark:text-gray-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Earnings
            </motion.p>
            <motion.p
              className="text-3xl font-bold font-display text-gray-800 dark:text-gray-100 mt-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              $63,488
            </motion.p>
            <motion.p
              className="text-sm text-gray-400 dark:text-gray-500 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Monthly Revenue
            </motion.p>
          </div>
          <motion.div
            className="pr-4 sm:hidden lg:block"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              icon={<BsCurrencyDollar />}
              iconColor="white"
              iconBg={currentColor}
              borderRadius={"full"}
              width={"3em"}
              height={"3em"}
            />
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-2 mt-6">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              text="Download Report"
              borderRadius={"lg"}
              iconBg={currentColor}
              iconColor={"white"}
              size="sm"
            />
          </motion.div>
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              backgroundColor: `${currentColor}20`,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Stat Cards */}
      {earningData.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          custom={index}
          transition={{ delay: index * 0.05 }}
        >
          <Card
            title={item.title}
            icon={item.icon}
            iconColor={item.iconColor}
            iconBg={item.iconBg}
            amount={item.amount}
            percentage={item.percentage}
            percentageColor={item.pcColor}
            backgroundimg={item.backgroundimg}
            New={item.New}
            Returning={item.Returning}
          />
        </motion.div>
      ))}
      {/* Quick Stats Section
  <motion.div
              className="grid grid-cols-4   col-start-2 col-end-6 gap-4 p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold text-gray-700">Active Users</p>
                <motion.p
                  className="text-3xl font-bold text-blue-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  1,245
                </motion.p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold text-gray-700">New Signups</p>
                <motion.p
                  className="text-3xl font-bold text-green-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  342
                </motion.p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold text-gray-700">Total Sales</p>
                <motion.p
                  className="text-3xl font-bold text-purple-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  $12,345
                </motion.p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold text-gray-700">Feedbacks</p>
                <motion.p
                  className="text-3xl font-bold text-yellow-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  89%
                </motion.p>
              </div>
            </motion.div> */}
      {/* Revenue Updates */}
      <motion.div
        className="grid grid-cols-2 bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-6 md:col-span-3 row-span-2 mt-3 auto-rows-min card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>

        <div className="col-span-2 flex justify-between pr-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-8 w-1 bg-gradient-primary rounded-full"></div>
            <p className="text-2xl font-display font-bold">Revenue Updates</p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 max-md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="flex items-center gap-1 text-danger-500 font-medium">
              <span className="w-3 h-3 rounded-full bg-danger-500"></span>{" "}
              Expense
            </p>
            <p className="flex items-center gap-1 text-success-500 font-medium">
              <span className="w-3 h-3 rounded-full bg-success-500"></span>{" "}
              Budget
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start justify-center pl-4 mt-6"
          variants={statsVariants}
        >
          <div className="flex items-center gap-3">
            <motion.p
              className="text-3xl font-bold font-display"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              $93,438
            </motion.p>
            <motion.span
              className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#10b98120",
                color: "#10b981",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              +23%
            </motion.span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
            Budget
          </p>

          <motion.div
            className="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6 }}
          ></motion.div>

          <div className="flex items-center gap-3">
            <motion.p
              className="text-3xl font-bold font-display"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              $48,487
            </motion.p>
            <motion.span
              className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#ef444420",
                color: "#ef4444",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              -12%
            </motion.span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
            Expense
          </p>

          <motion.div
            className="mt-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <SparkLine
              currentColor={currentColor}
              id="line-sparkLine"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color={currentColor}
              lineGap={true}
            />
          </motion.div>
          <motion.div
            className="mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="Download Report"
              borderRadius={"lg"}
              iconBg={currentColor}
              iconColor={"white"}
              size="sm"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-between items-center mt-3 max-md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Stacked
            id="stacked-sparkline"
            height="360px"
            width="320px"
            data={SparklineAreaData}
            type="Column"
            color="cyan"
            currentColor={currentColor}
            background={currentMode === "Dark" ? "transparent" : "#fff"}
            textColor={currentMode === "Dark" ? "white" : "black"}
          />
        </motion.div>
      </motion.div>

      {/* Monthly Revenue Card */}
      <motion.div
        className="lg:col-span-2 md:col-span-3 rounded-xl shadow-md p-6 w-full grid grid-cols-1 gap-6 justify-between mt-3 auto-rows-min card-glow relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${currentColor} 0%, ${currentColor}dd 100%)`,
        }}
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: `0 15px 30px ${currentColor}40`,
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="flex justify-between text-white relative z-10">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-8 w-1 bg-white rounded-full"></div>
            <p className="text-xl font-display font-bold">Earnings</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl font-display font-bold">$63,448.78</p>
            <p className="text-sm font-medium opacity-90">Monthly Revenue</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-10"
        >
          <SparkLine
            id="monthly-revenue-sparkline"
            height="100px"
            width="100%"
            data={SparklineAreaData}
            type="Column"
            color="white"
            currentColor="white"
          />
        </motion.div>
      </motion.div>

      {/* Yearly Sales */}
      <motion.div
        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl shadow-md p-8 flex justify-between items-center lg:col-span-2 md:col-span-3 auto-rows-min card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-warning-300 to-transparent opacity-60"></div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-1 bg-warning-500 rounded-full"></div>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Yearly Sales
            </p>
          </div>

          <p className="text-3xl font-display font-bold text-gray-800 dark:text-white">
            $43,246
          </p>

          <div className="flex items-center gap-2 mt-2">
            <motion.span
              className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#10b98120",
                color: "#10b981",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              +8.5%
            </motion.span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              compared to last year
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <Pie
            id="pie-chart"
            data={ecomPieChartData}
            legendVisiblity={false}
            height="160px"
          />
        </motion.div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-6 md:col-span-3 lg:col-span-2 mt-3 card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-60"></div>

        <div className="flex justify-between items-center mb-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-6 w-1 bg-gradient-primary rounded-full"></div>
            <p className="text-xl font-display font-bold text-gray-800 dark:text-gray-100">
              Recent Transactions
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <select className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-gray-600 dark:text-gray-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent">
              <option>May 2021</option>
              <option>April 2021</option>
              <option>March 2021</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {recentTransactions.map((transaction, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              variants={statsVariants}
              custom={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    icon={transaction.icon}
                    iconBg={transaction.iconBg}
                    iconColor={transaction.iconColor}
                    borderRadius="lg"
                    width="3em"
                    height="3em"
                  />
                </motion.div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {transaction.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {transaction.desc}
                  </p>
                </div>
              </div>
              <motion.p
                className="font-medium text-base"
                style={{ color: transaction.pcColor }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {transaction.amount}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-4"></div>

        <div className="flex justify-between items-center mt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              text="View All"
              iconBg={currentColor}
              iconColor="white"
              borderRadius="lg"
              width="7em"
              height="2.5em"
            />
          </motion.div>

          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            36 Recent Transactions
          </motion.p>
        </div>
      </motion.div>

      {/* Sales Overview Chart */}
      <motion.div
        className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-6 md:col-span-3 mt-3 card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-success-300 to-transparent opacity-60"></div>

        <div className="flex justify-between items-center mb-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-6 w-1 bg-success-500 rounded-full"></div>
            <p className="text-xl font-display font-bold text-gray-800 dark:text-gray-100">
              Sales Overview
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <select className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-gray-600 dark:text-gray-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-success-400 focus:border-transparent">
              <option>Last Week</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="overflow-hidden rounded-lg"
        >
          <LineChart
            id="sales-overview-chart"
            height="400px"
            width="100%"
            data={lineCustomSeries}
            primaryXAxis={{
              ...LinePrimaryXAxis,
              labelStyle: currentMode === "Dark" ? { color: "white" } : {},
              titleStyle: currentMode === "Dark" ? { color: "white" } : {},
            }}
            primaryYAxis={{
              ...LinePrimaryYAxis,
              labelStyle: currentMode === "Dark" ? { color: "white" } : {},
              titleStyle: currentMode === "Dark" ? { color: "white" } : {},
            }}
            background="transparent"
            chartArea={{ border: { width: 0 } }}
          />
        </motion.div>
      </motion.div>

      {/* Weekly Stats */}
      <motion.div
        className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-6 md:col-span-3 lg:col-span-2 mt-3 card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-60"></div>

        <div className="flex justify-between items-center mb-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-6 w-1 bg-gradient-primary rounded-full"></div>
            <p className="text-xl font-display font-bold text-gray-800 dark:text-gray-100">
              Weekly Stats
            </p>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weeklyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              variants={statsVariants}
              custom={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    icon={stat.icon}
                    iconBg={stat.iconBg}
                    iconColor={"white"}
                    borderRadius="full"
                    width="3em"
                    height="3em"
                  />
                </motion.div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {stat.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.desc}
                  </p>
                </div>
              </div>
              <motion.div className="flex items-center gap-1.5">
                <span
                  className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${stat.pcColor}20`,
                    color: stat.pcColor,
                  }}
                >
                  {stat.amount}
                </span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={stat.pcColor}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <SparkLine
            id="weekly-stats-sparkline"
            height="100px"
            width="100%"
            data={[
              { x: 1, yval: -560 },
              { x: 2, yval: -560 },
              { x: 3, yval: 560 },
            ]}
            type="Line"
            color={currentColor}
            currentColor={currentColor}
          />
        </motion.div>
      </motion.div>

      {/* MedicalPro Branding */}
      <motion.div
        className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md p-6 md:col-span-3 space-y-6 mt-3 card-glow relative overflow-hidden"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-warning-300 to-transparent opacity-60"></div>

        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-6 w-1 bg-warning-500 rounded-full"></div>
            <p className="text-xl font-display font-bold text-gray-800 dark:text-gray-100">
              MedicalPro Branding
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span
            className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#f59e0b20",
              color: "#f59e0b",
            }}
          >
            16 APR, 2021
          </span>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {medicalproBranding.data.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              variants={statsVariants}
              custom={index}
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                {data.title}
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                {data.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Teams
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {medicalproBranding.teams.map((team, teamIndex) => (
              <motion.span
                key={teamIndex}
                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#f59e0b20",
                  color: "#f59e0b",
                }}
                variants={itemVariants}
                custom={teamIndex}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {team.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Leaders
          </p>
          <motion.div
            className="flex space-x-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {medicalproBranding.leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={leader.image}
                  alt="Leader"
                  className="rounded-full w-12 h-12 object-cover border-2 border-white dark:border-gray-700"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-700"></span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-between items-center mt-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              text="Add New"
              iconBg={currentColor}
              iconColor="white"
              borderRadius="lg"
              width="7em"
              height="2.5em"
            />
          </motion.div>
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            36 Recent Transactions
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ecommerce;
