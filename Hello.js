//utilizing states
var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: '@vogtn'
    }
  },
  render: function(){
    return(
      <div>
        Hello {this.state.username}
      </div>
    )
  }
});

//ability to change states
var HelloUser = React.createClass({
  getInitialState: function(){
    return{
      username: '@vogtn'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return(
      <div>
      Hello {this.state.username} <br />
      Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});
