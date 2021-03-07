import React from 'react';
const FeatureTemplate = (props) => {
    const {classDiv, icon, title, description} = props.data
    const classAdd = "icon-box mt-5 " + classDiv
    const iconAdd = "bx " + icon
    const image=props.image;
    return (
        <div className={classAdd} data-aos="zoom-in" data-aos-delay="150">
            <div className="center-heading">
                <i className={iconAdd}></i>
                <h4>{title}</h4>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={image} />
                </div>
                <div className="col-md-8">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureTemplate;
