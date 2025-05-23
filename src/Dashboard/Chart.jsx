import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';


const Chart = () => {

    const data = [
        { name: "Student", value: 4000 },
        { name: "Student", value: 4700 },
        { name: "Student", value: 7000 },
        { name: "Student", value: 4500 },
        { name: "Student", value: 9000 },
    ]
    return (
        <div className='mx-auto w-[1150px] mt-10 flex items-center'>
            <div className='w-[60%]'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>

            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    {/* <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Chart;