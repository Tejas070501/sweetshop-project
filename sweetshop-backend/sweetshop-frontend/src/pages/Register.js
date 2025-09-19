import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register/', form)
      .then(res => setMsg('Registration successful!'))
      .catch(err => {
  setMsg(
    'Registration failed: ' +
    (err.response
      ? JSON.stringify(err.response.data)
      : err.message + ' (no response from backend)')
  );
});
  }

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} type="password" /><br /><br />
        <button type="submit">Register</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default Register;