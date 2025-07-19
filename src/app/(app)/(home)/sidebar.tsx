import { Sheet,SheetContent,SheetHeader,SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarItem{
    href: string;
    children: React.ReactNode;
}

interface Props{
    items: SidebarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const Sidebar = ({ items, open, onOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="border-b p-4">
                    <div className="flex items-center">
                        <SheetTitle>Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                            <Link onClick={() => onOpenChange(false)} key={item.href} href={item.href} className="w-full text-left p-4 text-base font-medium items-center flex hover:bg-black hover:text-white">
                                {item.children} 
                            </Link> 
                    ))}
                    <div className="border-t">
                        <Link onClick={() => onOpenChange(false)} href="/sign-in" className="w-full text-left p-4 text-base font-medium items-center flex hover:bg-black hover:text-white">
                            Login
                        </Link>
                        <Link onClick={() => onOpenChange(false)} href="/sign-up" className="w-full text-left p-4 text-base font-medium items-center flex hover:bg-black hover:text-white">
                            Get Started : )
                        </Link>
                    </div>
                </ScrollArea>

            </SheetContent>
        </Sheet>
    )
}