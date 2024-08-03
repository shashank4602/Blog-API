import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src='ue' />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43(time)</div>
        </div>
    )
}

export default Message
