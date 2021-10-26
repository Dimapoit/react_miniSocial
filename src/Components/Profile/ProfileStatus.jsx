import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.props.updateStatus(this.state.status)
        }
    }

    activateEditMode = () => {

        //this.state.editMode = true

        this.setState({editMode: true})
    }

    deactivateEditMode = () => {

        //this.state.editMode = true
        this.props.updateStatus(this.state.status)
        this.setState({editMode: false})

    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div className={'profileStatus'}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> {this.props.status || '-----'} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           autoFocus={true} type={'text'}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;