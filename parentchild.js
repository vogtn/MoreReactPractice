//PARENT COMPONENT
var FriendsContainer = React.createClass({
  getInitialState: function(){
    return{
      name: 'Nicolas Vogt',
      friends: ['Jane Doe', 'John Kim', 'Monte Crisco']
    }
  },
  render: function(){
    return(
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});
//CHILD COMPONENT
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return(
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});
