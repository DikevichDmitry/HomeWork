import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import {MessageComponent} from "../Message.component";
// нужно создать правильный тип вместо any


// нужно отобразить приходящие данные

export const Message = (message : MessageType) => {

    return <MessageComponent isFriend={false} message={message} />}

