
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react'
import { navigate } from '@reach/router';
import Modal from "@bdenzer/react-modal";
import ModalView from './ModalView';

interface ISideBar{
  objectId?:any; 
  object: string;
}

const SidebarLeft: React.FC<ISideBar> = ({object, objectId}) => {

    const [shouldShowModal, setModal] = React.useState(false);
    const openModal= () => {
        setModal(true);
      }
    
      const closeModal= () => {
        setModal(false);
      }
  return (
   <React.Fragment>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={true}
        width='thin'
      >
        <Divider section hidden/>
        <Menu.Item as='a' onClick={async () => await navigate("/")}>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item onClick={openModal} as='a'>
          <Icon name='add circle' />
          Create
        </Menu.Item>
      </Sidebar>
              <Modal closeModal={closeModal} shouldShowModal={shouldShowModal}  >
              <ModalView object= {object}/>
              </Modal>
              </React.Fragment>
    
  
  )
}

export default SidebarLeft; 