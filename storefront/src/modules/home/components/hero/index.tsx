import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
         Welcome to Stayples! Your go-to destination for hassle-free grocery shopping. Whether you're stocking up on essentials or ordering your favorite foodstuffs, we’re here to make it easy and convenient. Let’s get started and make your shopping a breeze!
          </Heading>
          
        </span>
      </div>
    </div>
  )
}

export default Hero
