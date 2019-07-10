export class Friend {
  name: string;
  status: string;
  messages: Message[];
  about: string;

  rows: number;
  cols: number;
}

export class Message {
  who: string;
  message: string; 
}