export interface BoundLogger {
  v: (message: string) => void;
  d: (message: string) => void;
  i: (message: string) => void;
  w: (message: string) => void;
  e: (message: string) => void;

  vJSON: (value: any, pretty: boolean) => void;
  dJSON: (value: any, pretty: boolean) => void;
  iJSON: (value: any, pretty: boolean) => void;
  wJSON: (value: any, pretty: boolean) => void;
  eJSON: (value: any, pretty: boolean) => void;
}
