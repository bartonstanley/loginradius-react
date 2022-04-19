import { PopupConfigOptions, TokenInfo } from "./LRClient";
export declare const openPopup: (url: string) => Window;
export declare const runPopup: (config: PopupConfigOptions) => Promise<TokenInfo>;
