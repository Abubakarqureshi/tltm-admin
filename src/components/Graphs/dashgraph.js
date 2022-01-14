// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// // import axios from "axios";

// export default DashGraph = () => {
//   const [chartData, setChartData] = useState({});
//   const [employeeSalary, setEmployeeSalary] = useState([]);
//   const [employeeAge, setEmployeeAge] = useState([]);

//   const chart = () => {
//     let empSal = [2000,4000,5000,3000,2000,3000,1000,9000,4000];
//     let empAge = [88,77,66,55,44,33,29,21,25];
// //     axios
// //       .get("http://dummy.restapiexample.com/api/v1/employees")
// //       .then(res => {
// //         console.log(res);
// //         for (const dataObj of res.data.data) {
// //           empSal.push(parseInt(dataObj.employee_salary));
// //           empAge.push(parseInt(dataObj.employee_age));
// //         }
// //         setChartData({
// //           labels: empAge,
// //           datasets: [
// //             {
// //               label: "level of thiccness",
// //               data: empSal,
// //               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
// //               borderWidth: 4
// //             }
// //           ]
// //         });
// //       })
// //       .catch(err => {
// //         console.log(err);
// //       });
// //     console.log(empSal, empAge);
// //   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <h1>DashGraph</h1>
//       <div>
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "THICKNESS SCALE", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DashGraph