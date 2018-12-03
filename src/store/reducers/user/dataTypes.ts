/*************************************************************************
 * LOGIN DATA TYPES
 *************************************************************************/
export interface IUserLoginData {
    readonly userId: string;
    readonly token: string;
}


/*************************************************************************
 * USER GET INFO DATA TYPES
 *************************************************************************/
export interface IUserInfoData {
    // readonly id: string;
    // readonly family_name: string;
    // readonly gender: string;
    readonly given_name: string;
    // readonly link: string;
    // readonly locale: string;
    readonly name: string;
    readonly picture: string;
}


/*************************************************************************
 * FETCH ERROR DATA TYPES
 *************************************************************************/
export interface IUserError {
    message: string;
}