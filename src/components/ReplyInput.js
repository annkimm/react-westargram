import React, { Component } from 'react';
import "./FeedItem"
import './FeedItem.css'

class ReplyInput extends Component {

    state = {
        message: '',
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleReply = (e) => {
        if(e.key === "Enter" && e.target.value.length > 0){
            
            this.props.onKeyPress(this.state.message);
            this.state.message = '';
        }

    }

  

    bntClass = (e) => {
        return this.state.message.length > 0 ? 'on': '';
      }    

    render(){
        return(
            <div className="sectionIput">
                <input className="sectionIput_input" onChange={this.handleChange} onKeyPress={this.handleReply} placeholder="댓글 달기..." type="text" name="message" value={this.state.message} />
                <button className={`sectionIput_button ${ this.bntClass() }`} type="button" name="button">게시</button>
            </div>
        )
    }    
}

export default ReplyInput