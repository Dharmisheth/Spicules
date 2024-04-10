import { useState } from "react";
import Upload from "../Leads/Upload";
import LeadProcessor from "../Leads/LeadProcessor";

const Dashboard = () => {
  const [csvData, setCsvData] = useState(null);

  const handleUpload = (data) => {
    setCsvData(data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Upload onUpload={handleUpload} />
      <LeadProcessor csvData={csvData} />
    </div>
  );
};

export default Dashboard;
