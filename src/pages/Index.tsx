import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">EB</span>
              </div>
              <div>
                <div className="font-bold text-2xl text-secondary tracking-tight">ERMANNO BALZI</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Since 1962</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#hero" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">Главная</a>
              <a href="#about" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">О компании</a>
              <a href="#services" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">Продукция</a>
              <a href="#portfolio" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">Проекты</a>
              <a href="#blog" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">Блог</a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors uppercase tracking-wide">Контакты</a>
            </div>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">Связаться с нами</Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
                Официальный дистрибьютор
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6 text-secondary leading-tight">
                Нормализованные компоненты для пресс-форм
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                С 1962 года компания ERMANNO BALZI производит высокоточные компоненты и аксессуары для литьевых форм пластмасс. Поставки по всему миру.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
                  Каталог продукции
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-base px-8">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://cdn.poehali.dev/projects/9a775c86-3684-453c-bab2-13028ca4c7e4/files/f3b2d947-8f22-4eaa-b27b-e47491f27685.jpg" 
                  alt="Промышленное оборудование ERMANNO BALZI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 shadow-xl max-w-xs">
                <div className="text-5xl font-bold mb-2">60+</div>
                <div className="text-sm uppercase tracking-wider">Лет опыта в производстве</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Award", value: "60+", label: "Лет на рынке", description: "Опыт и надёжность" },
              { icon: "Globe", value: "80+", label: "Стран", description: "География поставок" },
              { icon: "Package", value: "5000+", label: "Компонентов", description: "В каталоге продукции" },
              { icon: "Factory", value: "10000+", label: "Клиентов", description: "По всему миру" }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white p-8 hover:shadow-lg transition-shadow">
                <Icon name={stat.icon as any} className="text-primary mx-auto mb-4" size={40} />
                <div className="font-bold text-4xl text-secondary mb-2">{stat.value}</div>
                <div className="font-semibold text-lg text-secondary mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://cdn.poehali.dev/projects/9a775c86-3684-453c-bab2-13028ca4c7e4/files/5b02f158-2e94-433a-b6e8-3720ff6ede0e.jpg" 
                  alt="Производство ERMANNO BALZI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
                О компании
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">Традиции качества с 1962 года</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Компания Ermanno Balzi из Брешии производит нормализованные компоненты для литьевых форм пластмасс. Мы поставляем компоненты и аксессуары для пресс-форм по всему миру.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Наша продукция соответствует самым высоким стандартам качества и используется ведущими производителями в автомобильной, авиационной, электронной и других отраслях промышленности.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  { icon: "CheckCircle2", text: "Сертифицированное производство ISO 9001" },
                  { icon: "CheckCircle2", text: "Собственное производство в Италии" },
                  { icon: "CheckCircle2", text: "Техническая поддержка и консультации" },
                  { icon: "CheckCircle2", text: "Быстрая доставка по всему миру" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name={item.icon as any} className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              Наша продукция
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Компоненты для пресс-форм</h2>
            <p className="text-lg text-gray-600">
              Полный ассортимент нормализованных компонентов для литьевых форм пластмасс
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Cog",
                title: "Направляющие колонки",
                description: "Высокоточные направляющие колонки и втулки для пресс-форм различных типоразмеров"
              },
              {
                icon: "Box",
                title: "Центрирующие кольца",
                description: "Центрирующие и фиксирующие элементы для точного позиционирования"
              },
              {
                icon: "Grip",
                title: "Толкатели и выталкиватели",
                description: "Системы выталкивания изделий из пресс-форм любой сложности"
              },
              {
                icon: "Cylinder",
                title: "Втулки и вставки",
                description: "Закалённые втулки и вставки для формообразующих элементов"
              },
              {
                icon: "Lock",
                title: "Запирающие элементы",
                description: "Клиновые и механические замки для надёжной фиксации"
              },
              {
                icon: "Droplet",
                title: "Система охлаждения",
                description: "Фитинги и элементы систем охлаждения пресс-форм"
              }
            ].map((service, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              Наши проекты
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Реализованные решения</h2>
            <p className="text-lg text-gray-600">Успешные внедрения в различных отраслях промышленности</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Автомобильная промышленность",
                client: "Крупный автопроизводитель",
                description: "Комплексная поставка компонентов для пресс-форм деталей интерьера автомобилей",
                image: "Factory"
              },
              {
                industry: "Электроника",
                client: "Производитель бытовой техники",
                description: "Высокоточные компоненты для литья корпусов электронных устройств",
                image: "Cpu"
              },
              {
                industry: "Медицинское оборудование",
                client: "Медицинский холдинг",
                description: "Специализированные компоненты для форм медицинских изделий",
                image: "Activity"
              }
            ].map((project, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                  <Icon name={project.image as any} className="text-gray-400 group-hover:text-primary transition-colors" size={80} />
                </div>
                <CardHeader>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{project.industry}</div>
                  <CardTitle className="text-xl text-secondary">{project.client}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              Блог
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Новости и статьи</h2>
            <p className="text-lg text-gray-600">Экспертные материалы о производстве пресс-форм</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Выбор материалов для направляющих колонок",
                date: "28 октября 2024",
                category: "Технологии",
                excerpt: "Как правильно выбрать материал направляющих элементов в зависимости от условий эксплуатации"
              },
              {
                title: "Тренды в производстве пресс-форм 2024",
                date: "15 октября 2024",
                category: "Обзоры",
                excerpt: "Обзор ключевых технологических трендов в современном производстве литьевых форм"
              },
              {
                title: "Система охлаждения пресс-форм",
                date: "3 октября 2024",
                category: "Руководства",
                excerpt: "Проектирование эффективных систем охлаждения для повышения производительности"
              }
            ].map((post, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group bg-white">
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-gray-700 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-colors">
                  <Icon name="FileText" className="text-white/80" size={64} />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors mb-3">{post.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold uppercase tracking-wider mb-6">
                Контакты
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Наши специалисты помогут подобрать оптимальные компоненты для вашего производства и ответят на все вопросы.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Телефон</div>
                    <div className="text-white/80 text-lg">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <div className="text-white/80 text-lg">info@ermannobalzi.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Офис в России</div>
                    <div className="text-white/80 text-lg">Москва, ул. Промышленная, д. 12</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить запрос</CardTitle>
                <CardDescription className="text-base">Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваши потребности" 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-base" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EB</span>
                </div>
                <div>
                  <div className="font-bold text-xl">ERMANNO BALZI</div>
                  <div className="text-xs text-white/60 uppercase">Since 1962</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">Производство нормализованных компонентов для литьевых форм пластмасс</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@ermannobalzi.ru</li>
                <li>Москва, ул. Промышленная, 12</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                {['Facebook', 'Linkedin', 'Instagram', 'Youtube'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                    <Icon name={social as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2024 ERMANNO BALZI. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
