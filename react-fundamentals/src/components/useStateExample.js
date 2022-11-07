import React,{useState} from 'react'
const useStateExample = () => {
  const [age,setAge]= useState(25)
  const onUpHandle = () => {
    setAge(age+1);
  }
  const onDownHandle = () => {
    setAge(age-1);
  }

  return (
    <div>
      <h1>UseState Example</h1>
      <h3>{age}</h3>
      <button onClick={onUpHandle}>ageUp</button>
      <button onClick={onDownHandle}>ageDown</button>
    </div>

  )
}

export default useStateExample;