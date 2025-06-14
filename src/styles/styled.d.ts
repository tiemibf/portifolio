import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string;
        text: string;
        textSecondary: string;
        body: string;
        dimmer: string;
    }
} 