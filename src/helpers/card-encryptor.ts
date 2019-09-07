export function encrypt(content: string): string{
    return atob(content);
}

export function decrypt(content: string) : string {
    return btoa(content);
}