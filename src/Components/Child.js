import React, { PropTypes } from 'react';

const Child = ({ props, children }) => {
    return (

        <>
            <div className='ádsadds'>
                {children}
            </div>
        </>
    );
};

Child.propTypes = {

};

export default Child;