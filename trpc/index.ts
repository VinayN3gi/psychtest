import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {publicProcedure, router} from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/app/db';

export const appRouter=router({
    getUser:publicProcedure.query(async()=>{
        const {getUser}=getKindeServerSession()
        const user=await getUser()
        if(!user || !user.id) throw new TRPCError({code:'UNAUTHORIZED',message:'Not logged in'})

        const dbUser=await db.user.findFirst({where:{id:user.id}})   
        if(!dbUser)
        {
            try {
                const dbUser=await db.user.create({data:{id:user.id,email:user.email || ''}})
                console.log('Created user',dbUser)    

            } catch (error) {
                  console.error('Failed to create user',error)  
            }
        }    

        return dbUser
    })
})

export type AppRouter=typeof appRouter;