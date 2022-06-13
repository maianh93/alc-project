import { useParams } from "react-router-dom";

const SpendAccounting = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>SpendAccounting: {id}</h1>
      </div>
    );
}

export default SpendAccounting;