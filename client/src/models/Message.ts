import { User } from "./User"

export interface Message {
  id: number;
  user: User;
  content: string;
  isFirst: boolean;
  // TODO: change to right type for time
  timestamp?: string;
}

export interface MessageProps {
  messages: Message[];
}