import React, { useEffect, useState } from 'react';

function HomePage() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/sweets/')
      .then(res => res.json())
      .then(data => setSweets(data));
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to Mithai Magic!</h1>
      <div className="sweet-list">
        {sweets.map(s => (
          <div key={s.id} className="sweet-card">
            <img src="/kaju-katli.jpeg" alt={s.name} className="sweet-img" />
            <h2>{s.name}</h2>
            <p>{s.category}</p>
            <p>₹{s.price}</p>
            <p>Stock: {s.quantity}</p>
            <button disabled={s.quantity === 0}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
