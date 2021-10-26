import React, { useState, useEffect } from "react";

let ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status)

    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        //console.log(props.status)
        setStatus(props.status)
    }, [props.status])

     const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={'profileStatus'}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || '-----'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       autoFocus={true}
                       type={'text'}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;