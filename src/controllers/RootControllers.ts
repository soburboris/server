import {Response, Request, NextFunction} from 'express'
import {get, controller , use} from './decorators'

function requireAuth(req:Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next()
		return
	}

	res.status(403)
	res.send('Accsess is denied')
}


@controller('')
class RootController {

	@get('/')
	getRoot(req:Request, res: Response) {
	if (req.session && req.session.loggedIn) {
					res.send( `
							<div>
								<h3> You are logged in!</h3>
								<a href="/auth/logout">Logout</a>
							</div>	
						`)
			} else {
					res.send( `
							<div>
								<h3> You are not logged in!</h3>
								<a href="/auth/login">Log in</a>
							</div>	
						`)
			}

	}
		@get('/protected')
		@use(requireAuth)
		getProtected(req: Request, res:Response) {
			res.send('Welcome to protected route , logged in user')
		}
}