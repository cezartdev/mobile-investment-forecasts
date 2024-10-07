import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { colors, shapes } from "../utils/theme";

const MyPieChart = () => {
    // Datos para el gráfico de pie
    const data = [
        {
            name: 'Technologies',
            population: 20,
            color: colors.primaryDark,
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'February',
            population: 20,
            color: '#4C4DDC',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'March',
            population: 20,
            color: '#50c878',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'April',
            population: 20,
            color: '#f4a460',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'May',
            population: 20,
            color: '#FF8C00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];

    return (
        <View>
            <PieChart
                data={data}
                width={330} // Dimensiones del gráfico
                height={220}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: colors.primaryDark,
                    backgroundGradientTo: colors.primaryDark,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                absolute
                style={{
                    marginVertical: 8,
                    borderRadius: shapes.cardRadius,
                }}
            />
        </View>
    );
};

export default MyPieChart;