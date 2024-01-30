import { useRef, useEffect ,useState} from "react";

function useCommaSeperator() {
//   const ref = useRef();

const [numericValue,setNumericValue] = useState(null)

const setNumericFn = (data)=>{
const replacedValue = data?.toString()?.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
 setNumericValue(replacedValue);
}


  // Return previous value (happens before update in useEffect above)
  return [numericValue, setNumericFn];
}

export default useCommaSeperator;
