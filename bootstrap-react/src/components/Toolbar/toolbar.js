import React, { Component } from 'react';
import { Container, Button, Fa, Modal, ModalBody, ModalFooter, ModalHeader } from 'mdbreact';
import './toolbar.css';


// class ToolbarFeatures extends React.Component {
//     constructor(props) {
//         super(props);

//     }



//     render() {
//         return (
//             <div>
//             <div className="background modal-container">Categories:
//             <div className="toolbar"> 
//             <Button className="btn-circle"><Fa icon="beer"/></Button>
//             <Button className="btn-circle"><Fa icon="shopping-bag"/></Button>
//             <Button className="btn-circle">All</Button>
//             <Button className="btn-circle"><Fa icon="image"/></Button>
//             <Button className="btn-circle"><Fa icon="headphones"/></Button>
//             <Button className="btn-circle"><Fa icon="bicycle"/></Button>
//             </div>
//             </div>

//             <div>
//             <div className="save-location-btn">
//             {/* <Button className="btn-large"><Fa icon="plus" size="5x"/></Button> */}
//             <Button className="btn-large">+</Button>
//             </div>


//             </div>
//             </div>




//         );
//     }
// }

// END Trying to create modal- if this does not work comment out above code and delete code below to reset


class ToolbarFeatures extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }




    render() {
        return (
            <div>
                <div className="background modal-container">Categories:
            <div className="toolbar">
                        <Button className="btn-circle"><Fa icon="beer" /></Button>
                        <Button className="btn-circle"><Fa icon="shopping-bag" /></Button>
                        <Button className="btn-circle">All</Button>
                        <Button className="btn-circle"><Fa icon="image" /></Button>
                        <Button className="btn-circle"><Fa icon="headphones" /></Button>
                        <Button className="btn-circle"><Fa icon="bicycle" /></Button>
                    </div>
                </div>

                <div>
                    <div className="save-location-btn">
                        {/* <Button className="btn-large"><Fa icon="plus" size="5x"/></Button> */}
                        <Button className="btn-large" onClick={this.toggle}
                        >+</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                (...)
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                                <Button color="primary">Save changes</Button>
                            </ModalFooter>
                        </Modal>


                    </div>


                </div>



            </div>






        );
    }
}

export default ToolbarFeatures;