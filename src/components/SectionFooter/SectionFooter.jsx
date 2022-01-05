import React from 'react';

export const SectionFooter = (props) => {
const {heading, children} = props;
 return (
    <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">{heading}</h4>
        {children}
    </div>
 )

}