class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }
  
  changeHandler(event){
    this.setState({word:event.target.value});   //set state to current input value
    console.log("change", event.target.value);  
  }

  clickHandler(event){
    var newList = this.state.list;
    newList.push(this.state.word);
    this.setState( { list : newList } );
    this.setState( { word : "" } );
  }
  
  render() {
      // render the list with a map() here
      // console.log(this.state.list)
      let tasks = this.state.list;
      
      let taskitem = tasks.map(task => {
        return <li>{task}</li>
      })

      return (
        <div className="list">
          <p>{this.state.word}</p>
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.clickHandler}>Add Task</button>
          <ul>
            {taskitem}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
  <List/>,
  document.getElementById('root')
);
