interface user {
    username: string,
    userImg: string,
};

interface userContact {
    userContactName: string,
    userContactImg: string,
    contactBadge: string | null,
};

interface contactMessage {
    messageUID: string,
    message: string,
    senderID: string,
    date: Date,
}

interface message {
    message: string,
    receiverID: string,
    senderID: string,
    date: Date,
}

export type {
    user as userType,
    userContact as userContactType,
    message as messageType,
    contactMessage as contactMessageType,
};