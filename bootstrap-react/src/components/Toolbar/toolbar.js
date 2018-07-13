import React from 'react';
import { Button, Fa} from 'mdbreact';
import './toolbar.css';



class ToolbarFeatures extends React.Component {
    



    render() {
        return (
            <div>
                <div className="background">Categories:
            <div className="toolbar">
                        <Button className="btn-circle"><Fa icon="beer" /></Button>
                        <Button className="btn-circle"><Fa icon="shopping-bag" /></Button>
                        <Button className="btn-circle"><Fa icon="image" /></Button>
                        <Button className="btn-circle">All</Button>
                        <Button className="btn-circle"><Fa icon="headphones" /></Button>
                        <Button className="btn-circle"><Fa icon="bicycle" /></Button>
                        <Button className="btn-circle"><Fa icon="users" /></Button>
                    </div>
                </div>
                
            </div>






        );
    }
}

export default ToolbarFeatures;