import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className='bg-gray-50 py-12'>
      <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div>
            <h2>Ready to Save Hours of Reading Time?</h2>
            <p>
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer
            </p>
          </div>
          <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <div>
              <Button
                size={'lg'}
                variant={'link'}
                className='w-full min-[400px] :w-auto bg-linear-r from-slate-900 to-rose-500 hover:no-underline hover:to-slate-900 hover:text-white text-white transition-all duration-300 flex items-center justify-center'
              >
                <Link
                  href={'/#pricing'}
                  className='flex items-center justify-center px-6'
                >
                  Get Started{' '}
                  <ArrowRight className='ml-2 h-4 w-4 animate-pulse' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
