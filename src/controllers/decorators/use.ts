import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetaDataKeys } from './MetaDataKeys'



export function use(middleware:RequestHandler) {
	return function(target: any, key: string, desc: PropertyDescriptor) {
		const middlewares = Reflect.getMetadata(MetaDataKeys.MiddleWare, target, key) || []

		// middlewares.push(middlewares)

		Reflect.defineMetadata(MetaDataKeys.MiddleWare, [...middlewares, middleware], target, key)
	}

}