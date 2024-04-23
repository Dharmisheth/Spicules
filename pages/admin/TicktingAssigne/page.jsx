// import React, { useState, useEffect } from "react";

// const TicketsPage = () => {
//   const [IsPopupOpen, setIsPopupOpen] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const popUpMenu = () => {
//     setIsPopupOpen(!IsPopupOpen);
//   };
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     selectValue: "",
//     date: "",
//   });
//   const [tickettableData, setTableData] = useState([]);

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editId !== null) {
//       // If editing, update the existing item
//       const updatedData = tickettableData.map((item) =>
//         item.id === editId ? { ...item, ...formData } : item
//       );
//       setTableData(updatedData);
//       localStorage.setItem("tickettableData", JSON.stringify(updatedData));
//       setEditId(null);
//     } else {
//       // If not editing, add a new item at the beginning of the array
//       const id = tickettableData.length + 1;
//       const newData = { id, ...formData };
//       const updatedTableData = [newData, ...tickettableData]; // Prepend new data
//       setTableData(updatedTableData);
//       localStorage.setItem("tickettableData", JSON.stringify(updatedTableData));
//     }
//     setIsPopupOpen(false);
//     // Reset form data
//     setFormData({
//       title: "",
//       description: "",
//       selectValue: "",
//       date: "",
//     });
//   };

//   const handleEdit = (id) => {
//     const itemToEdit = tickettableData.find((item) => item.id === id);
//     setFormData(itemToEdit);
//     setEditId(id);
//     setIsPopupOpen(true);
//   };

//   const handleRemove = (id) => {
//     const updatedData = tickettableData.filter((item) => item.id !== id);
//     setTableData(updatedData);
//     localStorage.setItem("tickettableData", JSON.stringify(updatedData));
//   };

//   // Count tickets by status
//   const countTicketsByStatus = (status) =>
//     tickettableData.filter((ticket) => ticket.status === status).length;
//   useEffect(() => {
//     // Load data from localStorage when component mounts
//     const savedData = localStorage.getItem("tickettableData");
//     if (savedData) {
//       setTableData(JSON.parse(savedData)); // Remove array wrapping here
//     }
//   }, []);

//   return (
//     <div>
     

//       <div className="flex flex-row gap-10 justify-end pr-8">
//         <button
//           onClick={popUpMenu}
//           className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  from-cyan-700 to-cyan-950 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//         >
//           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Create Ticket
//           </span>
//         </button>
//       </div>

//       <div className="flex flex-row justify-center gap-6 pb-4 pt-8">
//         <a
//           href="#"
//           class="block max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-[250px]"
//         >
//           <h5 class="mb-2 text-[25px] font-bold tracking-tight text-white dark:text-white text-center">
//             Total Tickets
//           </h5>
//           <p class="font-normal text-white dark:text-gray-400 text-center text-[50px]">
//             {tickettableData.length}
//           </p>
//         </a>
//         <a
//           href="#"
//           class="bg-green-500 block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-green-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-[250px]  "
//         >
//           <h5 class="mb-2 text-[25px] font-bold tracking-tight text-white dark:text-white text-center">
//             Success
//           </h5>
//           <p class="font-normal text-white dark:text-gray-400 text-center text-[50px] ">
//             {countTicketsByStatus("success")}
//           </p>
//         </a>
//         <a
//           href="#"
//           class="block max-w-sm p-6 bg-red-500 border border-gray-200 rounded-lg shadow hover:bg-red-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-[250px]"
//         >
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">
//             Pending
//           </h5>
//           <p class="font-normal text-white dark:text-gray-400 text-center text-[50px]">
//             {countTicketsByStatus("pending")}
//           </p>
//         </a>
//       </div>
//       {/* popup on create Ticket */}
//       {IsPopupOpen && (
//         <>
//           <div className="backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex flex-col justify-center items-center w-full md:inset-0 max-h-full">
//             <div className="relative p-4 w-full max-w-md max-h-full">
//               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                 <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Create New Ticket
//                   </h3>
//                   <button
//                     type="button"
//                     className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                     data-modal-toggle="crud-modal"
//                     onClick={() => setIsPopupOpen(false)}
//                   >
//                     <svg
//                       className="w-3 h-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 14"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                       />
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                   </button>
//                 </div>
//                 <form className="p-4 md:p-5 ">
//                   <div className=" mb-4 flex flex-col gap-5">
//                     <label>
//                       Ticket Title
//                       <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                       />
//                     </label>

//                     <label>
//                       Description
//                       <input
//                         type="text"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                       />
//                     </label>

//                     <select
//                       name="selectValue"
//                       value={formData.selectValue}
//                       onChange={handleChange}
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     >
//                       <option value="">Select Priority</option>
//                       <option value="low">Low</option>
//                       <option value="medium">Medium</option>
//                       <option value="high">High</option>
//                     </select>
//                     <label>
//                       Date
//                       <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                       />
//                     </label>
//                     <button
//                       type="submit"
//                       id="save"
//                       onClick={handleSubmit}
//                       className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//                     >
//                       <span className="relative px-5 py-2.5 transition-all ease-in duration-100 focus:ring-white-500 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                         Save
//                       </span>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* ticket Table */}
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
//         <table className="table table-data w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Ticket ID
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Title
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Description
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Priority
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Date
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 Assigne
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             {tickettableData.map((data) => (
//               <tr key={data.id} className="">
//                 <td scope="col" className="px-6 py-3">
//                   {data.id}
//                 </td>
//                 <td scope="col" className="px-6 py-3">
//                   {data.title}
//                 </td>
//                 <td scope="col" className="px-6 py-3">
//                   {data.description}
//                 </td>
//                 <td
//                   scope="col"
//                   className="px-6 py-3"
//                   style={{
//                     textColor:
//                       data.selectValue == "low"
//                         ? "green"
//                         : data.selectValue == "medium "
//                         ? "yellow"
//                         : "red",
//                   }}
//                 >
//                   {data.selectValue}
//                 </td>
//                 <td scope="col" className="px-6 py-3">
//                   {data.date}
//                 </td>

//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div
//                       className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"
//                       name
//                     ></div>
//                     Pending
//                   </div>
//                 </td>
//                 <td className="flex items-center">
//                   <button
//                     onClick={() => handleEdit(data.id)}
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 {/* Remove button */}
//                 <td className="flex items-center">
//                   <button
//                     onClick={() => handleRemove(data.id)}
//                     className="font-medium text-red-600 dark:text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </td>

//                 <td scope="col" className="px-4 py-2">
//                   <a
//                     href="#_"
//                     class="relative inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
//                   >
//                     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-blue duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
//                       <svg
//                         class="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         ></path>
//                       </svg>
//                     </span>
//                     <span class="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
//                       Button Text
//                     </span>
//                     <span class="relative invisible">Button Text</span>
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TicketsPage;


import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const TicketsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    selectValue: '',
    date: '',
  });
  const [ticketTableData, setTicketTableData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('ticketTableData');
    if (savedData) {
      setTicketTableData(JSON.parse(savedData));
    }
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTableData = editId === null
      ? [{ id: ticketTableData.length + 1, ...formData }, ...ticketTableData]
      : ticketTableData.map((item) => (item.id === editId ? { ...item, ...formData } : item));

    setTicketTableData(updatedTableData);
    localStorage.setItem('ticketTableData', JSON.stringify(updatedTableData));
    setIsPopupOpen(false);
    setFormData({ title: '', description: '', selectValue: '', date: '' });
    setEditId(null);
  };

  const handleEdit = (id) => {
    const itemToEdit = ticketTableData.find((item) => item.id === id);
    setFormData(itemToEdit);
    setEditId(id);
    setIsPopupOpen(true);
  };

  const handleRemove = (id) => {
    const updatedData = ticketTableData.filter((item) => item.id !== id);
    setTicketTableData(updatedData);
    localStorage.setItem('ticketTableData', JSON.stringify(updatedData));
  };

  const countTicketsByStatus = (status) => ticketTableData.filter((ticket) => ticket.status === status).length;

  return (
    <div>
      <Button color="info" onClick={togglePopup}>Create Ticket</Button>

      <Modal isOpen={isPopupOpen} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Create New Ticket</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Ticket Title</Label>
              <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="selectValue">Priority</Label>
              <Input type="select" name="selectValue" id="selectValue" value={formData.selectValue} onChange={handleChange}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
            </FormGroup>
            <Button color="primary" type="submit">Save</Button>
          </Form>
        </ModalBody>
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {ticketTableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.selectValue}</td>
              <td>{data.date}</td>
              <td>
                <Button color="warning" onClick={() => handleEdit(data.id)}>Edit</Button>{' '}
                <Button color="danger" onClick={() => handleRemove(data.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketsPage;
