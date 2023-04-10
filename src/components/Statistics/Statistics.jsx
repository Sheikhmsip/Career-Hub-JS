import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Tooltip } from "recharts";

const data = [
    { name: "Assignment-1", value: 60 },
    { name: "Assignment-2", value: 30 },
    { name: "Assignment-3", value: 60 },
    { name: "Assignment-4", value: 58 },
    { name: "Assignment-5", value: 60 },
    { name: "Assignment-6", value: 56 },
    { name: "Assignment-7", value: 60 },
    { name: "Assignment-8", value: 60 }
];

const renderActiveShape = (data) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = data;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g className='mx-auto'>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 5}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Result ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * -30}
                y={ey}
                dy={30}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Total percentage ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


const Statistics = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    return (

        <div>
            <p className='text-center mt-10 pt-10 text-4xl font-semibold text-[#8884D8]'>Assignment Mark Statistics</p>
            <PieChart width={700} height={500} className='mx-auto pl-8'>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={250}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
                <Tooltip></Tooltip>
            </PieChart>
        </div>

    );
};

export default Statistics;

// export default function App() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={renderActiveShape}
//         data={data}
//         cx={200}
//         cy={200}
//         innerRadius={60}
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//         onMouseEnter={onPieEnter}
//       />
//     </PieChart>
//   );
// }
