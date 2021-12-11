import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
	body: {[key: string]: string | undefined}
}

function requireAuth(req:Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next()
		return
	}

	res.status(403)
	res.send('Accsess is denied')
}

const router = Router()

router.get('/login', (req:Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form> 
    `) 

})


router.post('/login', (req: RequestWithBody, res: Response) => {
				const {email, password} = req.body
				if (email && password && email == 'boris@gmail.com' && password == '1') {
					
						req.session = { loggedIn: true}
						res.redirect('/')
				} 
				 else {
						res.send(`
							<div>
								<h3>Invalid email or password</h3>
								<a href="/login">Log in</a>
							</div>
						`
	)
				
				}
		})

		router.get('/', (req:Request, res: Response) => {
			if (req.session && req.session.loggedIn) {
					res.send( `
							<div>
								<h3> You are logged in!</h3>
								<a href="/logout">Logout</a>
							</div>	
						`)
			} else {
					res.send( `
							<div>
								<h3> You are not logged in!</h3>
								<a href="/login">Log in</a>
							</div>	
						`)
			}
		})

		router.get('/logout', (req: RequestWithBody, res: Response) => {
						req.session = { loggedIn: false}
						res.redirect('/')
				
		})

		router.get('/protected', requireAuth, (req: Request, res:Response) => {
			res.send('Welcome to protected route , logged in user')
		})

export {router}