'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Background Image with Extra Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[15px] z-0"
        style={{
          backgroundImage: `url('/artgal.jpg')`,
        }}
      />

      {/* Dropdown Menu as Sidebar Alternative */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="fixed top-4 right-4 bg-gray-900 bg-opacity-10 text-white hover:blur-md z-10"
          >
            ☰
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="absolute top-4 right-4 w-[200px] z-20 border border-black bg-transparent backdrop-blur-md text-black"
          align="end"
        >
          <DropdownMenuItem>
            <Link
              href="/"
              className="text-4xl text-black underline hover:text-red-500 w-full block transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/store"
              className="text-4xl hover:text-red-400 text-pink underline w-full block transition-colors duration-300 ease-in-out"
            >
              Store
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/works"
              className="hover:text-red-500 text-4xl text-slate- underline w-full block transition-colors duration-300 ease-in-out"
            >
              Works
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      
      {/* Bio Section */}
      <div className="relative flex flex-col items-center w-[80vw] h-1/4 m-6 max-w-[1200px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-black text-4xl font-extrabold uppercase text-center">
              <p>
                i left some errors for u
              </p>
              <p>
               ; )
              </p>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
