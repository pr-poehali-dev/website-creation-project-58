import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@titanlock.ru" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Icon name="Mail" size={16} />
              info@titanlock.ru
            </a>
            <span className="hidden md:block">Пн-Пт: 9:00-18:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:88003500828" className="flex items-center gap-2 font-semibold hover:text-accent transition-colors">
              <Icon name="Phone" size={16} />
              8 (800) 350-08-28
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <Icon name="Lock" className="text-white" size={28} />
            </div>
            <div>
              <div className="font-bold text-xl text-secondary">TITAN LOCK</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Промышленная арматура</div>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl hidden lg:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск по артикулу или названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-5 pr-12 text-base"
              />
              <Button size="icon" className="absolute right-0 top-0 h-12 w-12">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="outline" className="relative h-12 px-4">
                <Icon name="ShoppingCart" size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="ml-2 hidden md:inline">Корзина</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <nav className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Link to="/catalog">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Grid3x3" size={18} className="mr-2" />
                Каталог
              </Button>
            </Link>
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <Link to="/promotions" className="text-secondary hover:text-primary transition-colors">Акции</Link>
              <Link to="/about" className="text-secondary hover:text-primary transition-colors">О компании</Link>
              <Link to="/contacts" className="text-secondary hover:text-primary transition-colors">Контакты</Link>
              <a href="#delivery" className="text-secondary hover:text-primary transition-colors">Доставка и оплата</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
