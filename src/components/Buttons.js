import React from "react";
import { Button } from 'reactstrap';
const Buttons=(props)=>{
    return(
            <div>
                <Button className='bt1'   color='success' onClick={props.getimagehappy}>happy </Button>
                <Button className='bt2'   color='danger'  onClick={props.getimagesad}>sad   </Button>
                <Button className='bt3'   color='success' onClick={props.getimagesmile}>smile </Button>
                <Button className='bt4'   color='danger'  onClick={props.getimageangry}>angry </Button>
            </div>
        )
    }
export default Buttons;