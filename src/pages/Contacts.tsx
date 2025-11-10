import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const contacts = [
    {
      icon: "Phone",
      title: "Телефоны",
      items: [
        { label: "Бесплатная линия", value: "8 (800) 350-08-28" },
        { label: "Офис в Москве", value: "+7 (495) 123-45-67" },
        { label: "Отдел продаж", value: "+7 (495) 123-45-68" }
      ]
    },
    {
      icon: "Mail",
      title: "Email",
      items: [
        { label: "Общие вопросы", value: "info@titanlock.ru" },
        { label: "Отдел продаж", value: "sales@titanlock.ru" },
        { label: "Техподдержка", value: "support@titanlock.ru" }
      ]
    },
    {
      icon: "MapPin",
      title: "Адрес",
      items: [
        { label: "Офис и склад", value: "Москва, ул. Промышленная, 42" },
        { label: "Индекс", value: "123456" },
        { label: "Метро", value: "Войковская (5 мин пешком)" }
      ]
    },
    {
      icon: "Clock",
      title: "Режим работы",
      items: [
        { label: "Понедельник - Пятница", value: "9:00 - 18:00" },
        { label: "Суббота", value: "10:00 - 15:00" },
        { label: "Воскресенье", value: "Выходной" }
      ]
    }
  ];

  const departments = [
    {
      name: "Александр Иванов",
      position: "Руководитель отдела продаж",
      phone: "+7 (495) 123-45-68",
      email: "ivanov@titanlock.ru",
      image: "User"
    },
    {
      name: "Мария Петрова",
      position: "Менеджер по работе с клиентами",
      phone: "+7 (495) 123-45-69",
      email: "petrova@titanlock.ru",
      image: "User"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Главный инженер",
      phone: "+7 (495) 123-45-70",
      email: "sidorov@titanlock.ru",
      image: "User"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">Контакты</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы всегда рады помочь
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, i) => (
              <Card key={i} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={contact.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contact.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-medium text-secondary">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">Напишите нам</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму обратной связи, и наши специалисты свяжутся с вами в ближайшее время
              </p>
              <Card className="border-2 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Телефон *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                      <Input
                        placeholder="Тема обращения"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <Textarea
                      placeholder="Ваше сообщение *"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <Button type="submit" className="w-full h-12" size="lg">
                      Отправить сообщение
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">Наши специалисты</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Свяжитесь напрямую с ответственным сотрудником по вашему вопросу
              </p>
              <div className="space-y-6">
                {departments.map((person, i) => (
                  <Card key={i} className="border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name={person.image as any} className="text-primary" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-secondary mb-1">{person.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{person.position}</p>
                          <div className="space-y-2">
                            <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                              <Icon name="Phone" size={16} />
                              {person.phone}
                            </a>
                            <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                              <Icon name="Mail" size={16} />
                              {person.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl mb-8 text-secondary text-center">Как нас найти</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[21/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" className="text-gray-400 mx-auto mb-4" size={64} />
                  <p className="text-xl font-semibold text-gray-600">Москва, ул. Промышленная, 42</p>
                  <p className="text-muted-foreground mt-2">Интерактивная карта</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Car" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold text-lg mb-2 text-secondary">На автомобиле</h3>
                <p className="text-sm text-muted-foreground">Бесплатная парковка для клиентов на территории</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Train" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold text-lg mb-2 text-secondary">Общественный транспорт</h3>
                <p className="text-sm text-muted-foreground">Метро Войковская, 5 минут пешком</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Clock" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold text-lg mb-2 text-secondary">Режим работы</h3>
                <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
