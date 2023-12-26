const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp/>)

function Counter(){
    return(
        <div className='counter'>
            <button>-</button>
            <h3>0</h3>
            <button>+</button>
            <button>C</button>
            <button>X</button>
        </div>
    )
}
function SumInfo(){

    return(
        <div className='suminfo'>
            <h1>Sum = 0</h1>
            <button>Add Counter</button>
        </div>
    )
}
function MyApp(){
    return(
        <>
        <div className='edit'> 
        <SumInfo />
        <Counter />
        </div>
        </>
    )
}
