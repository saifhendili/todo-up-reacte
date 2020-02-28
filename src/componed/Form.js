// import React, { Component } from 'react'
// import Modal from "react-modal"

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };




// class Form extends Component {
//     state = {
//         isOpen: false,
//         formInput: {
//             name: "",
//             lastName: ""
//         }
//     }

//     handleOpen = () => this.setState({ isOpen: !this.state.isOpen })
//     closeModal = () => this.setState({ isOpen: false })
//     handleChange = (e) => this.setState({ formInput: { ...this.state.formInput, [e.target.name]: e.target.value } })

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleOpen}>My form </button>
//                 <Modal
//                     style={customStyles}
//                     isOpen={this.state.isOpen}
//                     onRequestClose={this.closeModal}
//                 >
//                     <form className="myForm"  >
//                         <label>Name</label>
//                         <input type="text" name="name" onChange={this.handleChange} />
//                         <label>lastName</label>
//                         <input type="text" name="lastName" onChange={this.handleChange} />
//                     </form >


//                 </Modal>
//             </div>
//         )
//     }
// }


// export default Form