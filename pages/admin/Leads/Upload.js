// import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardTitle,
//   CardBody,
//   Button,
//   Table,
// } from "reactstrap";

// const Upload = ({ onUpload }) => {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const text = e.target.result;
//         const dataArray = text.split("\n").map(row => row.split(","));
//         setData(dataArray);
//         onUpload(dataArray);
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <Card>
//     <div>
//       <input type="file" accept=".csv" onChange={handleFileChange} style={{
//         marginLeft:'1rem',
//         marginTop:'2rem',
//         marginBottom:'2rem'
//       }}/> 
//       <Button className="btn" color="primary" onClick={handleUpload} style={{
//         marginLeft:'4rem'
//       }}>
//         Upload
//       </Button>

//       {data.length > 0 && (
//         <div>
//               <Card>
//       <CardTitle  tag="h3" className="border-bottom p-3 mb-0">Uploaded Data</CardTitle>
//     </Card>
//           <Table>
//             <thead>
//               <tr>
//                 {data[0].map((cell, index) => (
//                   <th key={index}>{cell}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.slice(1).map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {row.map((cell, cellIndex) => (
//                     <td key={cellIndex}>{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}
//     </div>
//     </Card>
//   );
// };

// const ParentComponent = () => {
//   const handleUpload = (data) => {
//     // Handle uploaded data here
//     console.log(data);
//   };

//   return (
//     <Card>
//       <CardTitle  tag="h3" className="border-bottom p-3 mb-0">Upload CSV File</CardTitle>
//       <Upload onUpload={handleUpload} />
//     </Card>
//   );
// };

// export default ParentComponent;

import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  Table,
} from "reactstrap";

const Upload = ({ onUpload, onAddToLeadList }) => { // Add onAddToLeadList prop
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const dataArray = text.split("\n").map(row => row.split(","));
        setData(dataArray);
        onUpload(dataArray);
      };
      reader.readAsText(file);
    }
  };

  const handleAddToLeadList = () => {
    onAddToLeadList(data);
  };

  return (
    <Card>
      <div>
        <input type="file" accept=".csv" onChange={handleFileChange} style={{
          marginLeft:'1rem',
          marginTop:'2rem',
          marginBottom:'2rem'
        }}/> 
        <Button className="btn" color="primary" onClick={handleUpload} style={{
          marginLeft:'4rem'
        }}>
          Upload
        </Button>
        <Button className="btn" color="success" onClick={handleAddToLeadList} style={{
          marginLeft:'2rem'
        }}>
          Add to Lead List
        </Button>

        {data.length > 0 && (
          <div>
            <Card>
              <CardTitle  tag="h3" className="border-bottom p-3 mb-0">Uploaded Data</CardTitle>
            </Card>
            <Table>
              <thead>
                <tr>
                  {data[0].map((cell, index) => (
                    <th key={index}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Upload;

// import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardTitle,
//   CardBody,
//   Button,
//   Table,
// } from "reactstrap";

// const Upload = ({ onUpload }) => {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const text = e.target.result;
//         const dataArray = text.split("\n").map(row => row.split(","));
//         setData(dataArray);
//         onUpload(dataArray);
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <Card>
//       <div>
//         <input type="file" accept=".csv" onChange={handleFileChange} style={{
//           marginLeft:'1rem',
//           marginTop:'2rem',
//           marginBottom:'2rem'
//         }}/> 
//         <Button className="btn" color="primary" onClick={handleUpload} style={{
//           marginLeft:'4rem'
//         }}>
//           Upload
//         </Button>

//         {data.length > 0 && (
//           <div>
//             <Card>
//               <CardTitle  tag="h3" className="border-bottom p-3 mb-0">Uploaded Data</CardTitle>
//             </Card>
//             <Table>
//               <thead>
//                 <tr>
//                   {data[0].map((cell, index) => (
//                     <th key={index}>{cell}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.slice(1).map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     {row.map((cell, cellIndex) => (
//                       <td key={cellIndex}>{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         )}
//       </div>
//     </Card>
//   );
// };

// export default Upload;
