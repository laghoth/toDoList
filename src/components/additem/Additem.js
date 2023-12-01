import React, { Component } from 'react'
import './Additem.css'
 class Additem extends Component {

  state ={
    name:'',
    age:''
  }

  handleChange = (e)=>{
    
    // console.log(e.target.value);
    this.setState({
      [e.target.id] : e.target.value
    })

    //console.log(this.state);

  }

  handleSubmit = (e) =>{

    let nm = this.state.name;
    let ag = this.state.age;

    if(nm && ag ){
      e.preventDefault();
      this.props.addItem(this.state);
      this.setState({
        name: '',
        age : ''
      })
    }else{
      console.log('empty');
      this.props.showMessage();
    }   
  }


  render(){
    return (
      <div className='Additem'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter name...' id='name' onChange={this.handleChange} value={this.state.name}/>
          <input type='number' placeholder='Enter age...' id='age' onChange={this.handleChange} value={this.state.age}/>
          <input type='submit' value="Add" />
        </form>
      </div>
    )
  }
}export default Additem;
