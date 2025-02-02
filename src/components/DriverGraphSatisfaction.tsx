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
} from "recharts";

// Define the data structure
interface SatisfactionData {
  name: string;
  value: number;
}

const data: SatisfactionData[] = [
  { name: "5 Stars", value: 200 },
  { name: "4 Stars", value: 150 },
  { name: "3 Stars", value: 100 },
  { name: "2 Stars", value: 50 },
  { name: "1 Star", value: 20 },
];

// Define the props for the custom bar shape
interface CustomBarShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Custom shape for bars with curved tips
const CustomBarShape = (props: CustomBarShapeProps) => {
  const { x, y, width, height } = props;

  // Curved tip radius
  const radius = 8;

  return (
    <g>
      <path
        d={`
          M${x},${y + radius}
          a${radius},${radius} 0 0 1 ${radius},-${radius}
          h${width - 2 * radius}
          a${radius},${radius} 0 0 1 ${radius},${radius}
          v${height - 2 * radius}
          a${radius},${radius} 0 0 1 -${radius},${radius}
          h-${width - 2 * radius}
          a${radius},${radius} 0 0 1 -${radius},-${radius}
          z
        `}
        fill="#8280FF"
      />
    </g>
  );
};

const DriverSatisfactionGraph = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive text size
  const getTextSize = () => {
    if (screenWidth <= 640) {
      return 10;
    } else if (screenWidth <= 1024) {
      return 12;
    } else {
      return 14;
    }
  };

  return (
    <div className="mt-4">
      {/* Chart */}
      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data}>
          {/* Hide X and Y axis lines */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: getTextSize(), fill: "#000" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: getTextSize(), fill: "#000" }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 50, 100, 150, 200]}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            shape={(props: any) => <CustomBarShape {...props} />} // Pass props correctly
            barSize={screenWidth <= 640 ? 20 : 30}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#F58735" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DriverSatisfactionGraph;