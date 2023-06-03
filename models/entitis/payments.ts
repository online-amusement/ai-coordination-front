import BaseResponse from "./baseResponse";

export interface PaymentsEntity {
    id:number,
    amount: string,
    points: string,
    started_at: string,
    ended_at: string,
}

export default interface payments extends BaseResponse {
    data: PaymentsEntity
}