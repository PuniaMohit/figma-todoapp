
const Header =(props)=>{

const showPopUp=()=>{
    props.setShowPop(true)
}
    return (<div>
        <div>Today</div>
        <div onClick={showPopUp}><button>+</button></div>
    </div>)
    }
    
    export default Header;