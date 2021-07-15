import React from 'react';
 
import chat from '../assets/img/Circle-icons-chat.svg.png';



export const Chat = () => {
    return (
        <div className="container">
            {/* <!-- chat box --> */}
            <div className="chat-box">
                {/* <!-- client --> */}
                <div className="client">
                    <img src={'../assets/img/logo.png'} alt="logo" />
                    <div className="client-info">
                        <h2>Thanos</h2>
                        <p>online</p>
                    </div>
                </div>

                {/* <!-- main chat section --> */}
                <div className="chats">
                    <div className="client-chat">Hi!</div>
                    <div className="my-chat">Hi!</div>
                    <div className="client-chat">How can i help you?</div>
                    <div className="my-chat">How you create this chat box?</div>
                    <div className="client-chat">Watch complete video for your answer.</div>
                </div>

                {/* <!-- input field section --> */}
                <div className="chat-input">
                    <input type="text" placeholder="Enter Message" />
                    <button className="send-btn">
                        <img src="send.png" alt="send-btn" />
                    </button>
                </div>
            </div>

            {/* <!-- button --> */}
            <div className="chat-btn">
                <img src={chat} alt="chat box icon btn" />
            </div>
        </div>

    
    )
}
