import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import './markett.css';

const MarketChart = () => {
  const [stocks, setStocks] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'stock-chart',
      toolbar: {
        show: false,
      },
      foreColor: '#fff',
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value.toFixed(2);
        },
        style: {
          colors: ['#fff'],
        },
      },
    },
    theme: {
      mode: 'dark',
    },
    series: [
      {
        name: 'Price',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const demoData = [
      { symbol: 'BTC', price: 40000, change: 2.5 },
      { symbol: 'BTC', price: 42000, change: -1.8 },
      { symbol: 'BTC', price: 41000, change: 1.2 },
      { symbol: 'BTC', price: 43000, change: 0.5 },
      { symbol: 'BTC', price: 44000, change: -3.0 },
       { symbol: 'BTC', price: 90000, change: 9.0 },
        { symbol: 'BTC', price: 47000, change: 2.5 },
      { symbol: 'BTC', price: 44700, change: -3.9 },
       { symbol: 'BTC', price: 98000, change: 6.0 },
        { symbol: 'BTC', price: 41000, change: 1.2 },
      { symbol: 'BTC', price: 43000, change: 0.5 },
      { symbol: 'BTC', price: 44000, change: -3.0 },
       { symbol: 'BTC', price: 90000, change: 9.0 },
        { symbol: 'BTC', price: 47000, change: 2.5 },
      { symbol: 'BTC', price: 44700, change: -3.9 },
       { symbol: 'BTC', price: 98000, change: 6.0 },
        { symbol: 'BTC', price: 41000, change: 1.2 },
      { symbol: 'BTC', price: 43000, change: 0.5 },
      { symbol: 'BTC', price: 44000, change: -3.0 },
       { symbol: 'BTC', price: 90000, change: 9.0 },
        { symbol: 'BTC', price: 47000, change: 2.5 },
      { symbol: 'BTC', price: 44700, change: -3.9 },
       { symbol: 'BTC', price: 98000, change: 6.0 },
    ];

    setStocks(demoData);
    const categories = demoData.map(stock => stock.symbol);
    const seriesData = demoData.map(stock => stock.price);

    setChartOptions(prevOptions => ({
      ...prevOptions,
      xaxis: {
        categories,
      },
      series: [
        {
          name: 'Price',
          data: seriesData,
        },
      ],
    }));
  }, []);

  return (
    <div style={{backgroundColor:"black"}}>

      <div className="market-container">
      <h1>Trading Market</h1>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>${stock.price}</td>
              <td className={stock.change > 0 ? 'positive' : 'negative'}>
                {stock.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="line"
          height={350}
          
        />
      </div>
    </div>

    </div>
  );
};

export default MarketChart;
