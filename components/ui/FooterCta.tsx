import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const FooterCta = () => {
  return (
    <div>
            <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
              Partner with Anzi & Co. and take your business to new heights with our expert digital marketing solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <form action="" className='flex gap-4 flex-wrap'>

              <input type="email" required  />
              </form>
              <Button className='bg-black hover:bg-gray-900 transition-all'>
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FooterCta
