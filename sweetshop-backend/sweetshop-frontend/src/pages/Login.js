import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login/', form)
      .then(res => {
        setMsg('Login successful!');
        localStorage.setItem('token', res.data.token); 
      })
      .catch(err => setMsg('Login failed. Check credentials!'));
  }

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} /><br /><br />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} type="password" /><br /><br />
        <button type="submit">Login</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default Login;
