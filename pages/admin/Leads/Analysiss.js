import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponenet'; // Import the ChartComponent

const List = () => {
  // Define state to store leads
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Retrieve leads data from local storage on component mount
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    }
  }, []);

  // Aggregate lead data based on status and source
  const aggregateData = () => {
    const aggregatedData = {};
    leads.forEach((lead) => {
      const key = `${lead.status}-${lead.source}`;
      if (aggregatedData[key]) {
        aggregatedData[key]++;
      } else {
        aggregatedData[key] = 1;
      }
    });
    return aggregatedData;
  };

  // Function to convert aggregated data to series format for chart
  const convertToSeries = (aggregatedData) => {
    const series = [];
    const categories = [];
    Object.entries(aggregatedData).forEach(([key, value]) => {
      const [status, source] = key.split('-');
      if (!series.find((s) => s.name === status)) {
        series.push({ name: status, data: [] });
      }
      series.find((s) => s.name === status).data.push(value);
      if (!categories.includes(source)) {
        categories.push(source);
      }
    });
    return { series, categories };
  };

  const aggregatedData = aggregateData();
  const { series, categories } = convertToSeries(aggregatedData);

  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: categories,
    },
  };

  // Function to handle lead deletion
  const handleDelete = (index) => {
    const updatedLeads = leads.filter((lead, i) => i !== index);
    setLeads(updatedLeads);
    // Update local storage
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString(); // Customize as per your requirement
  };

  return (
<div>

      {/* Render the ChartComponent with appropriate props */}
      <ChartComponent options={options} series={series} />
    </div>
  );
};

export default List;
