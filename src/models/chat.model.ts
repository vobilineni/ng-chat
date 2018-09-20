
export interface ChatMessage {
    message?: string;
    timestamp?: Date;
    chatRoom?: string;
    screenName?: string;
}

const myChat: ChatMessage = {
    message: 'dell',
    timestamp: new Date(),
    chatRoom: '',
    screenName: 'name'
};
const myChat2: ChatMessage = {
    chatRoom: 'room'
};
const totalObj: ChatMessage = { ...myChat, chatRoom: myChat2.chatRoom };
