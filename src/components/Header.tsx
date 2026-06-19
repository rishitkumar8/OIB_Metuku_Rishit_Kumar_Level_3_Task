import { Link } from "@tanstack/react-router";
import { Pizza, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";

export function Header() {
  const cart = useCart();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Pizza className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold">Forno</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/dashboard" className="text-sm hover:text-primary">Menu</Link>
          <Link to="/build" className="text-sm hover:text-primary">Build a Pizza</Link>
          <Link to="/orders" className="text-sm hover:text-primary">Orders</Link>
          <Link to="/admin" className="text-sm font-semibold text-primary hover:underline">Admin</Link>
        </nav>
        <Link to="/cart">
          <Button variant="outline" size="sm" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {cart.length}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
}
