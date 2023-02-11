import React, { useState } from "react";
import "./App.css";

const FitnessClubRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [members, setMembers] = useState([]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, formData]);
    setShowSuccessMessage(true);
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="container">
      <h2>Fitness Club Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
      </form>
      {showSuccessMessage && (
        <div className="alert alert-success">User added successfully</div>
      )}
      <button
        type="button"
        className="btn btn-secondary mt-3"
        onClick={() => setShowSuccessMessage(false)}
      >
        View Member List
      </button>
      {showSuccessMessage === false && (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}

                                </td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const App = () => (
  <div className="App">
    <FitnessClubRegistration />
  </div>
);

export default App;