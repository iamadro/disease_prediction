import React, { useEffect } from 'react'
import { MdOutlineCancel } from "react-icons/md";






const Symptom = ({key, name ,setChosen,chosen}) => {

    // const handleDelete = () => {
    //     console.log("OSEJfoj");
    //     console.log(name);
    //     var idx = chosen.indexOf(name)
    //     console.log(idx);

        
    //     chosen.splice(idx,1)
    //     console.log(chosen);
    //     setChosen(chosen);
    // };
    const handleDelete = () => {
        const newChosen = chosen.filter(symptom => symptom !== name);
        setChosen(newChosen);
    };
    // useEffect(()=>{
    //     const loadChosen =()=>{

    //     }
    // })
    return (
        <div className='flex items-center'>
            <div className='bg-gray-200 text-xs rounded-full  p-2 m-1 inline-block border-2 border-gray-600'>
                {name}
            </div>
            <MdOutlineCancel size={15} onClick={handleDelete} />

        </div>
    )
}

export default Symptom
