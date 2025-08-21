import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Story</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ArtisanLane was born from a simple, shared passion: the love of exceptional coffee. We believe that a great cup of coffee is more than just a morning ritual; it’s an experience. It’s the story of the soil, the climate, and the skilled hands that cultivate each bean.
          </p>
          <p className="mt-4 text-muted-foreground">
            We grew tired of the generic, mass-produced coffee that floods the market. We knew there was a world of incredible, unique flavors waiting to be discovered, crafted by small-batch artisans who pour their hearts into their work. Our mission became clear: to bridge the gap between these passionate roasters and discerning coffee lovers like you.
          </p>
          <p className="mt-4 text-muted-foreground">
            Using a blend of expert curation and our innovative AI-powered recommender, we tailor a coffee journey specifically for your palate. We invite you to join us in celebrating the craft, the community, and the unparalleled joy of a truly perfect cup.
          </p>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Artisan coffee roaster"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="coffee roaster"
          />
        </div>
      </div>
    </div>
  )
}
