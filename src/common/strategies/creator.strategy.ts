import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../types';
import { Request } from 'express';

@Injectable()
export class CreatorStrategy extends PassportStrategy(Strategy, 'access-creator') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_ADMIN_KEY,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    // console.log("req", req);
    console.log('payload', payload);
    if (!payload.is_creator) {
      throw new UnauthorizedException('Unauthorized Access');
    }
    return payload;
  }
}
