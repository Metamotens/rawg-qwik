import type { PlatformsInfo } from "~/models/game";

enum PlatformImage {
    PC = 'icons/windows.svg',
    XBOX = 'icons/xbox.svg',
    PLAYSTATION = 'icons/playstation.svg',
    MACOS = 'icons/macos.svg',
    IOS = 'icons/ios.svg',
    ANDROID = 'icons/android.svg',
    NINTENDO = 'icons/nintendo-switch.svg',
    LINUX = 'icons/linux.svg',
    VITA = 'icons/vita.svg',
    WEB = 'icons/web.svg',
}

export const getGamePlatformImages = (platformsInfo: PlatformsInfo[]): string[] => {
    const images = platformsInfo.map(slug => Object.entries(PlatformImage)
        .find(([key]) => slug.platform.slug.includes(key.toLowerCase()))?.[1].valueOf() ?? '')
        .reduce((acc: string[], slug) => !acc.includes(slug) ? [...acc, slug] : acc, []);
    return [...new Set(images)];

}