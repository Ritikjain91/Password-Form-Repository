import React, { useState } from 'react';
import "./Email.css"

const EmailForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('New Email:', newEmail);
    console.log('Old Email:', oldEmail);
    console.log('Confirmed Email:', confirmEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="ChEmail">
        
      <h1> Change Password </h1>
      </div>
      <label className="label1">
      Enter old Password:
  <input
  placeholder="Enter old Password"
    className="input1"
    type="email"
    value={newEmail}
    onChange={(e) => setNewEmail(e.target.value)}
  />
</label>

<label className="label2">
Enter new Password:
  <input
    placeholder=" Enter new Password"
    className="input2"
    type="email"
    value={oldEmail}
    onChange={(e) => setOldEmail(e.target.value)}
  />
</label>

<label className="label3">
Confirm New Password:
  <input
  placeholder="  Confirm New Password
  "
    className="input3"
    type="email"
    value={confirmEmail}
    onChange={(e) => setConfirmEmail(e.target.value)}
  />
</label>

      <br />
      <button type="submit"><h1>Save</h1></button>
    </form>
  );
};
export default EmailForm;