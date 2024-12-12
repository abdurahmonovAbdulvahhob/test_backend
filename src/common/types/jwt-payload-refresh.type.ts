import { JwtPayload } from "./jwt-payload.type";

export type JwtPayloadWithRefreshToken = JwtPayload & { refresh_token: string };
