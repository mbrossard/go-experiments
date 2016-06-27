import React from 'react'

let Counter = React.createClass({
  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({
            counter: data.counter
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {
      conter: 0
    };
  },

  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },

  render: function(){
    return (
      <div>
        Counter: {this.state.counter}
      </div>
    );
  }
});

export default () => (
    <div id="content">
         <Counter url="/counter" pollInterval={1000} />
    </div>
)
