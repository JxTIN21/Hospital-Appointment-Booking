import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/message/send", {firstName, lastName, email, phone, message}, {withCredentials: true, 
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res=> {
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        {/* First Name and Last Name in the same row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <input
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Phone and Email in the same row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="number"
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Message Textarea */}
        <textarea
          rows={7}
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }}
        />

        {/* Submit Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type='submit'
            style={{ padding: '10px 20px', backgroundColor: '#6a0dad', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
