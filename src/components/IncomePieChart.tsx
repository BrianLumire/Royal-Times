"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { name: "Cash", value: 2500000, color: "#F58735" },
  { name: "Bank & Mpesa", value: 500000, color: "#E0E0E0 " },
];

// Calculate total value for percentage calculation
const totalValue = data.reduce((acc, item) => acc + item.value, 0);

const Plansubs = () => {
  const [activeColor, setActiveColor] = useState<string>("");
  const [tooltipColor, setTooltipColor] = useState<string>("");

  const handleMouseEnter = (color: string): void => {
    setActiveColor(color);
    setTooltipColor(color);
  };

  const handleMouseLeave = (): void => {
    setActiveColor("");
    setTooltipColor("");
  };

  return (
    <div className="mt-5">
      {/* Pie Chart with Tooltip */}
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={75}
            paddingAngle={2}
            startAngle={380}
            endAngle={-270}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                onMouseEnter={() => handleMouseEnter(entry.color)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              border: "0.3px solid black",
              color: tooltipColor,
            }}
            itemStyle={{
              fontSize: "14px",
            }}
            formatter={(value, name) => [value, name]}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Dynamically render subscription details with percentages */}
      {data.map((item, index) => {
        const percentage = ((item.value / totalValue) * 100).toFixed(1); // Calculate percentage

        return (
          <div key={index} className="flex justify-between mt-6">
            <div className="flex gap-3 items-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span
                className={`2xl:text-sm font-inter text-sm font-medium ${
                  activeColor === item.color ? `text-[${item.color}]` : ""
                }`}
              >
                {item.name}
              </span>
            </div>
            <span
              className={`2xl:text-sm font-inter text-sm font-medium ${
                activeColor === item.color ? `text-[${item.color}]` : ""
              }`}
            >
              Ksh {item.value.toLocaleString()} ({percentage}%)
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Plansubs;
