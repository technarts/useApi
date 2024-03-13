type Headers = {
  "Accept"?: string,
  "Authorization"?: string,
  "Content-Type"?: string,
  [k: string]: any
}

export type Params = {
  url: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE" | "GET" | "DOWNLOAD" | "UPLOAD"
  responseGuard?: (r: Response, params: CallParams) => Promise<Response>;
  headers?: Headers,
}

export type CallParams = {
  url?: string,
  responseGuard?: (r: Response, params: CallParams) => Promise<Response>,
  headers?: Headers,
  payload?: any,
}

// RESP, error, fault respectively
export type CallResult<T> = [T | null, any, any]

export type ApiCounsel<T> = {
  RESP: T | null,
  inFlight: boolean,
  error: any,
  fault: any,
  call: (callParams?: CallParams) => Promise<CallResult<T>>,
  url: string,
}