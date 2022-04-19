import React from "react";
import { AuthState } from "./redux/action";
export interface LRContextOptions extends AuthState {
    loginWithRedirect: (returnTo?: string) => Promise<void>;
    loginWithPopup: () => Promise<void>;
    logout: (returnTo?: string) => Promise<void>;
    getAccessTokenSilently: () => Promise<string>;
}
export declare const LRContext: React.Context<LRContextOptions>;
