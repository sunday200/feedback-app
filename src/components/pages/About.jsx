import Card from "../shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is React App to leave feedback for a product or service</p>
        <p>Version: 1.1.0</p>
      </div>

      <p>
        <Link
          to={{
            pathname: "/",
          }}
        >
          Back To Home
        </Link>
      </p>
    </Card>
  );
}

export default About;
