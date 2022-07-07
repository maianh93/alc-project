import { useParams } from "react-router-dom";

const IncomeAccounting = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>IncomeAccounting: {id}</h1>
      </div>
    );
}

export default IncomeAccounting;