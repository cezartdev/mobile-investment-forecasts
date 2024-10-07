import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MyLineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            },
        ],
    };

    return (
        <View>

            <LineChart
                data={data}
                width={400} // Dimensiones del gráfico
                height={220}
                yAxisLabel="$"
                chartConfig={{
                    backgroundColor: '#009BFF',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#f1f1f1',
                    decimalPlaces: 2, // Opcional
                    color: (opacity = 1) => `rgba(0, 155, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 155, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#4C4DDC',
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

export default MyLineChart;