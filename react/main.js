var Label = React.createClass({
  displayName: "Label",

  componentDidMount: function () {
    $.ajax({
      url: "http://suzuki0keiichi.github.io/react/api.json",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ text: data.text });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("http://suzuki0keiichi.github.io/react/api.json", status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return { text: "検索キーワードにヒットしにくい首領L初期値カーペンター陣十郎" };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      this.state.text
    );
  }
});

ReactDOM.render(React.createElement(Label, null), document.getElementById('example'));
