import React,{Component} from "react";
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
      //  console.log(">>>>>>>>>>Inside Constructor")

        this.state={
            title:'React App',
            keyword:'User Input Here'
        }
    }
     
    handeChange=(event)=>{
       // console.log(event.target.value)
        this.setState({keyword:event.target.value ? event.target.value : 'User Input Here'})
        this.props.UserInput(event.target.value)
    }

    render(){
   //     console.log(">>>>>>>>>>>>Inside Reander")
            return(
            <>
                <header>
                    <div className ="logo">{this.state.title}</div>
                    <input onChange={this.handeChange}/>
                    <div style={{color:'white', fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                
            </>
        )

    }
}


export default Header;
