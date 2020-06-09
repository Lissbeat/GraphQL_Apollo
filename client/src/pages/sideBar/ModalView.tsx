
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react'
import { navigate } from '@reach/router';
import Modal from "@bdenzer/react-modal";
import CreateCinema from '../../components/cinema/CreateCinema';
import CreateMovie from '../../components/movie/CreateMovie';

interface IModalView{
    object:string;
  
}

const ModalView: React.FC<IModalView> = ({object}) => {


    const whichModal =() =>  {
        if (object === "cinema") {
          return (
            <div>
             <CreateCinema />
            </div>
          );
        }
    
        if (object === "movie") {
          return (
            <div>
            <CreateMovie/>
            </div>
          );
        }
   
    }


  return (
   <React.Fragment>
      {whichModal()}
   </React.Fragment>
    
  
  )
}

export default ModalView; 