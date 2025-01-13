'use client'

import { Button } from '@/components/ui/button';

export default function Home() {

  return (
    <>
      <section className="w-full flex justify-center items-center h-[60svh] select-none text">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-6xl">Find Your Next Dream Job</h1>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Search through thousands of job postings and discover the perfect opportunity for you.
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <Button className='rounded-none'>
                <a href="/jobs">Find Job Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
