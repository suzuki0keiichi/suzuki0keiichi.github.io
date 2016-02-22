
var TwitterMeta = React.createClass({
  displayName: "TwitterMeta",

  propTypes: {
    text: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement(
      "span",
      null,
      React.createElement("meta", { name: "twitter:card", content: "summary" }),
      React.createElement("meta", { name: "twitter:site", content: "@suzuki0keiichi" }),
      React.createElement("meta", { name: "twitter:title", content: this.props.text }),
      React.createElement("meta", { name: "twitter:description", content: this.props.desc })
    );
  }
});

var FacebookMeta = React.createClass({
  displayName: "FacebookMeta",

  propTypes: {
    text: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement(
      "span",
      null,
      React.createElement("meta", { property: "og:title", content: this.props.text }),
      React.createElement("meta", { property: "og:type", content: "article" }),
      React.createElement("meta", { property: "og:description", content: this.props.desc })
    );
  }
});

var Label = React.createClass({
  displayName: "Label",

  componentDidMount: function () {
    $.ajax({
      url: "http://suzuki0keiichi.github.io/react/api.json",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ text: data.text, desc: data.desc });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("http://suzuki0keiichi.github.io/react/api.json", status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return { text: "検索キーワードにヒットしにくい首領L初期値カーペンター陣十郎", desc: "失敗、、" };
  },
  render: function () {
    return React.createElement(
      "span",
      null,
      React.createElement(TwitterMeta, { text: this.state.text, desc: this.state.desc }),
      React.createElement(FacebookMeta, { text: this.state.text, desc: this.state.desc }),
      this.state.text
    );
  }
});

ReactDOM.render(React.createElement(Label, null), document.getElementById('example'));