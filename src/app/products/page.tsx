
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { products } from '@/lib/products';
import ProductCardActions from '@/components/ProductCardActions';

export default function ProductsPage() {

  return (
    <div className="container mx-auto px-3 md:px-6 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl md:text-5xl font-headline font-bold text-primary">Our Coffee Collection</h1>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg text-muted-foreground px-4">
          Explore our curated selection of single-origin coffees from the world's most renowned growing regions.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-3 md:gap-4">
        <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
        <div className="flex items-center gap-2 md:gap-4">
          <Select>
            <SelectTrigger className="w-[140px] md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link href={`/products/${product.id}`} className="flex flex-col flex-grow">
              <CardHeader className="p-0">
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-40 md:h-52"
                  data-ai-hint={product.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <CardDescription className="text-xs md:text-sm">{product.origin}</CardDescription>
                  <CardTitle className="font-headline text-lg md:text-xl mt-1">{product.name}</CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Notes: {product.notes}</p>
                </div>
                <div className="mt-4 md:mt-6 flex justify-between items-center">
                  <span className="text-lg md:text-xl font-semibold text-primary">${product.price.toFixed(2)}</span>
                </div>
              </CardContent>
            </Link>
             <div className="p-4 md:p-6 pt-0">
                 <ProductCardActions product={product} />
               </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
