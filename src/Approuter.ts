import {Router} from 'express'

export class AppRouter {
	private static instance: Router

	static getInstance(): Router {

		return AppRouter.instance || (AppRouter.instance = Router())
	// 	if (!AppRouter.instance) {
	// 		AppRouter.instance = Router()
	// 	}
		
	// 	return AppRouter.instance
	}
}