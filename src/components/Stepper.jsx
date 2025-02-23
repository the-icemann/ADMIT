import {useState,useEffect,useRef} from 'react'


const Stepper = ({steps,currentStep}) => {  
  const[newStep,setNewStep]=useState([]);
  const stepRef=useRef();

  const updateStep=(stepNumber,steps)=>{
const newSteps=[...steps];
let count=0
while(count < newSteps.length){
  //current Step
  if(count===stepNumber){
    newSteps[count]={
      ...newSteps[count],
      highLighted:true,
      selected:true,
      completed:true,
    };
    count++;
  }
  //Step completed
  else if(count< stepNumber){
    newSteps[count]={
      ...newSteps[count],
      highLighted:false,
      selected:true,
      completed:true,
  }
  count++
}else{
  newSteps[count]={
    ...newSteps[count],
    highLighted:false,
    selected:false,
    completed:false,
}
count++;
}  
  };
  return newSteps;
  }
  useEffect(()=>{
const stepsState=steps.map((step,index)=>
Object.assign({},{
  description:step,
  completed:false,
  Highlighted:index===0?true:false,
  selected:index===0?true:false,

}
)
);
stepRef.current=stepsState;
const current=updateStep(currentStep -1, stepRef.current)

setNewStep(current)
  },[steps,currentStep]);
  const displaySteps=newStep.map((Step,index)=>{
    return(
      <div key={index}
            className={index!==newStep.length -1?'w-full flex items-center':'flex items-center'}>
        
    <div className='relative flex flex-col items-center text-teal-600'>
      <div className={`rounded-full transition duration-500 ease-in-out border-2 bg-blue-950 h-12 w-12
         flex items-center justify-center py-3 text-yellow-400 ${Step.selected&&" bg-blue-950 text-white font-bold border "}`}>
      {/* Display Number */}
      {Step.completed?(<span className='text-yellow-400 font-bold text-xl'>&#10003;</span>):(index+1)} 
      </div>
      {/* Description Div */}
      </div>
      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${Step.completed&&'border-blue-950'}`}> 
        {/* Display Line */}
      </div>
      </div>
    
    )
  })
  
 
  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
{displaySteps}
    </div>
  )
}

export default Stepper