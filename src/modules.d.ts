declare namespace NodeJS {
    export interface ProcessEnv {
        ATLAS_URI: string,
        CLIENT_SECRET: string,
        CLIENT_ID: string,
        JWT_AUTHORIZATION: string,
        REACT_APP_URL: string,
        EMAIL_SERVICE: string,
        EMAIL_USER: string,
        EMAIL_PASS: string,
    }
}