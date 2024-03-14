import {api} from './baseUrl';

  const cotnact =async (data)=>{
   return await api.post('/feedback',data) 
}

export const repository= {
   cotnact
}