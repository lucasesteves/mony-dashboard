import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,
      danger:string,
      success: string,
      white:string,
      background: string,
      grey:string,
      text: string
    };
  }
}
