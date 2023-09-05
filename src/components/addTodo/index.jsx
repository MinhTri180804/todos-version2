import React from 'react';
import PropTypes from 'prop-types';

AddTodo.propTypes = {
    
};

function AddTodo(props) {
    return (
        <div className='fixed bottom-[30px] left-[50%] translate-x-[-50%] w-[90px] h-[90px] rounded-full bg-[#b9e629] text-center leading-[90px] text-[40px] z-10'>
            <i className="fa-solid fa-plus"></i>
        </div>
    );
}

export default AddTodo;