import { useParams } from "react-router-dom";

const Declare = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Declare: {id}</h1>
      </div>
    );
}

export default Declare;