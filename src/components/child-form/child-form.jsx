import React, { useState } from 'react';

// Approach 1
// function ChildForm({ submitHandler }) {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitHandler(value);
//     setValue('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={handleChange} value={value} />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// Approach 2
function ChildForm({ submitHandler, forEdit, existingValue }) {
  const [value, setValue] = useState(existingValue || '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button type="submit">{forEdit ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default ChildForm;
