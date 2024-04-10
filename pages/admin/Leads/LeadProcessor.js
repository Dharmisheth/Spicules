const LeadProcessor = ({ csvData }) => {
    // You need to implement the logic to parse the CSV data and create leads
    const processData = (data) => {
      // Here you can parse the CSV data and create leads
      console.log(data);
    };
  
    return <div>{csvData && processData(csvData)}</div>;
  };
  
  export default LeadProcessor;