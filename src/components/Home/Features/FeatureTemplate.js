import React from 'react';

const FeatureTemplate = (props) => {
    const {classDiv, icon, title, description} = props.data
    const classAdd = "icon-box mt-5 " + classDiv
    const iconAdd = "bx " + icon
    return (
        <div className={classAdd} data-aos="zoom-in" data-aos-delay="150">
            <i className={iconAdd}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default FeatureTemplate;
