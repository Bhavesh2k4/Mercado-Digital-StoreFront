"use client"
import React from 'react'
import { Form , FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { loginSchema } from '../../schemas';
import Link from 'next/link';
import { Boldonse } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const boldonse = Boldonse({
  subsets: ['latin'],
  weight: ['400'],
});

const SignInView = () => {
  const router =useRouter();

  const trpc = useTRPC();
  const login = useMutation(trpc.auth.login.mutationOptions(
    {
      onError: (error) => {
        toast.error(error.message || 'An error occurred during login');
      },
      onSuccess: () => {
        router.push('/');
      }
    }
  ));
  const form = useForm<z.infer<typeof loginSchema>>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login.mutate(values);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
        <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 p-4 lg:p-14">
                <div className='flex items-center justify-between b-8'>   
                  <Link href='/'>
                    <span className={cn("text-2xl font-semibold", boldonse.className, "text-black" )}>Mercado</span>
                  </Link>
                  <Button asChild variant={'elevated'} size={'sm'} className='bg-black text-white hover:bg-pink-400'>
                    <Link prefetch href='/sign-up'>Sign Up</Link>
                  </Button>
                </div>
                <h1 className='text-4xl font-medium'>
                  The digital products marketplace
                </h1>
                <FormField 
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField 
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base'>Password</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your Password' {...field}  type='password'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <Button disabled={login.isPending} type='submit' size="lg" variant="elevated" className='bg-black text-white hover:bg-pink-400 hover:text-primary'>
                  Sign In
                </Button>

              </form> 
            </Form>

        </div>
        <div className="h-screen w-full lg:col-span-2 hidden lg:block" style={{ backgroundImage: 'url(/auth-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </div>
  )
}

export default SignInView