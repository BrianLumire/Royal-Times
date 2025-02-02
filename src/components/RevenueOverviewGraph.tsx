"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", revenue: "150000" },
    { name: "Feb", revenue: "200000" },
    { name: "Mar", revenue: "220000" },
    { name: "Apr", revenue: "300000" },
    { name: "May", revenue: "220000" },
    { name: "Jun", revenue: "180000" },
    { name: "Jul", revenue: "280000" },
    { name: "Aug", revenue: "250000" },
    { name: "Sep", revenue: "260000" },
    { name: "Oct", revenue: "290000" },
    { name: "Nov", revenue: "190000" },
    { name: "Dec", revenue: "110000" },
];

const RevenueOverviewGraph = () => {
    return (
        <div className="mt-4">
            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tick={{ fill: "#36454F", fontSize: "10px" }} 
                        tickLine={false} 
                        tickMargin={10} 
                    />
                    <YAxis 
                        axisLine={false} 
                        tick={{ fill: "#36454F", fontSize: "11px" }} 
                        tickLine={false} 
                        tickMargin={12} 
                        tickFormatter={(value) => `${value / 1000}k`}
                        domain={[0, 400000]}
                    />
                    <Tooltip />
                    <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#F58735" 
                        strokeWidth={2} 
                        dot={false} 
                        activeDot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenueOverviewGraph;
