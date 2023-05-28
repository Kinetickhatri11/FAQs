// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {item} = this.props
    const {answerText} = item
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const url = !isActive ? plusImg : minusImg
    const altText = !isActive ? 'plus' : 'minus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img src={url} alt={altText} />
      </button>
    )
  }

  render() {
    const {item} = this.props
    const {questionText} = item
    return (
      <li className="faqs-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
