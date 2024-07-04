import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import {publicProcedure, router} from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/app/db';
import * as z from 'zod';
import ValueAssesment from '@/app/components/ValueAssesment';


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
         
        const file=await db.interestInventory.findFirst({where:{userId:user.id}})
        if(file){
          
            const {answerId}=file
            await db.interestInventory.delete({where:{userId:user.id,answerId:answerId}})

            try {
                const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve}=input
                const upload=await db.interestInventory.create({data:{
                    answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,
                    userId:user.id,
                }})
                return upload
            } catch (error) {
                throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create interest inventory'})
            }

        }       


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

    createPersonalityInventory:publicProcedure.input(z.object({
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
        answerThirteen:z.string() || z.null(),
        answerFourteen:z.string() || z.null(),
        
    })).mutation(async ({input})=>{
        const {getUser}=getKindeServerSession()
        const user=await getUser()
        if(!user || !user.id) throw new TRPCError({code:'UNAUTHORIZED',message:'Not logged in'})

        const file=await db.personalityInventory.findFirst({where:{userId:user.id}})
        
        if(file){
            const {answerId}=file
            await db.personalityInventory.delete({where:{userId:user.id,answerId:answerId}})
            
            try {
                const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,answerThirteen,answerFourteen}=input
                const upload=await db.personalityInventory.create({data:{
                    answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,answerThirteen,answerFourteen,
                    userId:user.id,
                }})
                return upload
            } catch (error) {
                throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create personality inventory'})
            }
        }

        try {
            const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,answerThirteen,answerFourteen}=input
            const upload=await db.personalityInventory.create({data:{
                answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,answerThirteen,answerFourteen,
                userId:user.id,
            }})
            return upload
        } catch (error) {
            throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create personality inventory'})
        }
    }),
    skillAssesmentAnswer:publicProcedure.input(z.object({
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

        const file=await db.skillAssesment.findFirst({where:{userId:user.id}})
        
        if(file){
            const {answerId}=file
            await db.skillAssesment.delete({where:{userId:user.id,answerId:answerId}}
            )
            try {
                const {answerOne,answerSeven,answerEight,answerFive,answerTwo,answerTwelve,answerSix,answerNine,answerTen,answerThree,answerFour,answerEleven}=input
                const upload=await db.skillAssesment.create({data:{
                    answerOne,answerSeven,answerEight,answerFive,answerTwo,answerTwelve,answerSix,answerNine,answerTen,answerThree,answerFour,answerEleven,
                    userId:user.id,
                }})
                return upload
            } catch (error) {
                throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create skill assesment'})
            }
        }   
        try {
            const {answerOne,answerSeven,answerEight,answerFive,answerTwo,answerTwelve,answerSix,answerNine,answerTen,answerThree,answerFour,answerEleven}=input
            const upload=await db.skillAssesment.create({data:{
                answerOne,answerSeven,answerEight,answerFive,answerTwo,answerTwelve,answerSix,answerNine,answerTen,answerThree,answerFour,answerEleven,
                userId:user.id,
            }})
            console.log('Created skill assesment',upload)
            return upload
        } catch (error) {
            console.error('Failed to create skill assesment',error)
            throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create skill assesment'})
        }
    }),
    ValueAssesment:publicProcedure.input(z.object({
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

        const file=await db.valueAssesment.findFirst({where:{userId:user.id}})
        
        if(file){
            const {answerId}=file
            await db.valueAssesment.delete({where:{userId:user.id,answerId:answerId}})
            try {
                const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve}=input
                const upload=await db.valueAssesment.create({data:{
                    answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,
                    userId:user.id,
                }})
                return upload
            } catch (error) {
                throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create value assesment'})
            }
        }    

        try {
            const {answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve}=input
            const upload=await db.valueAssesment.create({data:{
                answerOne,answerTwo,answerThree,answerFour,answerFive,answerSix,answerEight,answerNine,answerTen,answerEleven,answerSeven,answerTwelve,
                userId:user.id,
            }})
            console.log('Created value assesment',upload)
            return upload
        } catch (error) {
            console.error('Failed to create value assesment',error)
            throw new TRPCError({code:'INTERNAL_SERVER_ERROR',message:'Failed to create value assesment'})
        }
    })
})

export type AppRouter=typeof appRouter;