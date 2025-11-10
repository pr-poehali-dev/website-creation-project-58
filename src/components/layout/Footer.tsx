import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Icon name="Lock" className="text-white" size={28} />
              </div>
              <div>
                <div className="font-bold text-lg">TITAN LOCK</div>
                <div className="text-xs text-white/60 uppercase">С 1998 года</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Производство и поставка промышленной арматуры высочайшего качества для различных отраслей промышленности
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'Youtube', 'Linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon name={social as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/catalog/fittings" className="hover:text-white transition-colors">Фитинги</Link></li>
              <li><Link to="/catalog/adapters" className="hover:text-white transition-colors">Адаптеры</Link></li>
              <li><Link to="/catalog/hoses" className="hover:text-white transition-colors">Рукава</Link></li>
              <li><Link to="/catalog/camlocks" className="hover:text-white transition-colors">Камлоки</Link></li>
              <li><Link to="/catalog/connections" className="hover:text-white transition-colors">Соединения</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/promotions" className="hover:text-white transition-colors">Акции</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><a href="#delivery" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Стать партнёром</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">8 (800) 350-08-28</div>
                  <div className="text-xs">Бесплатно по России</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@titanlock.ru" className="hover:text-white transition-colors">
                  info@titanlock.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <div>Москва, ул. Промышленная, 42</div>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={18} className="mt-0.5 flex-shrink-0" />
                <div>Пн-Пт: 9:00-18:00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© 2024 TITAN LOCK. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
