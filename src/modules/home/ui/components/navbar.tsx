"use client";

import {useState} from 'react'
import { Boldonse } from 'next/font/google'
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Sidebar } from './sidebar';
import { MenuIcon } from 'lucide-react';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: ["400"],
});

interface NavbarItemProps {
    href : string;
    children: React.ReactNode;
    isActive?: boolean;
};
const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
    return (
        <Button variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white")} asChild>
            <Link href={href}>{children}</Link>
        </Button>
    )
}

const NavbarItems = [
    {href: '/',children: 'Home'},
    {href: '/about',children: 'About'},
    {href: '/features',children: 'Features'},
    {href: '/pricing',children: 'Pricing'},
    {href: '/contact',children: 'Contact'},
];

const Navbar = () => {

    const pathname =usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const trpc=useTRPC();
    const session =useQuery(trpc.auth.session.queryOptions()) 
  return (
    <nav className='h-18 flex border-b justify-between font-medium bg-white'>
        <Link href='/' className='pl-6 flex items-center'>
          <span className={cn("text-4xl font-semibold", boldonse.className)}>mercado</span>
        </Link>

        <Sidebar items={NavbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>

        <div className='hidden items-center gap-4 lg:flex'>
            {NavbarItems.map((item) => (
                <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
                    {item.children}
                </NavbarItem>
            ))}
        </div>

        {session.data?.user?(
            <div className='hidden lg:flex'>
                <Button asChild className='border-l border-b-0 border-t-0 border-r-0 px-12 rounded-none h-full bg-black text-white hover:text-black hover:bg-pink-400 text-lg transition-colors'>
                    <Link prefetch href='/admin'>Dashboard</Link>
                </Button>
            </div>
        ):
        (
        <div className='hidden lg:flex'>
            <Button asChild variant="secondary" className='border-l border-b-0 border-t-0 border-r-0 px-12 rounded-none h-full bg-white hover:bg-pink-400 text-lg transition-colors'>
                <Link prefetch href='/sign-in'>Login</Link>
            </Button>
            <Button asChild className='border-l border-b-0 border-t-0 border-r-0 px-12 rounded-none h-full bg-black text-white hover:text-black hover:bg-pink-400 text-lg transition-colors'>
                <Link prefetch href='/sign-up'>Get Started : ) </Link>
            </Button>
        </div>
        )
       }

        <div className='flex items-center justify-center lg:hidden'>
            <Button variant="ghost" className='size-12 border-transparent' onClick={() => setIsSidebarOpen(true)}>
                <MenuIcon/>
            </Button>
        </div>
            
    </nav>
  )
}

export default Navbar