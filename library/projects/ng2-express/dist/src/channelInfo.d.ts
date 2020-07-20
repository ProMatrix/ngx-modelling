export declare class ChannelRegistration {
    id: number;
    name: string;
    subscriptions: string[];
}
export declare class ChannelMessage {
    message: string;
    syncAction: string;
    type: string;
    sendersName: string;
}
export declare class ChannelSync {
    cancel: boolean;
    type: string;
}
export declare class GetAllChannels {
    channels: ChannelRegistration[];
    type: string;
}
