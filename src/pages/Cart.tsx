import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Камлок тип A (алюминий)",
      article: "CL-A-50-AL",
      price: 2500,
      quantity: 2,
      image: "Package"
    },
    {
      id: 2,
      name: "Адаптер резьбовой NPT",
      article: "AD-NPT-3/4",
      price: 1800,
      quantity: 5,
      image: "Plug"
    }
  ]);

  const [orderForm, setOrderForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    comment: ""
  });

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 10000 ? 0 : 500;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { items: cartItems, form: orderForm });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShoppingCart" className="text-gray-400" size={48} />
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4 text-secondary">Корзина пуста</h2>
              <p className="text-muted-foreground mb-8">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <Link to="/catalog">
                <Button size="lg">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-secondary font-medium">Корзина</span>
          </div>
          <h1 className="font-heading font-bold text-4xl text-secondary">Оформление заказа</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Товары в корзине</span>
                  <span className="text-primary">{cartItems.length} позиций</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.image as any} className="text-gray-400" size={40} />
                        </div>
                        <div className="flex-1">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-semibold text-lg text-secondary hover:text-primary transition-colors mb-1">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="text-sm text-muted-foreground mb-3">Арт: {item.article}</div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-10 w-10"
                              >
                                <Icon name="Minus" size={16} />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-10 w-10"
                              >
                                <Icon name="Plus" size={16} />
                              </Button>
                            </div>
                            <div className="font-bold text-xl text-secondary">
                              {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="Trash2" size={20} />
                        </Button>
                      </div>
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактные данные</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Ваше имя *"
                        value={orderForm.name}
                        onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Компания"
                        value={orderForm.company}
                        onChange={(e) => setOrderForm({ ...orderForm, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон *"
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email *"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Адрес доставки *"
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Комментарий к заказу"
                      rows={4}
                      value={orderForm.comment}
                      onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                    <span className="font-medium">{subtotal.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Доставка</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">Бесплатно</span>
                      ) : (
                        `${deliveryFee.toLocaleString('ru-RU')} ₽`
                      )}
                    </span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="text-xs text-muted-foreground bg-gray-50 p-3 rounded-lg">
                      Бесплатная доставка при заказе от 10 000 ₽
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-xl font-bold text-secondary">
                    <span>Всего</span>
                    <span>{total.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>

                <Button className="w-full h-12" size="lg" type="submit" onClick={handleSubmit}>
                  Оформить заказ
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="ShieldCheck" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span>Гарантия качества на всю продукцию</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="Truck" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span>Доставка по всей России</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="Headphones" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span>Техническая поддержка 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
