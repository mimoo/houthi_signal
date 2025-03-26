export interface Message {
  sender: string;
  text: string;
  isMe: boolean;
  timestamp: string;
  type?: "system" | "message";
  icon?: "user-plus" | "clock";
  color?: string; // optional CSS text color class
}
