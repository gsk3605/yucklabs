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
        className="absolute inset-0 bg-cover bg-center filter blur-[15px] z-[-1] animate-fade-to-transparent"
        style={{
          backgroundImage: `url('/artgal.jpg')`,
        }}
      />

      {/* Fading White Overlay */}
      <div className="absolute inset-0 bg-white z-[-1] animate-fade-to-white"></div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10">
          {/* Dropdown Menu */}
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="fixed top-4 right-4 bg-black bg-opacity-60 text-white hover:blur-sm z-50 border border-white"
            >
              ☰
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="absolute top-4 right-4 w-[200px] bg-transparent backdrop-blur-md z-50 animate-fade-to-white"
          >
            <DropdownMenuItem>
              <Link
                href="/"
                className="text-black text-4xl underline w-full block transition-colors hover:text-red-500"
              >
                Home
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
          <Card className="w-5/6 max-w-[600px] p-4 md:p-6 lg:p-8 mx-auto">
  <CardHeader>
    <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-center">
      <p>Only accepting a very limited number of clients.</p>
      <p>You may or may not be a good fit.</p>
    </CardTitle>
  </CardHeader>
</Card>

        </div>
      </div>
    </>
  );
}
