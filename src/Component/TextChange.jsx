import {useEffect, useState} from 'react'


const TextChange = () => {
    const texts = ["Hi, i'm David", "i am a web dev","Hi, i'm David"];
    const [currentText,setCurrentText] = useState("");
    const [endValue, setendValue] = useState(true)
    const [isFoward, setIsFoward] = useState(true)
    const [index, setIndex] = useState(0)
    useEffect(() => {
      const intervalid = setInterval(() => {
        setCurrentText(texts[index].substring(0, endValue));
        if (isFoward) {
            setendValue((prev) =>prev + 1)
        }else{
            setendValue((prev) => prev - 1)
        }
        if(endValue > texts[index].length+10){
            setIsFoward(false)
        }
        if (endValue < 2.1) {
            setIsFoward(true)
            setIndex((prev) => prev & texts.length)
        }
      }, 100);
      return()=>clearInterval(intervalid);

    }, [endValue ,isFoward, index, texts])
    
  return (
    <>
        <div className="transition ease duration-300">
            {currentText}
        </div>
    </>
  )
}

export default TextChange