import Header from './Header';
import '../App.css'
import data from '../staticData/toppings.json'
import { Link } from 'react-router-dom'

function Builder() {
  return (
  <>
  <Header></Header>
          <h2>Select your burger</h2>
<div className="card-holder"> 
  {
  data.toppings.map((topping) => (
    <Link to={`/topping/${topping.id}`}>
      <div className="card" key={topping.id}>{topping.title}</div></Link>
  ))}
</div>
  </>      
  )
}

export default Builder