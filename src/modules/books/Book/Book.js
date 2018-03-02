import React from 'react';

import './Book.css'

export default function Book({ title, coverUrl }) {
  return (
    <div className="Book">
      <img className="Book-thumbnail" src={coverUrl} alt={title} />
      <p>{title}</p>
    </div>
  )
}