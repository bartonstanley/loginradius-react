export interface LRError {
    Description: string;
    ErrorCode: number;
    Message: string;
}
export interface LRConfigOptions {
    appName: string;
    apiKey: string;
    redirectUri: string;
    customDomain?: string;
}
export interface PopupConfigOptions {
    popup?: any;
    timeoutInSeconds?: number;
}
export interface User extends LRError {
    CreatedDate: string;
    Email: {
        Type: string;
        Value: string;
    }[];
    EmailVerified: boolean;
    FirstName?: string;
    FullName?: string;
    ID: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastLoginDate: string;
    LastLoginLocation: string;
    LocalCountry?: string;
    ModifiedDate: string;
    PasswordExpirationDate: string;
    Provider: string;
    ProfileImageUrls?: string[];
    RegistrationProvider: string;
    RegistrationSource: string;
    SignupDate: string;
    Uid: string;
}
export interface TokenInfo {
    returnTo?: string;
    token?: string;
    isauthenticated?: boolean;
}
/**
 * This Class returns the client of LoginRadius React SDK
 */
export default class LRClient {
    private options;
    /**
     *
     * @param {LRConfigOptions} options - LoginRadius SDK Options passed by the client
     */
    constructor(options: LRConfigOptions);
    /**
     * @return { Promise<TokenInfo>} Returns weather the use is logged in or not.
     */
    getAccessTokenSilently(): Promise<TokenInfo>;
    /**
     *
     * @param {string} returnTo - Specify the path where you want user to be redirect after login
     * @return {string}
     */
    buildLoginUrl(returnTo?: string): string;
    /**
     * This Function will be used to Login the using Redirect Method
     * @param {string} returnTo - Specify the path where you want user to be redirect after login
     */
    loginWithRedirect(returnTo: string): Promise<void>;
    /**
     * This function is used to loginwith popup.
     */
    loginWithPopup(): Promise<void>;
    /**
     *
     * @return { Promise<User> } Return the Logged in user details or throw the error of session is expired
     */
    getUser(): Promise<User>;
    /**
     * Build the Logout URL
     * @param { string } returnTo - The URL where your application should navigate after logout
     * @return {string} A URL String
     */
    buildLogoutUrl(returnTo?: string): string;
    /**
     * Use to Logout the user
     * @param {string} returnTo - The URL where your application should navigate after logout
     */
    logout(returnTo?: string): Promise<void>;
}
