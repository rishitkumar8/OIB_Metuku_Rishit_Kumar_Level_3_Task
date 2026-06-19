import { createFileRoute, Link } from "@tanstack/react-router";
import heroPizza from "@/assets/hero-pizza.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Clock, Pizza, ShoppingBag, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forno - Choose Dashboard" },
      { name: "description", content: "Choose the customer or admin dashboard for Forno Pizza." },
      { property: "og:title", content: "Forno - Choose Dashboard" },
      { property: "og:description", content: "No login required. Open the customer or admin dashboard." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Pizza className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold">Forno</span>
          </Link>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-foreground">
              <Sparkles className="h-3 w-3" /> Hand-crafted, fired hot
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Forno
              <span className="block text-primary">Choose your dashboard.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              No login required. Pick Customer to order pizza, or Admin to manage orders and inventory.
            </p>
            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
              <Link to="/dashboard" className="block">
                <Card className="h-full border-2 transition hover:border-primary hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 font-display text-2xl">Customer</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Browse the menu, build a pizza, checkout, and track orders.
                    </p>
                    <Button className="mt-5 w-full">Go to Customer Dashboard</Button>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/admin" className="block">
                <Card className="h-full border-2 transition hover:border-primary hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ChefHat className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 font-display text-2xl">Admin</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Open the control panel for order queue and inventory management.
                    </p>
                    <Button className="mt-5 w-full" variant="outline">Go to Admin Dashboard</Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="mt-12 flex gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> 30-min delivery
              </div>
              <div className="flex items-center gap-2">
                <Pizza className="h-4 w-4 text-primary" /> Fresh daily
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-secondary/20 blur-3xl" />
            <img
              src={heroPizza}
              alt="Artisan margherita pizza with fresh basil and cherry tomatoes"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
