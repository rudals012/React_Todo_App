import React, { useCallback ,useMemo,useRef, useState } from 'react'

const getAverage = lists => {
    console.log('평균값 계산중...');
    if (lists.length===0) return 0;
    const sum = lists.reduce((a,b) => a + b);
    return sum / lists.length;
};

// useMemo() : 랜더링하는 과정에서 특정 값이 바뀌었을때만 연산 실행 바뀌지 않으면 이전의 연산결과 실행
function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
        setNumber(e.target.value);
    },[]); //컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        console.log("number 혹은 list가 바뀌었을 때만 함수 생성");
        const nextLists =lists.concat(parseInt(number)); //배열과 배열을 합칠때 concat 사용
        setLists(nextLists);
        setNumber('');
        inputEl.current.focus();
    },[number,lists]);// number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(lists),[lists]);

    // useCallback() : 렌더링하는 과정에서 특정 배열값이 바뀌었을때만 이벤트 핸들러 함수를 실행. 함수 재사용. 함수를 새로 계속 만들지 못하게 함
  return (
    <div>
        <input value={number} onChange={onChange} ref={inputEl} /> {/* onchage에 입력한 값을 어딘가에 저장시켜줌 */}
        <button onClick={onInsert}>등록</button>
        <ul>
            {lists.map( (list,index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
        <div><b>평균값:</b>{avg}</div>
    </div>
  )
}

export default Average