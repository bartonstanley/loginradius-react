import React, { ComponentType, FC } from "react";
/**
 * @return { string}
 */
export interface WithAuthenticationRequiredOptions {
    returnTo?: string;
    onRedirecting?: () => JSX.Element;
}
declare const withAuthenticationRequired: <P extends object>(Component: React.ComponentType<P>, options?: WithAuthenticationRequiredOptions) => React.FC<P>;
export default withAuthenticationRequired;
