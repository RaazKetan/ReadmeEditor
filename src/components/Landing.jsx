import{ Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import image from '../assets/image.png';

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
   <Header/>
    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-[1fr_600px] xl:gap-12 xl:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Beautiful docs, made simple.</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The Readme Editor lets you craft stunning documentation with ease. No more fumbling with complex
              toolchains. Just focus on your content, and we'll handle the rest.
            </p>   
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md  border-gray-200  bg-gray-900 text-white px-8 text-sm font-medium shadow-sm transition-colors hover:text-gray-900 
            hover:bg-gray-600"
            to={"/editor"}
          >
            Get Started
          </Link>
          </div>
          <img
            alt="Screenshot"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="340"
            src={image}
            width="600"
          />
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_700px] xl:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-100">New Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modern. Intuitive. Powerful.</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The Readme Editor is designed to make your documentation process seamless. With a sleek interface and a
              host of productivity features, you'll be crafting beautiful docs in no time.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">
                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                Easy WYSIWYG editing
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Write and format your content with a familiar word processor interface.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">
                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                Instant preview
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                See how your documentation will look as you type with live preview.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-semibold">
                {/* <CheckIcon className="mr-2 inline-block h-4 w-4" /> */}
                Collaboration tools
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Invite your team to review, comment, and edit your docs with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
   <Footer/>
  </div>
  )
}

export default Landing;
