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
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Settings" className="text-white" size={24} />
            </div>
            <span className="font-heading font-bold text-2xl text-primary">ERMANNO BALZI</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">Связаться</Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Промышленное оборудование мирового класса
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Официальный дистрибьютор ERMANNO BALZI в России. Высокоточные станки и оборудование для металлообработки с 1962 года.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" className="text-base">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Каталог
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/9a775c86-3684-453c-bab2-13028ca4c7e4/files/f3b2d947-8f22-4eaa-b27b-e47491f27685.jpg" 
                alt="Промышленное оборудование" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "Award", value: "60+", label: "Лет на рынке" },
              { icon: "Users", value: "500+", label: "Довольных клиентов" },
              { icon: "Settings", value: "1000+", label: "Единиц оборудования" },
              { icon: "Globe", value: "50+", label: "Стран-партнёров" }
            ].map((stat, i) => (
              <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={stat.icon as any} className="text-primary" size={32} />
                </div>
                <div className="font-heading font-bold text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/9a775c86-3684-453c-bab2-13028ca4c7e4/files/5b02f158-2e94-433a-b6e8-3720ff6ede0e.jpg" 
                alt="О компании" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-primary">О компании ERMANNO BALZI</h2>
              <p className="text-lg mb-4 text-foreground/80">
                С 1962 года компания ERMANNO BALZI производит высокоточное оборудование для металлообработки, зарекомендовав себя как один из лидеров европейского рынка.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Мы предлагаем полный цикл: от консультации и подбора оборудования до установки, пусконаладки и сервисного обслуживания.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "CheckCircle2", text: "Сертифицированное оборудование" },
                  { icon: "CheckCircle2", text: "Гарантия производителя" },
                  { icon: "CheckCircle2", text: "Техническая поддержка 24/7" },
                  { icon: "CheckCircle2", text: "Обучение персонала" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Icon name={item.icon as any} className="text-primary mt-1" size={20} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Наше оборудование</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр промышленных решений для различных отраслей производства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Cog",
                title: "Токарные станки",
                description: "Высокоточные токарные станки с ЧПУ для сложной обработки металлов"
              },
              {
                icon: "Box",
                title: "Фрезерные центры",
                description: "Многофункциональные обрабатывающие центры для серийного производства"
              },
              {
                icon: "Drill",
                title: "Сверлильное оборудование",
                description: "Координатно-расточные и сверлильные станки повышенной точности"
              },
              {
                icon: "Activity",
                title: "Шлифовальные станки",
                description: "Прецизионное шлифовальное оборудование для финишной обработки"
              },
              {
                icon: "Zap",
                title: "Электроэрозионные станки",
                description: "ЭДМ-оборудование для обработки твёрдых сплавов и штамповой оснастки"
              },
              {
                icon: "Package",
                title: "Упаковочные линии",
                description: "Автоматизированные системы упаковки и маркировки продукции"
              }
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Реализованные проекты</h2>
            <p className="text-lg text-muted-foreground">Примеры успешного внедрения нашего оборудования</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Автомобильный завод",
                client: "ОАО «АвтоПром»",
                description: "Комплексная поставка токарно-фрезерных центров для производства двигателей"
              },
              {
                title: "Авиационное производство",
                client: "НПО «Аэрокосмос»",
                description: "Внедрение высокоточных 5-осевых обрабатывающих центров"
              },
              {
                title: "Станкостроительный завод",
                client: "ЗАО «Станкомаш»",
                description: "Модернизация производственных линий шлифовального оборудования"
              }
            ].map((project, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Factory" className="text-white" size={48} />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Блог и новости</h2>
            <p className="text-lg text-muted-foreground">Экспертные статьи о промышленном оборудовании</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Тренды в металлообработке 2024",
                date: "15 октября 2024",
                excerpt: "Обзор ключевых технологических трендов в современном станкостроении"
              },
              {
                title: "Как выбрать токарный станок с ЧПУ",
                date: "8 октября 2024",
                excerpt: "Подробное руководство по выбору оборудования для вашего производства"
              },
              {
                title: "Цифровизация производства",
                date: "1 октября 2024",
                excerpt: "Внедрение Industry 4.0 на российских промышленных предприятиях"
              }
            ].map((post, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-secondary to-primary rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="FileText" className="text-white" size={48} />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{post.excerpt}</p>
                  <Button variant="link" className="mt-4 px-0">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="font-heading font-bold text-4xl mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 text-white/90">
                Готовы обсудить ваш проект? Наши специалисты помогут подобрать оптимальное решение.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-white/90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/90">info@ermannobalzi.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-white/90">Москва, Промышленная ул., д. 12</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle>Отправить запрос</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Settings" className="text-primary" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">ERMANNO BALZI</span>
              </div>
              <p className="text-white/80">Официальный дистрибьютор промышленного оборудования в России</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@ermannobalzi.ru</li>
                <li>Москва, Промышленная ул., 12</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Linkedin', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Icon name={social as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ERMANNO BALZI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
