import React from 'react';
import './Header.css'

const HeaderElement = (props) => {
    const {classBox, icon, name} = props.data;
    const classAdd = "col-xl-2 col-md-4 col-6 " + classBox
    return (
        <div className={classAdd}>
            <div className="icon-box">
                <i className={icon}></i>
                <h3><a href="">{name}</a></h3>
            </div>
        </div>
    );
}

export default HeaderElement;
