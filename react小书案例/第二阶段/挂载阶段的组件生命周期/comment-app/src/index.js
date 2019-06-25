import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/*
class Clock extends Component {
	constructor(){
		super()
		this.state={
			date:new Date()
		}
	}
	render(){
		return(
			<div>
			<h1>
			<p>现在的时间是</p>
			{this.state.date.toLocaleTimeString()}
			</h1>
			</div>
			)
	}
	componentWillMount(){
		this.timer=setInterval(()=>{
			this.setState({date:new Date()})
		},1000)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
}


class Index extends Component{
	constructor(){
		super()
		this.state={isShowClock:true}
	}
	handleShowOrHide(){
		this.setState({
			isShowClock:!this.state.isShowClock
		})
	}
	render(){
		return(
		<div>
			{this.state.isShowClock ? <Clock /> : null}
			<button onClick={this.handleShowOrHide.bind(this)}>
			显示或隐藏时钟
			</button>
		
		</div>
		)
	}
}
ReactDOM.render(
	<Index />,
	document.getElementById('root')
)
*/

/* ref和Reactjs中的DOM操作
class AutoFocusInput extends Component{
	componentDidMount(){
		// console.log('xxx',this.input)
		this.input.focus()
	}
	///ref属性来帮助我们获取已经挂载的元素的DOM节点
	render(){
		return(
			<input ref={(input)=> this.input = input} />
			)
	}
}

ReactDOM.render(
	<AutoFocusInput />,
	document.getElementById('root')
)*/

/*
props.children和容器类组件*/
/*
class Card extends Component{
	render(){

		console.log(this.props.children)
	return(
		<div className='card'>
			<div className='card-content'>
				{this.props.children.props.children[0]}
				
			</div>
			
		</div>
	)
	}
}

ReactDOM.render(
	<Card>
		<div>
		<h2>React.js 小书</h2>
		<div>开源、免费、专业、简单</div>
		订阅：<input />
		</div>
	</Card>,
	document.getElementById('root')
	)
*/

/*dangerouslySetHTML 和 style属性*/
/*
class Editor extends Component{
	constructor(){
		super()
		this.state={
			content:'<h1>React.js 小书</h1>'
		}
	}

	render(){
		return (
			<div className='editor-wrapper' style={{ background:'red' }}
			dangerouslySetInnerHTML={{__html:this.state.content}} />
			
			)
	}
}
ReactDOM.render(
	<Editor />,
	document.getElementById('root')
)
*/

//PropTypes和组件参数验证
class Comment extends Component{
	static propTypes={
		comment:PropTypes.object.isRequired
	}

	render(){
		const { comment } = this.props
		return (
			<div className='comment'>
				<div className='coment-user'>
					<span>{comment.username}</span>
				</div>
			</div>
			)
	}
}
