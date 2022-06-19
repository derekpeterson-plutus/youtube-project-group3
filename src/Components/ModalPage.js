// import React, { Component } from 'react';
// import { withRouter, Link } from 'react-router-dom';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// import './Page404NotFound';

// class Modal extends Component {
//   constructor() {
//     super();
//     this.modalRef = React.createRef();
//   }

//   componentDidMount() {
//     const { isModal } = this.props;

//     if (isModal) {
//       disableBodyScroll(this.modalRef.current);
//     }
//   }

//   componentWillUnmount() {
//     enableBodyScroll(this.modalRef.current);
//   }

//   render() {
//     const { id } = this.props.match.params;

//     if (this.props.isModal) {
//       return (
//         <div
//           ref={this.modalRef}
//           className='modal-wrapper'
//           onClick={() => this.props.history.goBack()}
//         >
//           <div className='modal' onClick={(e) => e.stopPropagation()}>
//             <h1>{id}</h1>
//             <div className='notFound'>
//               <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
//               <h3>Sorry ,We could not find the Page</h3>
//               <p className='home' style={{ fontSize: 40 }}>
//                 <Link to='/'>Go Home</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className='no-modal-wrapper'>
//           <h1>{id}</h1>
//           <div className='notFound'>
//             <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
//             <h3>Sorry ,We could not find the Page</h3>
//             <p className='home' style={{ fontSize: 40 }}>
//               <Link to='/'>Go Home</Link>
//             </p>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default withRouter(Modal);


// class Modal extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         show: false,
//       };
      
//     }
    
//     showModal = (e) => {
//       this.setState({
//         show: !this.state.show,
//       });
//     };
//     render(){
//         return(
//             <div>
               


//             </div>
//         )
//     }
// }


// export default Modal;



import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact';

class ModalPage extends Component {
  state = {
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>MDBModal</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;