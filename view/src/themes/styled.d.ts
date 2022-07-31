import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        color: {
          primary: string;
          secondary: string;
          background: string;
          dark: string;
          fifth:string;
      
          light: string;
        },
    }
}