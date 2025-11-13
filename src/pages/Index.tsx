import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Gift",
      title: "Поздравление от Деда Мороза",
      description: "Настоящий Дед Мороз и Снегурочка приедут к вам домой с подарками и волшебством",
      price: "от 5000₽"
    },
    {
      icon: "PartyPopper",
      title: "Детский праздник под ключ",
      description: "Полная организация праздника: украшение зала, аниматоры, игры и конкурсы",
      price: "от 8000₽"
    },
    {
      icon: "Sparkles",
      title: "Шоу-программа",
      description: "Интерактивное представление с фокусами, танцами и волшебными сюрпризами",
      price: "от 6000₽"
    },
    {
      icon: "Cake",
      title: "День рождения",
      description: "Незабываемый праздник с любимыми персонажами и развлечениями",
      price: "от 7000₽"
    }
  ];

  const characters = [
    {
      name: "Дед Мороз",
      emoji: "🎅",
      description: "Добрый волшебник с мешком подарков"
    },
    {
      name: "Снегурочка",
      emoji: "❄️",
      description: "Красавица-помощница Деда Мороза"
    },
    {
      name: "Фея",
      emoji: "🧚",
      description: "Волшебная фея исполнит желания"
    },
    {
      name: "Пират",
      emoji: "🏴‍☠️",
      description: "Весёлый пират для приключений"
    },
    {
      name: "Принцесса",
      emoji: "👑",
      description: "Прекрасная принцесса из сказки"
    },
    {
      name: "Супергерой",
      emoji: "🦸",
      description: "Любимый герой спасёт праздник"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Спасибо огромное! Дети были в восторге от Деда Мороза и Снегурочки. Настоящее волшебство!",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      text: "Отличная организация праздника! Аниматоры профессионалы, дети не хотели отпускать.",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Лучший день рождения дочки! Всё было идеально, от украшений до программы. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-background to-secondary">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <span className="text-4xl">🎄</span>
              <span>Волшебный Праздник</span>
            </div>
            <div className="hidden md:flex gap-6">
              {["home", "services", "prices", "characters", "gallery", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "services" && "Услуги"}
                  {section === "prices" && "Цены"}
                  {section === "characters" && "Персонажи"}
                  {section === "gallery" && "Галерея"}
                  {section === "reviews" && "Отзывы"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contacts")} size="lg" className="hidden md:flex">
              Заказать праздник
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Волшебство для ваших детей! ✨
              </h1>
              <p className="text-xl text-foreground/80">
                Создаём незабываемые праздники с Дедом Морозом, Снегурочкой и любимыми персонажами
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection("services")} size="lg" className="text-lg">
                  Наши услуги
                </Button>
                <Button onClick={() => scrollToSection("contacts")} variant="outline" size="lg" className="text-lg">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/ddd52f40-c765-45d3-a4c9-f42d036e95c1/files/21b9b50c-c930-4d93-b6c1-84986091fcf8.jpg"
                alt="Дед Мороз и Снегурочка"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -top-6 -right-6 text-8xl animate-float">⭐</div>
              <div className="absolute -bottom-6 -left-6 text-8xl animate-float" style={{ animationDelay: "1s" }}>
                🎁
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Наши услуги</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Выберите идеальный праздник для вашего ребёнка</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Цены</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Доступные цены на незабываемые эмоции</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Базовый</h3>
                <div className="text-4xl font-bold">5000₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>30 минут программы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>1 персонаж</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Подарок от Деда Мороза</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection("contacts")} className="w-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary shadow-xl scale-105">
              <CardContent className="p-8 space-y-4 relative">
                <div className="absolute -top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Хит!
                </div>
                <h3 className="text-2xl font-bold text-primary">Стандарт</h3>
                <div className="text-4xl font-bold">8000₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>60 минут программы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>2 персонажа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Игры и конкурсы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Фотосессия</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection("contacts")} className="w-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Премиум</h3>
                <div className="text-4xl font-bold">12000₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>90 минут программы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>3 персонажа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Шоу-программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Украшение зала</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Видеосъёмка</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection("contacts")} className="w-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="characters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Наши персонажи</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Любимые герои оживут на вашем празднике</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {characters.map((character, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-6xl">{character.emoji}</div>
                  <h3 className="font-bold text-lg">{character.name}</h3>
                  <p className="text-sm text-foreground/70">{character.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-b from-secondary to-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Галерея</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Моменты радости и веселья</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/ddd52f40-c765-45d3-a4c9-f42d036e95c1/files/21b9b50c-c930-4d93-b6c1-84986091fcf8.jpg"
                alt="Праздник 1"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/ddd52f40-c765-45d3-a4c9-f42d036e95c1/files/860d446d-2630-423a-a928-da7d6599e40e.jpg"
                alt="Праздник 2"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/ddd52f40-c765-45d3-a4c9-f42d036e95c1/files/07476724-2191-492e-ac6f-440fadbcf1dc.jpg"
                alt="Праздник 3"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Отзывы</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Что говорят наши клиенты</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 italic">"{review.text}"</p>
                  <p className="font-bold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-accent to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Свяжитесь с нами!</h2>
            <p className="text-white/90 text-xl">Закажите незабываемый праздник для вашего ребёнка</p>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-foreground/70">Телефон</p>
                    <p className="text-xl font-bold">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="text-xl font-bold">info@volshebny-prazdnik.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-foreground/70">Адрес</p>
                    <p className="text-xl font-bold">Москва, ул. Праздничная, 1</p>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 Волшебный Праздник. Создаём радость для детей!</p>
          <div className="flex justify-center gap-4 mt-4 text-3xl">
            <span>🎄</span>
            <span>🎅</span>
            <span>⭐</span>
            <span>🎁</span>
            <span>✨</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
