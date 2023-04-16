import BaseResponse from "./baseResponse";

export interface MemberEntity {
    id:number,
    nickname: string,
    email: string,
    password: string,
    api_token: string,
    status: number,
    points: number,
}

export default interface Member extends BaseResponse {
    data: MemberEntity
}