import { exec } from "child_process";

export enum Suite {
    Spade = 'spade',
    Heart = 'heart',
    Diamond = 'diamond',
    Club = 'club',
}

export function mapShortCode(s: 's' | 'h' | 'd' | 'c' | string): Suite {
    switch (s) {
        case 's':
            return Suite.Spade;
        case 'h':
            return Suite.Heart;
        case 'd':
            return Suite.Diamond;
        case 'c':
            return Suite.Club;
        default:
            throw new Error('Can not find type ' + s);
    }
}