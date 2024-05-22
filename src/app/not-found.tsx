import Link from 'next/link';

export default function NotFound() {
    return (
        <section className='grid place-content-center h-dvh'>
            <div className='text-center space-y-5'>
                <h2 className='font-extrabold text-9xl'>
                    <span className='sr-only'>Error</span>404
                </h2>
                <span>
                    <p className='text-2xl font-semibold md:text-3xl'>
                        Sorry, we {"couldn't"} find this page.
                    </p>
                    <p className='dark:text-gray-400'>
                        But dont worry, you can find plenty of other things on
                        our homepage.
                    </p>
                </span>
                <Link
                    rel='noopener noreferrer'
                    href='/'
                    className='px-8 py-3 inline-block bg-pink-600 font-semibold rounded text-gray-50'
                >
                    Back to homepage
                </Link>
            </div>
        </section>
    );
}
