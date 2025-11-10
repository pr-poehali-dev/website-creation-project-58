import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const categories = [
    { id: "fittings", name: "Фитинги", icon: "Plug", description: "Резьбовые и приварные фитинги" },
    { id: "adapters", name: "Адаптеры", icon: "Layers", description: "Переходники различных типов" },
    { id: "hoses", name: "Рукава", icon: "Cable", description: "Гидравлические рукава высокого давления" },
    { id: "camlocks", name: "Камлоки", icon: "Lock", description: "Быстроразъёмные соединения" },
    { id: "connections", name: "Соединения", icon: "Link", description: "Муфты и штуцеры" },
    { id: "valves", name: "Клапаны", icon: "Settings", description: "Запорная и регулирующая арматура" }
  ];

  const products = [
    {
      id: 1,
      name: "Камлок тип A (алюминий)",
      article: "CL-A-50-AL",
      image: "Package",
      price: "По запросу",
      category: "Камлоки"
    },
    {
      id: 2,
      name: "Адаптер резьбовой NPT",
      article: "AD-NPT-3/4",
      image: "Plug",
      price: "По запросу",
      category: "Адаптеры"
    },
    {
      id: 3,
      name: "Рукав РВД 1SN DN12",
      article: "RVD-1SN-12",
      image: "Cable",
      price: "По запросу",
      category: "Рукава"
    },
    {
      id: 4,
      name: "Муфта быстросъёмная BSP",
      article: "QC-BSP-1/2",
      image: "Link",
      price: "По запросу",
      category: "Соединения"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "25 лет на рынке",
      description: "Проверенное качество и надёжность"
    },
    {
      icon: "ShieldCheck",
      title: "Сертификаты",
      description: "ISO 9001, ГОСТ, техрегламенты"
    },
    {
      icon: "Truck",
      title: "Доставка по РФ",
      description: "Собственная логистика и ТК"
    },
    {
      icon: "Headphones",
      title: "Техподдержка",
      description: "Помощь в подборе компонентов"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-secondary via-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider mb-6">
                Надёжность под давлением
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6 leading-tight">
                Промышленные соединения TITAN LOCK
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Широкий ассортимент фитингов, адаптеров, рукавов и камлоков для различных отраслей промышленности. Гарантия качества и быстрая доставка.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalog">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-14">
                    Открыть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base px-8 h-14">
                  Запросить предложение
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-white/10 backdrop-blur-sm p-12 flex items-center justify-center">
                <Icon name="Package" className="text-white/80" size={280} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Каталог продукции</h2>
            <p className="text-lg text-muted-foreground">Выберите категорию для просмотра товаров</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/catalog/${category.id}`}>
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all cursor-pointer h-full group">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name={category.icon as any} className="text-primary group-hover:text-white transition-colors" size={40} />
                    </div>
                    <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">{category.name}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-2 text-secondary">Популярные товары</h2>
              <p className="text-lg text-muted-foreground">Часто заказываемые позиции</p>
            </div>
            <Link to="/catalog">
              <Button variant="outline" size="lg">
                Все товары
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="border hover:shadow-xl transition-shadow group cursor-pointer">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                    <Icon name={product.image as any} className="text-gray-400 group-hover:text-primary transition-colors" size={80} />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{product.category}</div>
                  <CardTitle className="text-lg mb-2 text-secondary group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">Арт: {product.article}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-secondary">{product.price}</span>
                    <Link to={`/product/${product.id}`}>
                      <Button size="sm" className="group-hover:bg-primary group-hover:text-white">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold uppercase tracking-wider mb-6">
                Специальное предложение
              </div>
              <h2 className="font-heading font-bold text-4xl mb-4">Скидка 15% на камлоки</h2>
              <p className="text-xl text-white/90 mb-6">
                Быстроразъёмные соединения типа Camlock со скидкой при заказе от 10 единиц. Акция действует до конца месяца.
              </p>
              <Link to="/promotions">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Все акции
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Lock" className="text-white/60" size={60} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} className="text-primary" size={40} />
                </div>
                <h3 className="font-semibold text-xl text-secondary mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Запросить предложение</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и наши специалисты помогут подобрать оптимальное решение
              </p>
            </div>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Телефон *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите ваши потребности"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
