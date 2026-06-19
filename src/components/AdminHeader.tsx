import { Link } from "@tanstack/react-router";
import { Boxes, ChefHat, ClipboardList, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/admin" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold">
            Forno <span className="text-primary">Admin</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/admin/orders"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary [&.active]:font-semibold [&.active]:text-primary"
          >
            <ClipboardList className="h-4 w-4" /> Orders
          </Link>
          <Link
            to="/admin/inventory"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary [&.active]:font-semibold [&.active]:text-primary"
          >
            <Boxes className="h-4 w-4" /> Inventory
          </Link>
        </nav>
        <Link to="/dashboard">
          <Button variant="ghost" size="sm">
            <Store className="mr-1 h-4 w-4" /> Customer
          </Button>
        </Link>
      </div>
    </header>
  );
}
