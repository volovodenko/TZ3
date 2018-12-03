/*************************************************************************
 * GET ALL NEWS DATA TYPES
 *************************************************************************/
export interface IGetNewsDataReceive {
    readonly success: boolean;
    readonly feeds?: IGetNews[];
    readonly message?: string;
}

export interface IGetNews {
    readonly _id: string;
    readonly title: string;
    readonly content: string;
    readonly creator: {
        _id: string;
        displayName: string;
        picture: string;
    };
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly _v0: number;
}


/*************************************************************************
 * GET READ ONE NEWS DATA TYPES
 *************************************************************************/
export interface IGetReadOneNewsReceive {
    success: boolean;
    feed?: IGetNews;
    message?: string;
}


/*************************************************************************
 * UPDATE NEWS DATA TYPES
 *************************************************************************/
export type IUpdateNewsReceive = IGetReadOneNewsReceive;


/*************************************************************************
 * POST NEWS DATA TYPES
 *************************************************************************/
export interface IPostNewsDataSend {
    readonly title: string;
    readonly content: string;
}

export interface IPostNewsDataReceive {
    readonly success: boolean;
    readonly feed?: IPostNews;
    readonly message?: string;
}


export interface IPostNews {
    readonly _id: string;
    readonly title: string;
    readonly content: string;
    readonly creator: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly _v0: number;
}


/*************************************************************************
 * DELETE NEWS DATA TYPES
 *************************************************************************/
export interface IDeleteNewsDataReceive {
    readonly success: boolean;
    readonly _id?: string;
    readonly message?: string;
}


/*************************************************************************
 * FETCH ERROR DATA TYPES
 *************************************************************************/
export interface IFetchError {
    message: string;
}





