import { Request, Response, NextFunction } from "express";
import { controller, get, use, bodyValidator, post} from './decorators';

function logger (req: Request, res: Response, next: NextFunction) {
 console.log('Request was made!')
  next()
}



@controller('/auth')
class LoginController { 

  
 
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postlogin(req: Request, res: Response)  {
				const {email, password} = req.body
				if ( email == 'boris@gmail.com' && password == '1') {
					
						req.session = { 
              loggedIn: true,
              email: email,
              password: password
            }
						res.redirect('/')
				} 
				 else {
						res.send(`
							<div>
								<h3>Invalid email or PASSWORD</h3>
								<a href="/auth/login">Login</a>
							</div>
						`
	          )
				
				}
		}

    @get('/logout')
    getLogout(req: Request, res: Response) {
						req.session = { 
              loggedIn: false,
              email: null,
              password: null}
						res.redirect('/')
				
		}

}

