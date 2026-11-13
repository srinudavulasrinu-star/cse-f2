import "./a.css"
import "./b.css"


const App=()=>{

  const click1=()=>{
    alert("hi csec")
  }
  const click2=()=>{
    alert("hi swaroop")
  }
  const change1=(event)=>{
    console.log(event.target.value)
  }
  const change2=(e)=>{
    console.log(e.target.value)
  }
  return(
    <>
    <h1 className="heading">CSEC</h1>
    <button className="b1" onClick={click1}>CLick1</button>
    <button onClick={click2}>Click2</button>
    <input onChange={change1}placeholder="enter any thing"/>
    <input onChange={change2} placeholder="enter you name"/>
    </>
  )
}
export default App