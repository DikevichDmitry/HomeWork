import React from 'react'
import s from './FriendMessage.module.css'
import {MessageComponent} from "../Message.component"
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные


export const FriendMessage = (message: MessageType) => {

    return <MessageComponent isFriend message={message} />
}

