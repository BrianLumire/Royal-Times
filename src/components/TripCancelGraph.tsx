"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
  TooltipProps,
  BarProps,
} from "recharts";

// Define the data structure
interface CancelReasonData {
  reasonText: string;
  count: number;
  iconSrc: string;
}

const data: CancelReasonData[] = [
  { reasonText: "Driver asked me to cancel", count: 48000, iconSrc: "/identifier-1.svg" },
  { reasonText: "Driver took too long", count: 28000, iconSrc: "/identifier-6.svg" },
  { reasonText: "Requested by mistake", count: 200000, iconSrc: "/identifier-3.svg" },
  { reasonText: "Changed my trip", count: 350000, iconSrc: "/identifier-4.svg" },
  { reasonText: "Disagreement", count: 250000, iconSrc: "/identifier-2.svg" },
  { reasonText: "Other", count: 370000, iconSrc: "/identifier-7.svg" },
];

// Custom shape for bars with rounded top only
const CustomBarShape = (props: BarProps) => {
  // Destructure props with default values to avoid undefined issues
  const { x = 0, y = 0, width = 0, height = 0, fill } = props;
  const radius = 4;

  // Ensure all values are numbers before performing arithmetic operations
  const xNum = typeof x === 'number' ? x : 0;
  const yNum = typeof y === 'number' ? y : 0;
  const widthNum = typeof width === 'number' ? width : 0;
  const heightNum = typeof height === 'number' ? height : 0;

  return (
    <g>
      <path
        d={`
          M${xNum},${yNum + heightNum}
          V${yNum + radius}
          a${radius},${radius} 0 0 1 ${radius},-${radius}
          h${widthNum - 2 * radius}
          a${radius},${radius} 0 0 1 ${radius},${radius}
          V${yNum + heightNum}
          Z
        `}
        fill={fill}
      />
    </g>
  );
};

// Custom Tooltip
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: {
    value: number;
    payload: {
      fill: string;
    };
  }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#1E2A3B",
          padding: "8px",
          borderRadius: "10px",
          color: "#FFF",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: payload[0].payload.fill,
            marginRight: "8px",
          }}
        />
        {`${payload[0].value} Trips`}
      </div>
    );
  }
  return null;
};

const TripCancelGraph = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive text size
  const getTextSize = () => {
    if (screenWidth <= 640) return 10;
    if (screenWidth <= 1024) return 12;
    return 14;
  };

  // Define colors for bars
  const barColors = ["#21A366", "#022374", "#E0C6FD", "#03F0E2", "#3D42DF", "#B68E00"];

  return (
    <div className="mt-4">
      {/* Chart */}
      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data}>
          {/* X Axis (Hidden markers on small screens) */}
          <XAxis
            dataKey="reasonText"
            tick={screenWidth > 640 ? { fontSize: getTextSize(), fill: "#000" } : false}
            axisLine={{ stroke: "#000" }}
            tickLine={false}
            interval={0}
          />
          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: getTextSize(), fill: "#000" }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 100000, 200000, 300000, 400000, 500000, 600000]}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          {/* Grid Lines */}
          <CartesianGrid horizontal={true} vertical={false} stroke="#E0E0E0" />
          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />
          {/* Bars */}
          <Bar
            dataKey="count"
            shape={CustomBarShape}
            barSize={screenWidth <= 640 ? 10 : 15}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripCancelGraph;