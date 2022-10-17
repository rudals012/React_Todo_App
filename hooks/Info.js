import React, {useEffect, useState} from 'react'

function Info() {
    const [name, setName] = useState('');
    const [nickname, setNiackname] = useState("");

    const onChangeName = e => {
        setName(e.target.value)
    }
    const onChangeNickname = e => {
        setNiackname(e.target.value)
    }

    useEffect(()=>{
        console.log("렌더링이 완료되었습니다. componentDidMount()");
        console.log({name,nickname}); 
    },[name,nickname]); //componentDidUpdate() 역할 수행
  return (
    <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div> <b>이름:</b> {name} </div>
        <div> <b>닉네임:</b> {nickname} </div>
    </div>
  )
}

export default Info