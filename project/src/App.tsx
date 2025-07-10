import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Calendar, Music, ChevronDown, Play } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LoadingScreen = () => (
    <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-1000 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="w-16 h-16 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg font-light tracking-wide font-alexander">
          Загружаем наше приглашение...
        </p>
      </div>
    </div>
  );

const HeroSection = () => (
  <section className="h-screen relative overflow-hidden">
    {/* Background video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/загс 180К.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>

    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/20"></div>
  </section>
);


  const WelcomeSection = () => (
    <section className="bg-stone-100 flex flex-col justify-center py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8 px-6">
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-4xl font-light tracking-wide italic font-marckscript" style={{ color: '#5d4e43' }}>
            Дорогие,
          </h2>
          <h3 className="text-gray-700 text-2xl font-light tracking-widest font-marckscript">
            Родные и Близкие!
          </h3>
        </div>

        {/* Main text */}
        <div className="space-y-4 text-gray-600 text-1xl leading-relaxed">
          <p className="font-light font-alexander">
            Мы с радостью приглашаем вас разделить с нами этот особенный день! Ваша поддержка и присутствие сделают наш праздник незабываемым.
          </p>
        </div>
      </div>

      {/* Wedding rings image - на всю ширину экрана, статичная */}
      <div className="w-full py-6">
        <img 
          src="/aef794f9-6fd8-4b14-aba5-cabef93a76fe.png" 
          alt="Wedding rings" 
          className="w-full h-auto object-cover drop-shadow-lg static-image"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8 px-6">
        {/* Bottom text */}
        <div className="text-gray-600 text-1xl leading-relaxed font-light font-alexander">
          <p className="font-alexander">
            Love is… the reason why we’re here
          </p>
        </div>

        {/* Wedding date section */}
        <div className="pt-4 space-y-4">
          <h3 className="text-2xl font-light tracking-[0.3em] uppercase font-calmius" style={{ color: '#5d4e43' }}>
            ДАТА БРАКОСОЧЕТАНИЯ
          </h3>
          
          {/* Calendar */}
          <div className="bg-white rounded-lg p-4 max-w-sm mx-auto" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.15)' }}>
            {/* Calendar title */}
            <h4 className="text-base font-medium mb-3 tracking-wide font-indira" style={{ color: '#5d4e43' }}>
              Сентябрь 2025
            </h4>
            
            {/* Calendar header */}
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2 font-medium font-indira">
              <div className="text-center py-1">ПН</div>
              <div className="text-center py-1">ВТ</div>
              <div className="text-center py-1">СР</div>
              <div className="text-center py-1">ЧТ</div>
              <div className="text-center py-1">ПТ</div>
              <div className="text-center py-1">СБ</div>
              <div className="text-center py-1">ВС</div>
            </div>
            
            {/* Calendar grid - Сентябрь 2025 начинается с понедельника */}
            <div className="grid grid-cols-7 gap-1 text-gray-700 font-indira font-medium">
              {/* Первая неделя сентября 2025 */}
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">1</span>
              </div>
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">2</span>
              </div>
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">3</span>
              </div>
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">4</span>
              </div>
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">5</span>
              </div>
              <div className="p-1 text-center h-8 flex items-center justify-center">
                <span className="text-sm">6</span>
              </div>
              
              {/* 7 сентября с заливкой сердечка и белой цифрой */}
              <div className="p-1 text-center h-8 flex items-center justify-center relative">
                <Heart 
                  className="w-6 h-6 absolute animate-heart-pulse" 
                  fill="#5d4e43"
                  stroke="#5d4e43"
                  style={{ color: '#5d4e43' }}
                />
                <span className="text-xs font-medium text-white relative z-10">7</span>
              </div>
              
              {/* Вторая неделя */}
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">8</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">9</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">10</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">11</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">12</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">13</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">14</span>
              </div>
              
              {/* Третья неделя */}
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">15</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">16</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">17</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">18</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">19</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">20</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">21</span>
              </div>
              
              {/* Четвертая неделя */}
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">22</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">23</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">24</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">25</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">26</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">27</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">28</span>
              </div>
              
              {/* Пятая неделя */}
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">29</span>
              </div>
              <div className="p-2 text-center h-10 flex items-center justify-center">
                <span className="text-sm">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const LocationSection = () => (
    <section className="bg-stone-100 py-8">
      <div className="text-center space-y-8">
        {/* Title */}
        <h2 className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius" style={{ color: '#5d4e43' }}>
          ЛОКАЦИЯ
        </h2>
        
        {/* Full width image */}
        <div className="w-full">
          <img 
            src="/o9TWzv8MF6k.jpg" 
            alt="Дворец бракосочетания" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Location info */}
        <div className="px-6 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-base font-light font-alexander">
              Будем ждать вас по адресу:
            </p>
            <h3 className="text-lg font-medium text-gray-800 font-alexander">
              «Дворец бракосочетания №1»
            </h3>
            <p className="text-gray-600 text-base font-light italic font-alexander">
              Английская наб.28
            </p>
          </div>
          
          {/* Map button */}
          <a 
            href="https://maps.google.com/?q=Дворец+бракосочетания+№1+Английская+наб.+28+Санкт-Петербург"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button inline-block px-8 py-3 border-2 rounded-full font-medium text-base transition-all duration-300 font-indira"
            style={{ 
              borderColor: '#634B3D', 
              color: '#634B3D'
            }}
          >
            посмотреть на карте
          </a>
        </div>
      </div>
    </section>
  );

  const ProgramSection = () => (
    <section className="relative flex items-center justify-center px-6 py-8">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/IMG_8960.PNG')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-lg mx-auto py-8">
        {/* Title */}
        <h2 className="text-2xl font-light tracking-[0.2em] text-white text-center mb-8 uppercase relative z-10 font-calmius">
          Программа дня
        </h2>
        
        {/* Timeline */}
        <div className="relative z-10">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {/* 9:00 - Сбор гостей (время слева) */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-6">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">9:00</span>
              </div>
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
              <div className="flex-1 pl-6">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Сбор гостей
                </span>
              </div>
            </div>
            
            {/* 9:40 - Церемония (время справа) */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-6">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Церемония
                </span>
              </div>
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
              <div className="flex-1 pl-6">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">9:40</span>
              </div>
            </div>
            
            {/* 11:00 - Банкет (время слева) */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-6">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">11:00</span>
              </div>
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
              <div className="flex-1 pl-6">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Банкет
                </span>
              </div>
            </div>
            
            {/* 17:00 - Завершение банкета (время справа) */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-6">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Завершение<br />банкета
                </span>
              </div>
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
              <div className="flex-1 pl-6">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">17:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ImportantInfoSection = () => (
    <section className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-light tracking-[0.3em] uppercase text-center mb-8 font-calmius" style={{ color: '#5d4e43' }}>
          Важно знать
        </h2>
        
        {/* Intro text */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-base font-light leading-relaxed max-w-2xl mx-auto font-alexander">
            Чтобы наш день был лёгким, красивым и без казусов, просим учесть пару деталей. Спасибо, что рядом и что вы с пониманием!
          </p>
        </div>
      </div>
      
      {/* Full width image */}
      <div className="w-full">
        <img 
          src="/900.png" 
          alt="Важная информация для гостей" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );

  const GuestFormSection = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      attendance: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Здесь будет логика отправки формы
    };

    const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    return (
      <section className="bg-stone-100 py-12">
        <div className="max-w-md mx-auto px-6">
          {/* Title */}
          <h2 className="text-2xl font-light tracking-[0.3em] uppercase text-center mb-2 font-calmius" style={{ color: '#5d4e43' }}>
            АНКЕТА ГОСТЯ
          </h2>
          
          {/* Subtitle */}
          <p className="text-center text-gray-600 text-sm font-light mb-8 font-alexander">
            Просим заполнить анкету и подтвердить<br />своё присутствие на торжестве до 15.08.2025.
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name fields */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше Имя и Фамилия"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full p-3 border-b border-gray-400 bg-transparent focus:outline-none focus:border-gray-600 text-sm font-indira placeholder-gray-500"
                required
              />
              
              <div className="text-xs text-gray-500 font-alexander -mt-2">
                Если вы будете с парой, то укажите несколько имен
              </div>
              
              <div className="text-xs text-gray-500 font-alexander">
                Кудзиева Диана, Савченко Анатолий
              </div>
            </div>
            
            {/* Attendance confirmation */}
            <div className="space-y-3">
              <p className="text-gray-800 font-medium text-sm font-alexander">
                Подтвердите своё присутствие:
              </p>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="w-4 h-4 text-gray-600 border-gray-400 focus:ring-gray-500"
                    style={{ accentColor: '#5d4e43' }}
                  />
                  <span className="text-sm font-alexander text-gray-700">
                    Я с удовольствием приду
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="w-4 h-4 text-gray-600 border-gray-400 focus:ring-gray-500"
                    style={{ accentColor: '#5d4e43' }}
                  />
                  <span className="text-sm font-alexander text-gray-700">
                    К сожалению, не смогу
                  </span>
                </label>
              </div>
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-medium tracking-wide uppercase text-sm transition-all duration-300 font-alexander"
              style={{ backgroundColor: '#5d4e43' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#4a3e35'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#5d4e43'}
            >
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </section>
    );
  };

  const ThankYouSection = () => (
    <section className="bg-stone-100 py-12">
      <div className="max-w-2xl mx-auto text-center px-6 space-y-8">
        {/* Title */}
        <h2 className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius" style={{ color: '#5d4e43' }}>
          БЛАГОДАРНОСТЬ
        </h2>
        
        {/* Thank you message */}
        <div className="space-y-4 text-gray-600 text-base leading-relaxed font-alexander">
          <p className="font-light font-alexander">
            Спасибо вам за то, что согласились разделить с нами этот особенный день! 
            Ваша поддержка и присутствие делают наш праздник по-настоящему значимым.
          </p>
          <p className="font-light font-alexander">
            Мы подготовили для вас небольшое видео.
          </p>
        </div>
        
        {/* Video container */}
        <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg mx-auto">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {/* Video placeholder - replace with actual video when ready */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto">
                  <Play className="w-6 h-6 text-gray-600 ml-1" />
                </div>
                <p className="text-gray-500 text-sm font-light font-alexander">
                  Видео будет загружено
                </p>
              </div>
            </div>
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/video-poster.jpg"
            >
              <source src="/Видео Итог.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
        
        {/* Final message */}
        <div className="space-y-6 pt-4">
          <p className="text-gray-600 text-sm font-light italic font-calmius">
            С любовью и благодарностью за то, что вы часть нашей истории
          </p>
        </div>
      </div>
      
      {/* Full width hearts image */}
      <div className="w-full mt-8">
        <img 
          src="/Два сердца.png" 
          alt="Два сердца" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );

  return (
    <div className="relative">
      <LoadingScreen />
      <HeroSection />
      <WelcomeSection />
      <LocationSection />
      <ProgramSection />
      <ImportantInfoSection />
      <GuestFormSection />
      <ThankYouSection />
    </div>
  );
}

export default App;
