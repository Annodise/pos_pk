import "./home.css";
import {useNavigate} from 'react-router-dom'

function Home_Page() {

  let navigate = useNavigate();


  return (
    
      <div>
        <h1>Welcome</h1>
        <h1>home page</h1>
        <button className="enter_bt" onClick={()=>{navigate('/page_1')}}>Enter</button>
      </div>
    
  );
}

export default Home_Page;
