import React from 'react';

// Import component CSS
import './AddGear.css';

// SVG Manipulation Tool
import { SvgLoader, SvgProxy } from 'react-svgmt';

// Importing SVGs
import AddGearIcon from 'img/addGear.svg';

// Pose animation library
import posed from 'react-pose';

const AddHover = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        transition: {
            type: "spring"
        }
    },
    hover: {
        scale: 1.1
    },
    press: {
        scale: .9
    }
})

function AddGear(props){
    return(
        <AddHover 
            className="add-gear"
        >
            <SvgLoader onClick={props.click} path={AddGearIcon} >
            </SvgLoader>
        </AddHover>
    )
}

export default AddGear;