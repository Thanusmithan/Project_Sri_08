
// // CommonAppointmentForm.js-------------------------------------------------------------------------- 
// import React from 'react';
// import '../Css/PatientAppointment.css';

// const CommonAppointmentForm = ({ formData, setFormData, onSubmit, isAdmin }) => {
//   return (
//     <form className="appointment-form">
//       <div className="row g-3">
//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="patientName">Patient Name:</label>
//             <input
//               type="text"
//               id="patientName"
//               name="patientName"
//               className="form-control"
//               placeholder="Enter your name"
//               value={formData.patientName}
//               onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               className="form-control"
//               placeholder="Enter your age"
//               value={formData.age}
//               onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="gender">Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               className="form-select"
//               value={formData.gender}
//               onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//             >
//               <option value="" disabled>Select gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="date">Date:</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               className="form-control"
//               value={formData.date}
//               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="time">Time:</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               className="form-control"
//               value={formData.time}
//               onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="doctor">Select a Doctor:</label>
//             <select
//               id="doctor"
//               name="doctor"
//               className="form-select"
//               value={formData.doctor}
//               onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
//             >
//               <option value="" disabled>Select a doctor</option>
//               <option value="Dr. Smith">Dr. Smith</option>
//               <option value="Dr. John">Dr. John</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="service">Service:</label>
//             <select
//               id="service"
//               name="service"
//               className="form-select"
//               value={formData.service}
//               onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//             >
//               <option value="" disabled>Select a service</option>
//               <option value="Panchakarma Therapy">Panchakarma Therapy</option>
//               <option value="Abhyanga Massage">Abhyanga Massage</option>
//             </select>
//           </div>
//         </div>

//         {!isAdmin ? (
//           <div className="col-12 text-center">
//             <button type="button" className="btn-patient-appointment btn-success" onClick={onSubmit}>
//               Book Appointment
//             </button>
//           </div>
//         ) : (
//           <div className="col-12 text-center">
//             <button type="button" className="btn btn-info" onClick={onSubmit}>
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default CommonAppointmentForm;


// // CommonAppointmentForm.js
// import React, { useState, useEffect } from 'react';
// import '../Css/PatientAppointment.css';

// const CommonAppointmentForm = ({ formData, setFormData, onSubmit, isAdmin }) => {
//   const [services, setServices] = useState([]); // State to store services and doctors

//   useEffect(() => {
//     // Fetch services from backend
//     fetch('/api/services') // Replace with the actual endpoint to fetch services
//       .then((response) => response.json())
//       .then((data) => setServices(data))
//       .catch((error) => console.error('Error fetching services:', error));
//   }, []);

//   const handleServiceChange = (e) => {
//     const selectedService = e.target.value;

//     // Find the selected service's associated doctor
//     const selectedDoctor = services.find(
//       (service) => service.serviceName === selectedService
//     )?.doctorName || '';

//     setFormData({
//       ...formData,
//       service: selectedService,
//       doctor: selectedDoctor,
//     });
//   };

//   return (
//     <form className="appointment-form">
//       <div className="row g-3">
//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="patientName">Patient Name:</label>
//             <input
//               type="text"
//               id="patientName"
//               name="patientName"
//               className="form-control"
//               placeholder="Enter your name"
//               value={formData.patientName}
//               onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               className="form-control"
//               placeholder="Enter your age"
//               value={formData.age}
//               onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="gender">Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               className="form-select"
//               value={formData.gender}
//               onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//             >
//               <option value="" disabled>Select gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="date">Date:</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               className="form-control"
//               value={formData.date}
//               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="time">Time:</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               className="form-control"
//               value={formData.time}
//               onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="service">Service:</label>
//             <select
//               id="service"
//               name="service"
//               className="form-select"
//               value={formData.service}
//               onChange={handleServiceChange}
//             >
//               <option value="" disabled>Select a service</option>
//               {services.map((service, index) => (
//                 <option key={index} value={service.serviceName}>
//                   {service.serviceName}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="doctor">Doctor:</label>
//             <input
//               id="doctor"
//               name="doctor"
//               placeholder='Select a Doctor'
//               className="form-control"
//               value={formData.doctor}
//               readOnly
//             />
//           </div>
//         </div>

//         {!isAdmin ? (
//           <div className="col-12 text-center">
//             <button type="button" className="btn-patient-appointment btn-success" onClick={onSubmit}>
//               Book Appointment
//             </button>
//           </div>
//         ) : (
//           <div className="col-12 text-center">
//             <button type="button" className="btn btn-info" onClick={onSubmit}>
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default CommonAppointmentForm;



// // CommonAppointmentForm.js
// import React, { useState, useEffect } from 'react';
// import '../Css/PatientAppointment.css';
// import { Alert } from 'react-bootstrap'; // Import Bootstrap Alert component

// const CommonAppointmentForm = ({ formData, setFormData, onSubmit, isAdmin }) => {
//   const [services, setServices] = useState([]); // State to store services and doctors
//   const [alert, setAlert] = useState({ show: false, message: '' }); // State for showing alerts

//   useEffect(() => {
//     // Fetch services from backend
//     fetch('/api/services') // Replace with the actual endpoint to fetch services
//       .then((response) => response.json())
//       .then((data) => setServices(data))
//       .catch((error) => console.error('Error fetching services:', error));
//   }, []);

//   const handleServiceChange = (e) => {
//     const selectedService = e.target.value;

//     // Find the selected service's associated doctor
//     const selectedDoctor = services.find(
//       (service) => service.serviceName === selectedService
//     )?.doctorName || '';

//     setFormData({
//       ...formData,
//       service: selectedService,
//       doctor: selectedDoctor,
//     });
//   };

//   const validateForm = () => {
//     // Check if any field is empty
//     const fields = ['patientName', 'age', 'gender', 'date', 'time', 'service', 'doctor'];
//     for (let field of fields) {
//       if (!formData[field]) {
//         setAlert({ show: true, message: `Please fill in the ${field.replace(/^\w/, (c) => c.toUpperCase())} field.` });
//         return false;
//       }
//     }
//     setAlert({ show: false, message: '' }); // Hide alert if all fields are valid
//     return true;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       onSubmit(); // Proceed with the form submission if validation passes
//     }
//   };

//   return (
//     <form className="appointment-form">
//       <div className="row g-3">
//         {alert.show && (
//           <div className="col-md-12">
//             <Alert variant="danger" onClose={() => setAlert({ show: false, message: '' })} dismissible>
//               {alert.message}
//             </Alert>
//           </div>
//         )}

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="patientName">Patient Name:</label>
//             <input
//               type="text"
//               id="patientName"
//               name="patientName"
//               className="form-control"
//               placeholder="Enter your name"
//               value={formData.patientName}
//               onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               className="form-control"
//               placeholder="Enter your age"
//               value={formData.age}
//               onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="gender">Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               className="form-select"
//               value={formData.gender}
//               onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//             >
//               <option value="" disabled>Select gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="date">Date:</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               className="form-control"
//               value={formData.date}
//               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="time">Time:</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               className="form-control"
//               value={formData.time}
//               onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="service">Service:</label>
//             <select
//               id="service"
//               name="service"
//               className="form-select"
//               value={formData.service}
//               onChange={handleServiceChange}
//             >
//               <option value="" disabled>Select a service</option>
//               {services.map((service, index) => (
//                 <option key={index} value={service.serviceName}>
//                   {service.serviceName}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="doctor">Doctor:</label>
//             <input
//               id="doctor"
//               name="doctor"
//               placeholder="Select a Doctor"
//               className="form-control"
//               value={formData.doctor}
//               readOnly
//             />
//           </div>
//         </div>

//         {!isAdmin ? (
//           <div className="col-12 text-center">
//             <button type="button" className="btn-patient-appointment btn-success" onClick={handleSubmit}>
//               Book Appointment
//             </button>
//           </div>
//         ) : (
//           <div className="col-12 text-center">
//             <button type="button" className="btn btn-info" onClick={handleSubmit}>
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default CommonAppointmentForm;


// CommonAppointmentForm.js --------------------------------------Correct-------------
import React, { useState, useEffect } from 'react';
import '../Css/PatientAppointment.css';
import { Alert } from 'react-bootstrap'; // Import Bootstrap Alert component

const CommonAppointmentForm = ({ formData, setFormData, onSubmit, isAdmin }) => {
  const [services, setServices] = useState([]); // State to store services and doctors
  const [alert, setAlert] = useState({ show: false, message: '' }); // State for showing alerts
  const [buttonState, setButtonState] = useState('idle'); // State to manage button animation (idle, success)

  useEffect(() => {
    // Fetch services from backend
    fetch('/api/services') // Replace with the actual endpoint to fetch services
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;

    // Find the selected service's associated doctor
    const selectedDoctor = services.find(
      (service) => service.serviceName === selectedService
    )?.doctorName || '';

    setFormData({
      ...formData,
      service: selectedService,
      doctor: selectedDoctor,
    });
  };

  const validateForm = () => {
    // Check if any field is empty
    const fields = ['patientName', 'age', 'gender', 'date', 'time', 'service', 'doctor'];
    for (let field of fields) {
      if (!formData[field]) {
        setAlert({ show: true, message: `Please fill in the ${field.replace(/^\w/, (c) => c.toUpperCase())} field.` });
        return false;
      }
    }
    setAlert({ show: false, message: '' }); // Hide alert if all fields are valid
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(); // Proceed with the form submission if validation passes

      // Trigger success animation
      setButtonState('success');
      setTimeout(() => setButtonState('idle'), 2000); // Reset to idle state after animation
    }
  };

  return (
    <form className="appointment-form">
      <div className="row g-3">
        {alert.show && (
          <div className="col-md-12">
            <Alert variant="danger" onClose={() => setAlert({ show: false, message: '' })} dismissible>
              {alert.message}
            </Alert>
          </div>
        )}

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              className="form-control"
              placeholder="Enter your name"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="service">Service:</label>
            <select
              id="service"
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleServiceChange}
            >
              <option value="" disabled>Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service.serviceName}>
                  {service.serviceName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="doctor">Doctor:</label>
            <input
              id="doctor"
              name="doctor"
              placeholder="Select a Doctor"
              className="form-control"
              value={formData.doctor}
              readOnly
            />
          </div>
        </div>

        {!isAdmin ? (
          <div className="col-12 text-center">
            <button
              type="button"
              className={`btn-patient-appointment btn-success ${
                buttonState === 'success' ? 'animate-success' : ''
              }`}
              onClick={handleSubmit}
            >
              {buttonState === 'success' ? '✔ Appointment Booked' : 'Book Appointment'}
            </button>
          </div>
        ) : (
          <div className="col-12 text-center">
            <button type="button" className="btn btn-info" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CommonAppointmentForm;





