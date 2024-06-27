import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {publicProcedure, router} from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/app/db';
import * as z from 'zod';


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
    }),
    createInerestInvetory:publicProcedure.input(z.object({
        answerOne:z.string() || z.null(),
        answerTwo:z.string() || z.null(),
        answerThree:z.string() || z.null(),
        answerFour:z.string() || z.null(),
        answerFive:z.string() || z.null(),
        answerSix:z.string() || z.null(),
        answerSeven:z.string() || z.null(),
        answerEight:z.string() || z.null(),
        answerNine:z.string() || z.null(),
        answerTen:z.string() || z.null(),
        answerEleven:z.string() || z.null(),
        answerTwelve:z.string() || z.null(),
    })).mutation(async({input})=>{
        const {getUser}=getKindeServerSession()
        const user=await getUser()
        if(!user || !user.id) throw new TRPCError({code:'UNAUTHORIZED',message:'Not logged in'})
        try {
            const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve}=input
            const upload=await db.interestInventory.create({data:{
                answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,
                userId:user.id,
            }})
            console.log('Created interest inventory',upload)
            return upload
        } catch (error) {
            console.error('Failed to create interest inventory',error)
            throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create interest inventory'})
        }    

    }),
})

export type AppRouter=typeof appRouter;