export enum SocialCategoryEnum {
    Telegram = "telegram",
    Instagram = "instagram",
    VKontakte = "vkontakte",
    YouTube = "youtube",
    Gmail = "gmail",
    Other = "other"
}

export type SocialNetwork = {
    Network: SocialCategoryEnum,
    Value: string
}

export type SliderPost = {
    id: number,
    // photo: string, МБ ПОТОМ ДОБАВЛЮ, ПОКА ЧТО ХЗ ЗАЧЕМ
    text: string,
    Author: string,
    SocialNetworks: Array<SocialNetwork>
}

