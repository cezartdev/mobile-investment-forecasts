import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colors, shapes } from "../utils/theme"


const MyLineChart = () => {
    const [chartWidth, setChartWidth] = useState(0); // Estado para almacenar el ancho dinámico
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            },
        ],
    };

    return (
        <View onLayout={(event) => {
            const { width } = event.nativeEvent.layout; // Capturar el ancho disponible del contenedor
            setChartWidth(width); // Guardar el ancho en el estado
        }}>

            {chartWidth > 0 && ( // Renderizar el gráfico solo cuando tengamos el ancho disponible
                <LineChart
                    data={data}
                    width={chartWidth} // Ancho dinámico basado en el contenedor
                    height={220} // Altura fija o ajustable
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: "#ffffff",
                        backgroundGradientFrom: colors.primaryDark,
                        backgroundGradientTo: colors.secondaryDark,
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: shapes.cardRadius,
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#ffffff',
                        },
                    }}
                    style={{
                        flex: 1,
                        borderRadius: shapes.cardRadius,
                    }}
                />
            )}
        </View>
    );
};

export default MyLineChart;