import React, { PropsWithChildren } from "react";
import { TokenInfo } from "../LRClient";
export interface LRAuthProps {
    children: React.ReactNode;
    appName: string;
    apiKey: string;
    redirectUri: string;
    customDomain?: string;
    onRedirectCallback?: (tokenInfo?: TokenInfo) => void;
}
declare const LRAuthProvider: ({ children, onRedirectCallback, ...options }: PropsWithChildren<LRAuthProps>) => JSX.Element;
export default LRAuthProvider;
