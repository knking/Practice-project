import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle,save }) => {

    const [taskname,setTaskname] = useState('');
    const [description,setDescription] = useState('')

    const handleSave =()=>{
        let taskObj ={}
        taskObj["Name"]=taskname;
        taskObj["Description"]=description;
        save(taskObj)

    }
    return (
        <>
            <Modal
                isOpen={modal}
                modalTransition={{ timeout: 50 }}
                backdropTransition={{ timeout: 100 }}
                toggle={toggle}

            >
                <ModalHeader toggle={toggle}>Create Taks</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type='text' className='form-control' value={taskname}
                             onChange={(e)=>setTaskname(e.target.value)}>
                            </input>
                        </div>
                        <label>Task Description</label>
                        <div className="form-group">
                            <textarea  rows="5" className='form-control' value={description}
                            onChange={(e)=>setDescription(e.target.value)}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave} >
                        Create
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    )
}

export default CreateTask