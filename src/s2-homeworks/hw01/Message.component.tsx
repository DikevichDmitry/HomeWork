import React from "react";
import {
    MessageWrapper, MessageTitle, Container, AvatarContainer,
    AvatarImage, AvatarTimeStamp, MessageContent
} from "./Message.styles";
import {MessageType} from "./HW1";

type MessageComponentProps = {isFriend?: boolean ; message: MessageType }
export const MessageComponent: React.FC<MessageComponentProps> = ({isFriend,message}) => {
    const {id, user, message:messageProp} = message;
    return <Container>
        {isFriend && <AvatarContainer>
            <AvatarImage src="http://placekitten.com/200/300"/>
            <AvatarTimeStamp>9:01</AvatarTimeStamp>
        </AvatarContainer>}
        <MessageWrapper>

            <MessageTitle>{user.name}</MessageTitle>
            <MessageContent>
                Hello, she didn’t do anything and rested all day, how are you?
            </MessageContent>
        </MessageWrapper>

        {!isFriend && <AvatarContainer>
            <AvatarImage src="http://placekitten.com/200/300"/>
            <AvatarTimeStamp>9:01</AvatarTimeStamp>
        </AvatarContainer>}
    </Container>
}