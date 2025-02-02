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
    { name: "Jan", revenue: "130" },
    { name: "Feb", revenue: "150" },
    { name: "Mar", revenue: "300" },
    { name: "Apr", revenue: "300" },
    { name: "May", revenue: "200" },
    { name: "Jun", revenue: "110" },
    { name: "Jul", revenue: "210" },
    { name: "Aug", revenue: "290" },
    { name: "Sep", revenue: "220" },
    { name: "Oct", revenue: "280" },
    { name: "Nov", revenue: "295" },
    { name: "Dec", revenue: "250" },
];

const TripTrendsGraph = () => {
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
                        domain={[0, 400]}
                    />
                    <Tooltip />
                    <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#007C0C" 
                        strokeWidth={2} 
                        dot={false} 
                        activeDot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TripTrendsGraph;
