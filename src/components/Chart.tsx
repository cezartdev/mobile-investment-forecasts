import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colors, shapes } from "../utils/theme"

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
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: colors.primaryDark,
                    backgroundGradientTo: colors.primaryDark,
                    decimalPlaces: 2, // Opcional
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: shapes.cardRadius,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#4C4DDC',
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: shapes.cardRadius,
                }}
            />
        </View>
    );
};

export default MyLineChart;