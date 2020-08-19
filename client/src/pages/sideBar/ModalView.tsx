
import React from 'react'
import CreateCinema from '../../components/cinema/CreateCinema';
import CreateMovie from '../../components/movie/CreateMovie';

interface IModalView{
    object:string;
    objectId?:any; 
    closeModal: () => void;
  
}

const ModalView: React.FC<IModalView> = ({object, objectId, closeModal}) => {

    console.log(objectId); 

    const whichModal =() =>  {
        if (object === "cinema") {
          return (
            <div>
             <CreateCinema closeModal= {closeModal} />
            </div>
          );
        }
    
        if (object === "movie") {
          return (
            <div>
            <CreateMovie closeModal= {closeModal} cinemaId= {objectId} />
            </div>
          );
        }

        if (object=== "deletemovie"){
          return(
            <div> 
              
            </div>
          )
        }
   
    }


  return (
   <React.Fragment>
      {whichModal()}
   </React.Fragment>
    
  
  )
}

export default ModalView; 