import React, { useState } from 'react';
import ChildForm from '../child-form/child-form';

// function ChildItem({ id, value }) {
//   console.log(`Id is ${id} and values is ${value}`);
//   return (
//     <li style={{ margin: '20px' }}>
//       <div>
//         <span style={{ marginRight: '10px' }}>{value}</span>
//       </div>
//     </li>
//   );
// }

// export default ChildItem;

// Approach 2
// function ChildItem({ id, value, handleUpdate }) {
//   console.log(`Id is ${id} and values is ${value}`);

//   const [isEdit, setIsEdit] = useState(false);
//   const toggleEditForm = () => setIsEdit(true);

//   const handleSubmit = (updatedValue) => {
//     handleUpdate(id, updatedValue);
//     setIsEdit(false);
//   };

//   return (
//     <li style={{ margin: '20px' }}>
//       {isEdit ? (
//         <ChildForm submitHandler={handleSubmit} existingValue={value} forEdit />
//       ) : (
//         <div>
//           <span style={{ marginRight: '10px' }}>{value}</span>
//           <button onClick={toggleEditForm}>Edit</button>
//         </div>
//       )}
//     </li>
//   );
// }

// export default ChildItem;

// Approach 3
function ChildItem({ id, value, handleUpdate }) {
  console.log(`Id is ${id} and values is ${value}`);

  const [isEdit, setIsEdit] = useState(false);
  const toggleEditForm = () => setIsEdit(true);

  const handleSubmit = (updatedValue) => {
    handleUpdate(id, updatedValue);
    setIsEdit(false);
  };

  return (
    <li style={{ margin: '20px' }}>
      {isEdit ? (
        <ChildForm submitHandler={handleSubmit} existingValue={value} forEdit />
      ) : (
        <div>
          <span style={{ marginRight: '10px' }}>{value}</span>
          <button onClick={toggleEditForm}>Edit</button>
        </div>
      )}
    </li>
  );
}

export default React.memo(ChildItem);



// class ChildItem extends React.PureComponent {
//   state = {
//     isEdit: false
//   };

//   toggleEditForm = () => this.setState({ isEdit: true });

//   handleSubmit = (updatedValue) => {
//     this.props.handleUpdate(this.props.id, updatedValue);
//     this.setState({ isEdit: false });
//   };

//   render() {
//     const { value } = this.props;
//     const { isEdit } = this.state;
//     return (
//       <li style={{ margin: '20px' }}>
//         {isEdit ? (
//           <ChildForm submitHandler={this.handleSubmit} existingValue={value} forEdit />
//         ) : (
//           <div>
//             <span style={{ marginRight: '10px' }}>{value}</span>
//             <button onClick={this.toggleEditForm}>Edit</button>
//           </div>
//         )}
//       </li>
//     );
//   }
// }

// export default ChildItem;
