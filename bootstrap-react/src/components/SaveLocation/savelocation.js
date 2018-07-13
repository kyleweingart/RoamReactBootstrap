import React from 'react';
import { Button, Fa, Modal, ModalBody, ModalFooter, ModalHeader } from 'mdbreact';
import './savelocation.css';





class SaveLocation extends React.Component {
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

            <div className="save-location-btn modal-container">
                <Button className="btn-large" onClick={this.toggle}
                >+</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="fluid" position="bottom">
                    <ModalHeader toggle={this.toggle} className="header"></ModalHeader>
                    <ModalBody>

                        <div className="form-group">
                            <label> Choose Category:</label>
                            <select className="form-control">
                                <option>Drinks</option>
                                <option>Shopping</option>
                                <option>Scenic</option>
                                <option>Music</option>
                                <option>Outdoors</option>
                                <option>Misc</option>
                            </select>
                        </div>

                        <br></br>

                        <label>Add Comments:</label>

                        <input type="textarea" className="form-control form-control-lg" label="Add Comments:" />
                        {/* <Button className="btn-large-modal btn-large-left"><Fa icon="tag" size="2x" /></Button>{' '}
                                <span className="add-photo"> Choose Category </span> */}

                        {/* <Button className="btn-large-modal btn-large-left"><Fa icon="pencil" size="2x" /></Button>{' '}
                            <span className="add-photo"> Add Comments </span> */}
                        <br></br>
                        <Button className="btn-large-modal btn-large-left"><Fa icon="camera-retro" size="2x" /></Button>{' '}
                        <span className="add-photo"> Add Photo </span>
                    </ModalBody>


                    <ModalFooter className="footer">

                        <Button className="btn-large-modal" onClick={this.toggle}><Fa icon="times" size="2x" /></Button>{' '}
                        <Button className="btn-large-modal"><Fa icon="save" size="2x" /></Button>
                    </ModalFooter>
                </Modal>


            </div>

        );
    }

}

export default SaveLocation;