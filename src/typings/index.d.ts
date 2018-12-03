declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

declare module '*.svg' {
    const content: any;
    export = content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
