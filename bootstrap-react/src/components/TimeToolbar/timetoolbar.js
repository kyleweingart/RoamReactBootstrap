import React from 'react';
import { Button, ButtonGroup } from 'mdbreact';
import './timetoolbar.css';



class TimeToolbarFeatures extends React.Component {
   
    render() {
        return (
            <div className="time-btn-group">
                    <ButtonGroup className="time">
                        
                        <Button className="time-btn" href="#">H</Button>
                        <Button className="time-btn" href="#">D</Button>
                        <Button className="time-btn" href="#">W</Button>
                        <Button className="time-btn" href="#">M</Button>
                        <Button className="time-btn" href="#">Y</Button>


                    </ButtonGroup>
            </div>


        );
    }
}



export default TimeToolbarFeatures;