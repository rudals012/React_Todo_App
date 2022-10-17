import React, { useState, useCallback } from 'react'
import {MdAdd} from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {
  
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);        
    },[]);

    const onSubmit = useCallback( e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      //submit이벤트는 브라우저에서 새로고침을 발생시킨다.
    },[value]);
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
        <input 
        value={value} 
        onChange={onChange} 
        placeholder='할일을 입력하세요' />
        <button type='submit'> <MdAdd /> </button>
    </form>
  )
}


export default TodoInsert