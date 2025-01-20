'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import TriangleCanvas from '@/components/ui/TriangleCanvas'; // Ensure this is the correct path
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Trigger the animation for the dropdown on page load
    const dropdownMenu = document.querySelector('.DropdownMenuContent');
    if (dropdownMenu) dropdownMenu.classList.add('animate-fade-to-white');
  }, []);

  return (
    <>
      {/* Triangle Canvas */}
      <TriangleCanvas />

      {/* Background Image with Extra Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[15px] z-[-1]"
        style={{
          backgroundImage: `url('/artgal.jpg')`,
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10">
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="fixed top-4 right-4 text-white hover:blur-md z-50 border border-white animate-fade-to-bg-black-opacity-60"
            >
              ☰
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="absolute top-4 right-4 w-[200px] bg-transparent backdrop-blur-md z-50 animate-fade-to-white"
          >
            <DropdownMenuItem>
              <Link
                href="/store"
                className="text-black text-4xl underline w-full block transition-colors hover:text-red-500"
              >
                Store
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/works"
                className="text-black text-4xl underline w-full block transition-colors hover:text-red-500"
              >
                Works
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/about"
                className="text-black text-4xl underline w-full block transition-colors hover:text-red-500"
              >
                About
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cards Section */}
        <div className="flex flex-col items-center w-full max-w-[1200px] px-4 gap-1 mt-16">
          {/* GSK Card */}
          <Card className="flex items-center backdrop-blur-md justify-center bg-transparent w-1/2 max-w-[50%] min-w-[40%] text-center border border-black shadow-lg rounded-lg mt-10 p-6 animate-fade-to-white">
            <CardHeader>
              <CardTitle className="text-black text-2xl font-extrabold uppercase animate-fade-to-black-text text-center">
                <span className="block">..hearts..</span>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Lower Card - Studios */}
          <Link
            href="/store"
            className="relative flex items-center bg-transparent backdrop-blur-md justify-center w-1/2 max-w-[50%] min-w-[40%] text-center border border-black shadow-lg rounded-lg mt-10 p-6 group animate-fade-to-white"
          >
            {/* Background with Hover Blur */}
            <span className="absolute inset-0 bg-transparent rounded-lg transition-all group-hover:blur-sm"></span>

            {/* Foreground Text */}
            <CardHeader className="relative z-[999]">
              <span className="text-black text-1xl font-bold transition-all group-hover:text-red-500 animate-fade-to-black-text">
                yucklabs@gmail.com
              </span>
            </CardHeader>
          </Link>
        </div>
      </div>
    </>
  );
}