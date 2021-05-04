import React from 'react';

export default function Buttons({ handleDelete }) {
  return (
    <button type="button" style={{ background: 'red', fontSize: '1.2rem' }} onClick={handleDelete}>
      Delete
    </button>
  );
}
