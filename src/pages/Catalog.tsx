import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Catalog = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({
    material: [] as string[],
    diameter: [] as string[],
    pressure: [] as string[]
  });

  const products = [
    {
      id: 1,
      name: "Камлок тип A (алюминий)",
      article: "CL-A-50-AL",
      material: "Алюминий",
      diameter: "50 мм",
      pressure: "10 бар",
      category: "camlocks",
      image: "Package",
      specs: {
        type: "Тип A",
        connection: "Внутренняя резьба",
        standard: "ГОСТ 28517"
      }
    },
    {
      id: 2,
      name: "Камлок тип B (нержавейка)",
      article: "CL-B-40-SS",
      material: "Нержавеющая сталь",
      diameter: "40 мм",
      pressure: "16 бар",
      category: "camlocks",
      image: "Lock",
      specs: {
        type: "Тип B",
        connection: "Наружная резьба",
        standard: "ГОСТ 28517"
      }
    },
    {
      id: 3,
      name: "Адаптер резьбовой NPT 3/4\"",
      article: "AD-NPT-3/4",
      material: "Латунь",
      diameter: "20 мм",
      pressure: "25 бар",
      category: "adapters",
      image: "Plug",
      specs: {
        type: "NPT",
        connection: "Конический",
        standard: "ANSI/ASME B1.20.1"
      }
    },
    {
      id: 4,
      name: "Рукав РВД 1SN DN12",
      article: "RVD-1SN-12",
      material: "Резина + оплётка",
      diameter: "12 мм",
      pressure: "225 бар",
      category: "hoses",
      image: "Cable",
      specs: {
        type: "1SN",
        connection: "SAE 100 R1",
        standard: "EN 853"
      }
    },
    {
      id: 5,
      name: "Муфта быстросъёмная BSP 1/2\"",
      article: "QC-BSP-1/2",
      material: "Сталь",
      diameter: "15 мм",
      pressure: "20 бар",
      category: "connections",
      image: "Link",
      specs: {
        type: "BSP",
        connection: "Цилиндрический",
        standard: "ISO 228"
      }
    },
    {
      id: 6,
      name: "Фитинг угловой 90° JIC",
      article: "FT-JIC-90-16",
      material: "Сталь",
      diameter: "16 мм",
      pressure: "35 бар",
      category: "fittings",
      image: "Grip",
      specs: {
        type: "JIC 90°",
        connection: "Конусный",
        standard: "SAE J514"
      }
    }
  ];

  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products;

  const categoryNames: Record<string, string> = {
    fittings: "Фитинги",
    adapters: "Адаптеры",
    hoses: "Рукава",
    camlocks: "Камлоки",
    connections: "Соединения",
    valves: "Клапаны"
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/catalog" className="hover:text-primary">Каталог</Link>
            {category && (
              <>
                <Icon name="ChevronRight" size={16} />
                <span className="text-secondary font-medium">{categoryNames[category]}</span>
              </>
            )}
          </div>
          <h1 className="font-heading font-bold text-4xl text-secondary">
            {category ? categoryNames[category] : "Каталог продукции"}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Фильтры
                  <Button variant="ghost" size="sm" className="text-primary">
                    Сбросить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-secondary">Материал</h3>
                  <div className="space-y-2">
                    {["Алюминий", "Нержавеющая сталь", "Латунь", "Сталь"].map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} />
                        <Label htmlFor={material} className="text-sm cursor-pointer">
                          {material}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-secondary">Диаметр</h3>
                  <div className="space-y-2">
                    {["12 мм", "15 мм", "20 мм", "40 мм", "50 мм"].map((diameter) => (
                      <div key={diameter} className="flex items-center space-x-2">
                        <Checkbox id={diameter} />
                        <Label htmlFor={diameter} className="text-sm cursor-pointer">
                          {diameter}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-secondary">Давление</h3>
                  <div className="space-y-2">
                    {["10 бар", "16 бар", "20 бар", "25 бар", "35 бар"].map((pressure) => (
                      <div key={pressure} className="flex items-center space-x-2">
                        <Checkbox id={pressure} />
                        <Label htmlFor={pressure} className="text-sm cursor-pointer">
                          {pressure}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-semibold text-secondary">{filteredProducts.length}</span>
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="name">По названию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="border hover:shadow-xl transition-all group cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                      <Icon name={product.image as any} className="text-gray-400 group-hover:text-primary transition-colors" size={80} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">Арт: {product.article}</div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-3 text-secondary group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex justify-between">
                        <span>Материал:</span>
                        <span className="font-medium text-secondary">{product.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Диаметр:</span>
                        <span className="font-medium text-secondary">{product.diameter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Давление:</span>
                        <span className="font-medium text-secondary">{product.pressure}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button className="w-full" size="sm">
                          Подробнее
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Icon name="ShoppingCart" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
