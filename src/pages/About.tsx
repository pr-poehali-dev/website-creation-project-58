import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  const achievements = [
    { icon: "Award", value: "25+", label: "Лет на рынке" },
    { icon: "Users", value: "5000+", label: "Клиентов" },
    { icon: "Package", value: "50000+", label: "Поставок" },
    { icon: "Globe", value: "40+", label: "Регионов РФ" }
  ];

  const values = [
    {
      icon: "Target",
      title: "Качество превыше всего",
      description: "Мы работаем только с проверенными производителями и контролируем каждую партию товара"
    },
    {
      icon: "Users",
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому клиенту, помощь в подборе оптимальных решений"
    },
    {
      icon: "Zap",
      title: "Скорость и надёжность",
      description: "Быстрая обработка заказов и доставка точно в срок по всей России"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантии и поддержка",
      description: "Полное техническое сопровождение и гарантийное обслуживание"
    }
  ];

  const certifications = [
    { icon: "Award", name: "ISO 9001:2015" },
    { icon: "ShieldCheck", name: "ГОСТ Р" },
    { icon: "FileCheck", name: "Техрегламенты ТС" },
    { icon: "CheckCircle2", name: "Сертификаты соответствия" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">О компании TITAN LOCK</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ведущий поставщик промышленной арматуры и комплектующих для различных отраслей промышленности
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, i) => (
              <Card key={i} className="text-center border-2 hover:border-primary hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">{achievement.value}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
                Наша история
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">25 лет профессионального опыта</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Компания TITAN LOCK основана в 1998 году группой инженеров с многолетним опытом работы в промышленности. 
                Мы начинали как небольшой региональный поставщик фитингов и соединений.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                За 25 лет работы мы выросли в одного из крупнейших поставщиков промышленной арматуры в России, 
                работаем с ведущими производственными предприятиями и обеспечиваем поставки в 40 регионов страны.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Сегодня TITAN LOCK — это современная компания с собственными складскими комплексами, 
                высококвалифицированной командой специалистов и репутацией надёжного партнёра.
              </p>
              <Button size="lg">
                Стать партнёром
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <Icon name="Factory" className="text-gray-400" size={80} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Наши ценности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <Card key={i} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={value.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6">Сертификаты и качество</h2>
              <p className="text-xl text-white/90 mb-8">
                Вся наша продукция сертифицирована и соответствует российским и международным стандартам качества. 
                Мы работаем только с проверенными производителями и гарантируем подлинность всех компонентов.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <Icon name={cert.icon as any} className="text-white flex-shrink-0" size={24} />
                    <span className="font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
              <Icon name="Award" className="text-white/60" size={200} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">Станьте нашим партнёром</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы приглашаем к сотрудничеству производственные предприятия, дистрибьюторов и розничные компании
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              Отправить заявку
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
