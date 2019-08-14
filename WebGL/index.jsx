/* 
  在 start.html中 导入了 react reacDom babel
  故可以直接使用
*/
import './index.css';


class Main extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="Header">
          <h1>起步</h1>
        </div>
        开始使用react
      </div>
    )
  }
}

ReactDOM.render(<Main></Main>, document.querySelector('#Main'));