import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Камлок тип A (алюминий)",
    article: "CL-A-50-AL",
    category: "Камлоки",
    material: "Алюминий",
    diameter: "50 мм",
    pressure: "10 бар",
    description: "Быстроразъёмное соединение типа Camlock тип A из алюминиевого сплава. Предназначено для соединения трубопроводов с быстрым разъединением без использования инструментов. Внутренняя резьба BSP.",
    images: ["Package", "Lock", "Plug", "Link"],
    specs: [
      { label: "Тип соединения", value: "Camlock тип A" },
      { label: "Материал корпуса", value: "Алюминиевый сплав AlSi10Mg" },
      { label: "Диаметр номинальный", value: "50 мм (2\")" },
      { label: "Резьба", value: "BSP 2\" внутренняя" },
      { label: "Рабочее давление", value: "До 10 бар" },
      { label: "Температура", value: "От -20°C до +80°C" },
      { label: "Стандарт", value: "ГОСТ 28517, DIN 2828" },
      { label: "Уплотнение", value: "NBR (нитрил)" },
      { label: "Вес", value: "0.45 кг" }
    ],
    features: [
      "Быстрое соединение/разъединение без инструментов",
      "Коррозионностойкое покрытие",
      "Высокая герметичность соединения",
      "Совместимость с другими типами Camlock",
      "Лёгкий вес алюминиевого сплава"
    ],
    applications: [
      "Нефтехимическая промышленность",
      "Пищевая промышленность",
      "Сельское хозяйство",
      "Автоцистерны и танкеры",
      "Водоснабжение и водоотведение"
    ],
    documents: [
      { name: "Технический каталог PDF", size: "2.4 МБ", icon: "FileText" },
      { name: "Сертификат соответствия", size: "1.1 МБ", icon: "Award" },
      { name: "Инструкция по монтажу", size: "0.8 МБ", icon: "Book" }
    ]
  };

  const relatedProducts = [
    { id: 2, name: "Камлок тип B", article: "CL-B-50-AL", image: "Lock" },
    { id: 3, name: "Камлок тип C", article: "CL-C-50-AL", image: "Plug" },
    { id: 4, name: "Камлок тип D", article: "CL-D-50-AL", image: "Link" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/catalog" className="hover:text-primary">Каталог</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/catalog/camlocks" className="hover:text-primary">{product.category}</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-secondary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
              <Icon name={product.images[selectedImage] as any} className="text-gray-400" size={200} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center hover:border-primary transition-all ${
                    selectedImage === idx ? "border-2 border-primary" : "border-2 border-transparent"
                  }`}
                >
                  <Icon name={image as any} className="text-gray-400" size={40} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              {product.category}
            </div>
            <h1 className="font-heading font-bold text-4xl mb-4 text-secondary">{product.name}</h1>
            <div className="text-muted-foreground mb-6">Артикул: {product.article}</div>
            
            <div className="flex items-baseline gap-4 mb-8">
              <div className="text-3xl font-bold text-secondary">По запросу</div>
              <div className="text-sm text-muted-foreground">Цена зависит от объёма</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon name="Package" className="text-primary mx-auto mb-2" size={32} />
                <div className="text-sm text-muted-foreground">В наличии</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon name="Truck" className="text-primary mx-auto mb-2" size={32} />
                <div className="text-sm text-muted-foreground">Доставка 2-3 дня</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Icon name="ShieldCheck" className="text-primary mx-auto mb-2" size={32} />
                <div className="text-sm text-muted-foreground">Гарантия 2 года</div>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12"
                >
                  <Icon name="Minus" size={18} />
                </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x h-12 focus:outline-none"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-12 w-12"
                >
                  <Icon name="Plus" size={18} />
                </Button>
              </div>
              <Button className="flex-1 h-12" size="lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12" size="lg">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Запросить цену
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Icon name="Heart" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specs" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="features">Преимущества</TabsTrigger>
            <TabsTrigger value="applications">Применение</TabsTrigger>
            <TabsTrigger value="docs">Документы</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="border-b last:border-0">
                        <td className="py-4 font-medium text-secondary w-1/3">{spec.label}</td>
                        <td className="py-4 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Icon name="Factory" className="text-primary flex-shrink-0" size={24} />
                      <span className="font-medium text-secondary">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {product.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={doc.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-medium text-secondary">{doc.name}</div>
                          <div className="text-sm text-muted-foreground">{doc.size}</div>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div>
          <h2 className="font-heading font-bold text-3xl mb-8 text-secondary">Похожие товары</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <Card key={relProduct.id} className="border hover:shadow-xl transition-shadow group">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                    <Icon name={relProduct.image as any} className="text-gray-400 group-hover:text-primary transition-colors" size={80} />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{relProduct.name}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">Арт: {relProduct.article}</div>
                  <Link to={`/product/${relProduct.id}`}>
                    <Button className="w-full" size="sm">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
