'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getRecommendationAction } from '@/app/recommend/actions';
import type { CoffeeRecommendationOutput } from '@/ai/flows/coffee-recommendation';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

const formSchema = z.object({
  tastePreferences: z.string().min(10, {
    message: "Please describe your taste preferences in at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function RecommendationForm() {
  const [recommendation, setRecommendation] = useState<CoffeeRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tastePreferences: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    const result = await getRecommendationAction(data.tastePreferences);
    setIsLoading(false);

    if ('error' in result) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    } else {
      setRecommendation(result);
    }
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="tastePreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-headline">Your Taste Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I love a medium roast with chocolatey and nutty notes. I prefer low acidity and a full body. I dislike anything too fruity.'"
                        className="min-h-[120px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Get Recommendation
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <Card className="mt-8 animate-pulse shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-6 w-6 text-accent" />
                    Brewing up your perfect match...
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
            </CardContent>
        </Card>
      )}

      {recommendation && !isLoading && (
        <Card className="mt-8 shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-accent" />
                Your AI-Curated Coffee
            </CardTitle>
            <CardDescription>Based on your taste profile, we recommend:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{recommendation.coffeeRecommendation}</h3>
            <div>
                <h4 className="font-semibold font-headline">Why you'll love it:</h4>
                <p className="text-muted-foreground mt-1">{recommendation.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
