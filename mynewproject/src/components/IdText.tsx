export interface IdText
{
    text: string
    id: number
}
export interface PasswordCheck
{
    oldPassword: string
    newPassword: string
    repeatPassword: string
    id: number
}
export interface GetID
{
    ID: number
}