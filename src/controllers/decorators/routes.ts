import 'reflect-metadata';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';

function routeBinder(method: string) {
   return function (path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.Method,method, target, key);
 
  }
   }
}


export const get = routeBinder(Methods.get)
export const put = routeBinder(Methods.put)
export const del = routeBinder(Methods.del)
export const post = routeBinder(Methods.post)
export const patch = routeBinder(Methods.patch)