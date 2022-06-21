
    <ScrollToBottom className='message-container'>
    {messageList.map((messageContent, i)=>{
        return (
            <div 
                className='message'
                id={username === messageContent.author ? "other" : "you"}
                key={i}
                >
                <div>
                    <div className='message-content'>
                        <p>{messageContent.message}</p>
                    </div>
                    <div className='message-meta'>
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                    </div>
                </div>
            </div>
        );
    })}
    </ScrollToBottom>