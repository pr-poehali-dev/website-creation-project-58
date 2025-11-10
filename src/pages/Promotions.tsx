import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Скидка 15% на камлоки",
      description: "Быстроразъёмные соединения типа Camlock всех типов со скидкой 15% при заказе от 10 единиц одного артикула",
      discount: "15%",
      validUntil: "30 ноября 2024",
      category: "Камлоки",
      conditions: [
        "Минимальный заказ от 10 шт одного артикула",
        "Действует на алюминиевые и стальные камлоки",
        "Скидка суммируется с накопительной",
        "Доставка по России включена"
      ],
      image: "Lock",
      badge: "Хит"
    },
    {
      id: 2,
      title: "Комплект фитингов -20%",
      description: "При покупке комплекта фитингов (от 50 шт) скидка 20% на весь заказ. Идеально для производств и монтажных организаций",
      discount: "20%",
      validUntil: "15 декабря 2024",
      category: "Фитинги",
      conditions: [
        "Минимальный заказ от 50 фитингов",
        "Любые типы: угловые, прямые, тройники",
        "Бесплатная доставка при заказе от 100 шт",
        "Техническая консультация в подарок"
      ],
      image: "Plug",
      badge: "Новинка"
    },
    {
      id: 3,
      title: "Рукава РВД: 3 по цене 2",
      description: "Акция на гидравлические рукава высокого давления: при покупке 3-х метров платите только за 2",
      discount: "33%",
      validUntil: "20 ноября 2024",
      category: "Рукава",
      conditions: [
        "Действует на рукава 1SN и 2SN",
        "Минимальная длина 3 метра",
        "Опрессовка и проверка в подарок",
        "Сертификат качества включён"
      ],
      image: "Cable",
      badge: "Выгодно"
    },
    {
      id: 4,
      title: "Адаптеры: набор со скидкой",
      description: "Готовые наборы адаптеров различных типоразмеров со скидкой до 25%. Всё необходимое в одном комплекте",
      discount: "25%",
      validUntil: "31 декабря 2024",
      category: "Адаптеры",
      conditions: [
        "Стандартные наборы 10, 20 или 50 шт",
        "NPT, BSP, JIC типы соединений",
        "Удобный кейс для хранения в подарок",
        "Гарантия 3 года"
      ],
      image: "Layers",
      badge: null
    },
    {
      id: 5,
      title: "Бесплатная доставка от 10 000 ₽",
      description: "При заказе на сумму от 10 000 рублей доставка по всей России абсолютно бесплатно",
      discount: "Бесплатно",
      validUntil: "Постоянная акция",
      category: "Все категории",
      conditions: [
        "Минимальная сумма заказа 10 000 ₽",
        "Доставка ТК по России",
        "Срок доставки 3-7 дней",
        "Страхование груза включено"
      ],
      image: "Truck",
      badge: null
    },
    {
      id: 6,
      title: "Программа лояльности",
      description: "Накопительная система скидок для постоянных клиентов. Чем больше заказов, тем выше скидка",
      discount: "До 10%",
      validUntil: "Постоянная программа",
      category: "Все категории",
      conditions: [
        "3% после первого заказа",
        "5% при заказах на сумму 100 000 ₽",
        "7% при заказах на сумму 500 000 ₽",
        "10% при заказах на сумму 1 000 000 ₽"
      ],
      image: "Award",
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">Акции и специальные предложения</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Выгодные условия на промышленную арматуру для наших клиентов
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="border-2 hover:border-primary hover:shadow-xl transition-all group relative overflow-hidden">
                {promo.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white px-3 py-1 text-xs font-bold">
                      {promo.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/30 flex flex-col items-center justify-center p-8 relative">
                    <Icon name={promo.image as any} className="text-primary/60 mb-4" size={80} />
                    <div className="text-5xl font-bold text-primary">{promo.discount}</div>
                    <div className="text-sm text-secondary mt-2 font-medium">Скидка</div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    {promo.category}
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {promo.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-muted-foreground">Действует до: <span className="font-medium text-secondary">{promo.validUntil}</span></span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-secondary">Условия акции:</h4>
                    <ul className="space-y-2">
                      {promo.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/catalog">
                    <Button className="w-full">
                      Перейти в каталог
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">Узнавайте об акциях первыми</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишитесь на рассылку и получайте эксклюзивные предложения и промокоды
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 h-12 px-4 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <Icon name="Gift" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-xl mb-3 text-secondary">Подарки за заказ</h3>
                <p className="text-muted-foreground">
                  При заказе от 50 000 ₽ полезные подарки и аксессуары
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <Icon name="Percent" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-xl mb-3 text-secondary">Индивидуальные условия</h3>
                <p className="text-muted-foreground">
                  Для оптовых покупателей специальные цены и скидки
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-xl mb-3 text-secondary">Партнёрская программа</h3>
                <p className="text-muted-foreground">
                  Дополнительные бонусы для постоянных партнёров
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;
