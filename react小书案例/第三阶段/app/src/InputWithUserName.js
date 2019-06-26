import wrapWithLoadData from './wrapWithAjaxData'

class InputWithUserName extends Component{
	render(){
		return <input value={this.props.data} />
	}
}

InputWithUserName = wrapWithAjaxData(InputWithUserName,'username')
export default InputWithUserName