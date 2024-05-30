import React from "react";
import { LineChart } from "@mui/x-charts";
import { Container } from "@mui/material";

function RevenueChart () {
    const dates = [];
    for (let i=1; i<=31; i++) {
        const newDate = new Date(2024, 4, i);
        dates[i-1] = newDate.getDate();
    };

    const dailyRev = [0];
    const cumRev = [0];
    for (let i=1; i<=30; i++) {
        const randRev = Math.floor(Math.random()*100);
        dailyRev[i] = randRev;
        cumRev[i] = cumRev[i-1] + randRev;
    }

    const currencyFormatter = (value) => {
        return `$${value.toLocaleString()}`;
    };

    return (
        <>
            <Container align="center">
                <LineChart
                    xAxis={[{ 
                        data: dates,
                        min: 1,  
                        max: 31,
                    }]}
                    series={[
                        {
                            id: "daily",
                            label: "Daily Revenue",
                            data: dailyRev,
                            area: true,
                            showMark: false,
                            stack: "total"
                        },
                        {
                            id: "cumulative",
                            label: "Cumulative Revenue",
                            data: cumRev,
                            area: true,
                            showMark: false,
                            stack: "total"
                        }
                    ]}
                    width={500}
                    height={300}
                    yAxis={[{
                        valueFormatter: currencyFormatter
    
                    }]}
                />
            </Container>
        </>
    )
};

export default RevenueChart;