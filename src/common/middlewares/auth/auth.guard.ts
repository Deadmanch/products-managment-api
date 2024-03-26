import { NextFunction, Request, Response } from 'express';
import { HTTPStatusCode } from '../../http.status-code.enum';
import { IMiddleware } from '../middlewares.interface';

export class AuthGuard implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}
		res.status(HTTPStatusCode.UNAUTHORIZED).send({ error: USER_IS_NOT_AUTHORIZED });
	}
}
