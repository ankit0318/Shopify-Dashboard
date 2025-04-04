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

const Ecommerce = () => {
  const {currentColor,currentMode} = useStateContext();
  return (
    <div
      className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] px-9 gap-3 
    "
    >
     
      <div
        className={`rounded-lg md:w-80 shadow-md p-4 flex flex-col justify-between pt-7 bg-cover bg-no-repeat bg-bottom bg-white dark:bg-secondary-dark-bg`}
        style={{
          backgroundImage: `url('/welcome-bg.svg')`,
          backgroundPosition: `calc(50% - 20px) bottom`,
        }}
      >
        <div className={`flex justify-between items-center`}>
          <div className="flex flex-col">
            <p className="text-slate-500 dark:text-slate-400">Earnings</p>
            <p className="font-normal text-lg text-gray-800 dark:text-gray-100">
              $63,488.56
            </p>
          </div>
          <div className="pr-4">
            <Button
              icon={<BsCurrencyDollar />}
              iconColor="white"
              iconBg={currentColor}
              borderRadius={"full"}
              width={"2.5em"}
              height={"2.5em"}
            />
          </div>
        </div>

        <Button
          text="Download"
          borderRadius={"lg"}
          iconBg={currentColor}
          iconColor={"white"}
          size="sm"
          width="6em"
          height="2.3em"
        />
      </div>
      {/* Remaining grid item/ first line */}
      {earningData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          icon={item.icon}
          iconColor={item.iconColor}
          iconBg={item.iconBg}
          amount={item.amount}
          percentage={item.percentage}
          percentageColor={item.pcColor}
        />
      ))}

      {/* Second line */}
      {/* second line first grid item */}
      <div className="grid grid-cols-2 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md p-6 md:col-span-3 row-span-2 mt-3 auto-rows-min">
        <div className="col-span-2 flex justify-between pr-4">
          <p className="text-2xl font-semibold">Revenue Updates</p>
          <div className="flex items-center space-x-4 max-md:hidden">
            <p className="flex items-center text-red-500">
              <AiFillCaretRight /> Expense
            </p>
            <p className="flex items-center text-green-500">
              <AiFillCaretRight /> Budget
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center pl-4 mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-3xl font-semibold">$93,438</p>
            <span className="justify-center text-sm font-medium pl-2 text-green-600">
              23%
            </span>
          </div>
          <p className="text-lg text-gray-500">Budget</p>
          <p className="text-3xl font-semibold mt-4">$48,487</p>
          <p className="text-lg text-gray-500">Expense</p>

          <SparkLine
            currentColor="blue"
            id="line-sparkLine"
            type="Line"
            height="80px"
            width="250px"
            data={SparklineAreaData}
            color="blue"
            lineGap={true} // Adding gap between data points
          />
          <div className="mt-5">
            <Button
              text="Download Report"
              borderRadius={"lg"}
              iconBg={"cyan"}
              iconColor={"white"}
              size="sm"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 max-md:hidden">
        <Stacked
        id="stacked-sparkline"
        height="360px"
        width="320px"
        data={SparklineAreaData}
        type="Column"
        color="cyan"
        currentColor="cyan"
        background={currentMode === "Dark" ? "transparent" : "#fff"} // Set background based on mode
        textColor={currentMode === "Dark" ? "white" : "black"} // Set text color based on mode
      />
        </div>
      </div>
      {/* second line / second grid item */}
      <div style={{ backgroundColor: currentColor }} className=" lg:col-span-2 md:col-span-3 dark:bg-secondary-dark-bg rounded-lg shadow-md p-4 w-full grid grid-cols-1 gap-6 justify-between mt-3 auto-rows-min">
        <div className="flex justify-between text-white">
          <p className="text-xl font-medium">Earning</p>
          <div className="flex flex-col">
            <p className="text-xl font-medium">$63,448.78</p>
            <p className="text-lg font-medium">Monthly Revenue</p>
          </div>
        </div>

        <SparkLine
          id="monthly-revenue-sparkline"
          height="100em"
          width="full"
          data={SparklineAreaData}
          type="Column"
          color="white"
          currentColor="white"
        />
      </div>

      {/* second line / third grid item */}
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl shadow-md p-8 flex justify-center items-center lg:col-span-2 md:col-span-3 auto-rows-min">
        <div>
          <p className="text-2xl font-semibold">$43,246</p>
          <p className="text-gray-400">Yearly sales</p>
        </div>

        <div className="w-40">
          <Pie
            id="pie-chart"
            data={ecomPieChartData}
            legendVisiblity={false}
            height="160px"
          />
        </div>
      </div>
      {/* third line grid item */}
      <div className=" bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md p-6 md:col-span-3 lg:col-span-2 mt-3">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">Recent Transactions</p>
          <select className="border border-gray-300 dark:border-gray-600 dark:bg-secondary-dark-bg rounded-md p-2 text-gray-600 dark:text-gray-300">
            <option>May 2021</option>
            <option>April 2021</option>
            <option>March 2021</option>
          </select>
        </div>
        <div className="space-y-6">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {/* Replace this line */}
                <Button
                  icon={transaction.icon}
                  iconBg={transaction.iconBg}
                  iconColor={transaction.iconColor}
                  borderRadius="lg"
                  width="4em"
                  height="4em"
                />
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-sm text-gray-500">{transaction.desc}</p>
                </div>
              </div>
              <p
                className={`font-medium `}
                style={{ color: transaction.pcColor }}
              >
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
        <br />
        <hr />
        <div className="flex justify-between items-center mt-4">
          <Button
            text="Add"
            iconBg="orange"
            iconColor="white"
            borderRadius="lg"
            width="6em"
            height="2.5em"
          />

          <p className="text-gray-500">36 Recent Transactions</p>
        </div>
      </div>
      {/* third line grid item */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md p-6 md:col-span-3 mt-3">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold mb-4">Sales Overview</p>

          <select className="border border-gray-300 rounded-md p-2 text-gray-600">
            <option value="1">Last Week</option>
            <option value="2">Last Month</option>
            <option value="3">Last Year</option>
          </select>
        </div>
        <LineChart
  id="sales-overview-chart"
  height="400px"
  width="100%"
  data={lineCustomSeries}
  primaryXAxis={{
    ...LinePrimaryXAxis,
    labelStyle: currentMode === 'Dark' ? { color: 'white' } : {}, // Set X-axis label color to white in dark mode
            titleStyle: currentMode === 'Dark' ? { color: 'white' } : {},
  }}
  primaryYAxis={{
    ...LinePrimaryYAxis,
    labelStyle: currentMode === 'Dark' ? { color: 'white' } : {}, // Set X-axis label color to white in dark mode
    titleStyle: currentMode === 'Dark' ? { color: 'white' } : {},
  }}
  background="transparent" // Set background to transparent
  chartArea={{ border: { width: 0 } }} // Remove chart border
/>
      </div>

      {/* fourth line grid item */}

      <div className="bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md p-6 md:col-span-3 lg:col-span-2">
        <div className="flex justify-between items-center mb-4 space-y-6">
          <p className="text-xl font-semibold">Weekly Stats</p>
        </div>
        <div className="space-y-6 mt-10">
          {weeklyStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Button
                  icon={stat.icon}
                  iconBg={stat.iconBg}
                  iconColor={"white"}
                  borderRadius="full"
                  width="4em"
                  height="4em"
                />
                <div>
                  <p className="font-medium">{stat.title}</p>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              </div>
              <p className="font-medium" style={{ color: stat.pcColor }}>
                {stat.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
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
            color="#FB9678"
            currentColor="#FB9678"
          />
        </div>
      </div>

      {/* fourth line second grid item */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md p-6 md:col-span-3 space-y-6">
        <div className="flex justify-between items-center ">
          <p className="text-lg font-semibold">MedicalPro Branding</p>
        </div>

        <div className="flex items-center space-x-2 ">
          <span className="bg-orange-200 text-orange-600 px-3 py-1 rounded-md text-sm">
            16 APR, 2021
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4  ">
          {medicalproBranding.data.map((data, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-gray-500 dark:text-white text-sm">{data.title}</p>
              <p className="font-medium">{data.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className=" text-md font-semibold  ">Teams</p>
          <div className="flex space-x-2 mt-3">
            {medicalproBranding.teams.map((team, teamIndex) => (
              <span
                key={teamIndex}
                className="bg-orange-200 text-orange-600 px-3 py-1 rounded-md text-sm"
              >
                {team.name}
              </span>
            ))}
          </div>
        </div>

        <div className="">
          <p className="text-md font-semibold  ">Leaders</p>
          <div className="flex space-x-5 mt-3">
            {medicalproBranding.leaders.map((leader, index) => (
              <img
                src={leader.image}
                key={index}
                alt="Leader"
                className="rounded-full w-12 h-12"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <Button
            text="Add"
            iconBg="orange"
            iconColor="white"
            borderRadius="lg"
            width="6em"
            height="2.5em"
          />
          <p className="text-gray-500 text-sm">36 Recent Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
