import { useCallback, useState } from 'react';
import { getUpdatedArray } from '../../utils/functions';
import ChildForm from '../child-form/child-form';
import ChildItem from '../child-item/child-item';

// function Parent() {
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData([...data, { id: Date.now(), value }]);
//     setValue('');
//   };

//   return (
//     <div className="parent">
//       <ol>
//         {data.map((item) => (
//           <ChildItem key={item.id} {...item} />
//         ))}
//       </ol>

//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChange} value={value} />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// export default Parent;

// Approach Two
// function Parent() {
//   const [data, setData] = useState([]);

//   const submitHandler = (value) => {
//     setData([...data, { id: Date.now(), value }]);
//   };

//   const handleUpdate = (id, value) => {
//     setData(getUpdatedArray(data, id, value));
//   };

//   return (
//     <div className="parent">
//       <ul>
//         {data.map((item) => (
//           <ChildItem key={item.id} {...item} handleUpdate={handleUpdate} />
//         ))}
//       </ul>

//       <ChildForm submitHandler={submitHandler} />
//     </div>
//   );
// }

// export default Parent;

// Approach Three
function Parent() {
  const [data, setData] = useState([]);
  const submitHandler = (value) => {
    setData([...data, { id: Date.now(), value }]);
  };

  const handleUpdate = useCallback((id, value) => {
    setData((oldData) => getUpdatedArray(oldData, id, value));
  }, []);

  return (
    <div className="parent">
      <ul>
        {data.map((item) => (
          <ChildItem key={item.id} {...item} handleUpdate={handleUpdate} />
        ))}
      </ul>

      <ChildForm submitHandler={submitHandler} />
    </div>
  );
}

export default Parent;
