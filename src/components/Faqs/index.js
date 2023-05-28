// Write your code here.
import FaqItem from '../FaqItem/index'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  console.log(faqsList)
  return (
    <div className="app-container">
      <div className="faqs-card-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachItem => (
            <FaqItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
