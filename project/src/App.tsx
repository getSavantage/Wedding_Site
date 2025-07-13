import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Calendar, Music, ChevronDown, Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSection, AnimatedText, AnimatedImage } from './components/AnimatedSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const DesktopBanner = () => (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Decorative element */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-px bg-gray-300"></div>
          <Heart className="w-6 h-6 text-gray-400 mx-4" />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
        
        {/* Main message */}
        <div className="space-y-6">
          <h1 className="text-3xl font-light tracking-wide italic font-marckscript" style={{ color: '#5d4e43' }}>
            Наше приглашение
          </h1>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p className="font-light font-alexander">
              Мы создали это приглашение специально для мобильных устройств
            </p>
            <p className="font-medium font-alexander" style={{ color: '#5d4e43' }}>
              Пожалуйста, откройте его на телефоне для лучшего просмотра
            </p>
          </div>
        </div>
        
        {/* Phone icon */}
        <div className="py-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg 
              className="w-8 h-8" 
              style={{ color: '#5d4e43' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-px bg-gray-300"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-4"></div>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  );

  const LoadingScreen = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: '#f5f5f0' }}>
      <div className="text-center">
        <div className="space-y-2">
          <p className="text-3xl font-medium tracking-wide font-marckscript italic" style={{ color: '#5d4e43' }}>
            Загружаем наше
          </p>
          <p className="text-2xl font-light tracking-[0.2em] uppercase font-calmius" style={{ color: '#8b7355' }}>
            приглашение
          </p>
          
          <div className="flex items-center justify-center pt-3">
            <div className="w-16 h-px bg-gray-300"></div>
            <Heart className="w-4 h-4 text-gray-400 mx-4" />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>
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
      <AnimatedSection className="max-w-2xl mx-auto text-center space-y-8 px-6">
        <AnimatedSection delay={0.2} className="space-y-1">
          <AnimatedText
            text="Дорогие,"
            className="text-4xl font-light tracking-wide italic font-marckscript"
            delay={0.3}
            style={{ color: '#5d4e43' }}
          />
          <AnimatedText
            text="Родные и Близкие!"
            className="text-gray-700 text-2xl font-light tracking-widest font-marckscript"
            delay={0.5}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.7} className="space-y-4 text-gray-600 text-1xl leading-relaxed">
          <AnimatedText
            text="Мы с радостью приглашаем вас разделить с нами этот особенный день! Ваша поддержка и присутствие сделают наш праздник незабываемым."
            className="font-light font-alexander"
            delay={0.8}
            stagger={0.03}
          />
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection delay={1} className="w-full py-6">
        <AnimatedImage
          src="/aef794f9-6fd8-4b14-aba5-cabef93a76fe.png" 
          alt="Wedding rings" 
          className="drop-shadow-lg static-image"
          delay={1.2}
        />
      </AnimatedSection>

      <AnimatedSection delay={1.4} className="max-w-2xl mx-auto text-center space-y-8 px-6">
        <AnimatedSection delay={1.5} className="text-gray-600 text-1xl leading-relaxed font-light font-alexander">
          <AnimatedText
            text="Love is… the reason why we're here"
            className="font-alexander"
            delay={1.6}
          />
        </AnimatedSection>

        <AnimatedSection delay={1.8} className="pt-4 space-y-4">
          <AnimatedText
            text="ДАТА БРАКОСОЧЕТАНИЯ"
            className="text-2xl font-light tracking-[0.3em] uppercase font-calmius"
            delay={1.9}
            style={{ color: '#5d4e43' }}
          />
          
          <AnimatedSection delay={2.1} className="bg-white rounded-lg p-4 max-w-sm mx-auto" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.15)' }}>
            <h4 className="text-base font-medium mb-3 tracking-wide font-indira" style={{ color: '#5d4e43' }}>
              Сентябрь 2025
            </h4>
            
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2 font-medium font-indira">
              <div className="text-center py-1">ПН</div>
              <div className="text-center py-1">ВТ</div>
              <div className="text-center py-1">СР</div>
              <div className="text-center py-1">ЧТ</div>
              <div className="text-center py-1">ПТ</div>
              <div className="text-center py-1">СБ</div>
              <div className="text-center py-1">ВС</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-gray-700 font-indira font-medium">
              {[1, 2, 3, 4, 5, 6].map(day => (
                <div key={day} className="p-1 text-center h-8 flex items-center justify-center">
                  <span className="text-sm">{day}</span>
                </div>
              ))}
              
              <div className="p-1 text-center h-8 flex items-center justify-center relative">
                <Heart 
                  className="w-8 h-8 absolute animate-heart-pulse" 
                  fill="#5d4e43"
                  stroke="#5d4e43"
                  style={{ color: '#5d4e43' }}
                />
                <span className="text-sm font-medium text-white relative z-10">7</span>
              </div>
              
              {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(day => (
                <div key={day} className="p-2 text-center h-10 flex items-center justify-center">
                  <span className="text-sm">{day}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );

  const ProgramSection = () => (
    <section className="relative flex items-center justify-center px-6 py-4">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/IMG_8960.PNG')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <AnimatedSection className="max-w-lg mx-auto py-8">
        <AnimatedText
          text="Программа дня"
          className="text-2xl font-light tracking-[0.2em] text-white text-center mb-8 uppercase relative z-10 font-calmius"
          delay={0.2}
        />
        
        <AnimatedSection delay={0.4} className="relative z-10">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2"></div>
          
          <div className="space-y-8">
            <AnimatedSection delay={0.6} direction="left" className="relative flex items-center">
              <div className="w-1/2 text-right pr-8">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">9:00</span>
              </div>
              <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="w-1/2 pl-8">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Сбор гостей
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8} direction="right" className="relative flex items-center">
              <div className="w-1/2 text-right pr-8">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Церемония
                </span>
              </div>
              <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="w-1/2 pl-8">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">9:40</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={1.0} direction="left" className="relative flex items-center">
              <div className="w-1/2 text-right pr-8">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">11:00</span>
              </div>
              <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="w-1/2 pl-8">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Банкет
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={1.2} direction="right" className="relative flex items-center">
              <div className="w-1/2 text-right pr-8">
                <span className="text-white font-light tracking-wide uppercase text-sm font-indira">
                  Завершение<br />банкета
                </span>
              </div>
              <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="w-1/2 pl-8">
                <span className="text-2xl font-light text-white tracking-[0.1em] font-indira">17:00</span>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );

  const LocationSection = () => (
    <section className="bg-stone-100 py-6">
      <AnimatedSection className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-px bg-gray-300"></div>
          <Heart className="w-5 h-5 text-gray-400" />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
      </AnimatedSection>
      
      <div className="text-center space-y-8">
        <AnimatedText
          text="ЛОКАЦИЯ"
          className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius"
          delay={0.2}
          style={{ color: '#5d4e43' }}
        />
        
        <AnimatedSection delay={0.4} className="w-full">
          <AnimatedImage
            src="/o9TWzv8MF6k.jpg" 
            alt="Дворец бракосочетания" 
            delay={0.5}
          />
        </AnimatedSection>
        
        <AnimatedSection delay={0.7} className="px-6 space-y-6">
          <AnimatedSection delay={0.8} className="text-center space-y-2">
            <AnimatedText
              text="Будем ждать вас по адресу:"
              className="text-gray-600 text-1xl font-light font-alexander"
              delay={0.9}
            />
            <AnimatedText
              text="«Дворец бракосочетания №1»"
              className="text-1xl font-medium text-gray-800 font-alexander"
              delay={1.1}
            />
            <AnimatedText
              text="Английская наб.28"
              className="text-gray-600 text-1xl font-light italic font-alexander"
              delay={1.3}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={1.5}>
            <motion.a
            href="https://yandex.ru/maps/2/saint-petersburg/house/angliyskaya_naberezhnaya_28/Z0kYdA5jQUIAQFtjfXVycnVlZQ==/?ll=30.293878%2C59.933961&z=17"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button inline-block px-8 py-3 border-2 rounded-full font-medium text-1xl transition-all duration-300 font-alexander"
            style={{ 
              borderColor: '#634B3D', 
              color: '#634B3D'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            посмотреть на карте
          </motion.a>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );

  const GuestFormSection = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      attendance: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showTelegramPopup, setShowTelegramPopup] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!formData.firstName.trim() || !formData.attendance) {
        return;
      }
      
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        const response = await fetch('https://hook.eu2.make.com/o4pq5zhpqdw5or8now5od48r4hiwcgfr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            имя: formData.firstName.trim(),
            присутствие: formData.attendance,
            времяОтправки: new Date().toISOString(),
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          // Показываем попап с Telegram только если человек придет
          if (formData.attendance === 'да') {
            setShowTelegramPopup(true);
          }
          // Очищаем форму после успешной отправки
          setFormData({
            firstName: '',
            attendance: ''
          });
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const TelegramPopup = () => (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        showTelegramPopup ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowTelegramPopup(false)}
        ></div>
        
        {/* Popup */}
        <div className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          showTelegramPopup ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}>
          {/* Close button */}
          <button
            onClick={() => setShowTelegramPopup(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Content */}
          <div className="p-8 text-center space-y-6">
            {/* Decorative element */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-px bg-gray-300"></div>
              <Heart className="w-5 h-5 text-gray-400 mx-4" />
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
            
            {/* Success message */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-light tracking-wide italic font-marckscript" style={{ color: '#5d4e43' }}>
                Спасибо!
              </h3>
              
              <p className="text-gray-600 font-light font-alexander">
                Ваш ответ успешно отправлен
              </p>
            </div>
            
            {/* Telegram invitation */}
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-lg font-medium font-alexander" style={{ color: '#5d4e43' }}>
                  Присоединяйтесь к нашей группе
                </h4>
              </div>
              
              <a
                href="https://t.me/+yCFHG0vexFRmMGMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 text-white font-medium tracking-wide text-sm transition-all duration-300 rounded-lg font-alexander shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ backgroundColor: '#0088cc' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#006ba3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0088cc';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Присоединиться к группе</span>
              </a>
            </div>
            
            {/* Bottom decorative element */}
            <div className="flex items-center justify-center pt-2">
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-4"></div>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <section className="bg-stone-100 py-8">
        <TelegramPopup />
        <AnimatedSection className="max-w-lg mx-auto px-6">
          <AnimatedSection className="text-center mb-8">
            <AnimatedText
              text="АНКЕТА ГОСТЯ"
              className="text-2xl font-light tracking-[0.3em] uppercase mb-4 font-calmius"
              delay={0.2}
              style={{ color: '#5d4e43' }}
            />
            
            <AnimatedSection delay={0.4} className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-gray-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-4"></div>
              <div className="w-12 h-px bg-gray-300"></div>
            </AnimatedSection>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <AnimatedSection delay={0.8} className="px-8 py-6 border-b border-gray-100">
              <AnimatedText
                text="Просим заполнить анкету и подтвердить своё присутствие на торжестве до 15 августа 2025"
                className="text-center text-gray-700 text-base font-light leading-relaxed font-alexander"
                delay={0.9}
                stagger={0.02}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={1.1} className="px-8 py-8">
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <AnimatedSection delay={1.3} className="space-y-3">
                  <motion.input
                  type="text"
                  placeholder="Ваше имя и фамилия"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 font-alexander placeholder-gray-300"
                  style={{ 
                    backgroundColor: '#5d4e43',
                    focusRingColor: '#4a3e35'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 2px #4a3e35';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  required
                />
                
                  <AnimatedSection delay={1.5} className="space-y-1 text-xs text-gray-500 font-alexander">
                    <div>Если вы будете с парой, то укажите несколько имён</div>
                    <div className="italic">Пример: Кудзиева Диана, Савченко Анатолий</div>
                  </AnimatedSection>
                </AnimatedSection>
              
                <AnimatedSection delay={1.6} className="space-y-4">
                  <AnimatedText
                    text="Подтвердите своё присутствие"
                    className="block text-sm font-medium text-gray-700 font-alexander"
                    delay={1.7}
                  />
                
                  <AnimatedSection delay={1.8} className="space-y-3">
                    <motion.label 
                      className="flex items-center space-x-3 cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.9, duration: 0.5 }}
                    >
                    <div className="relative">
                      <input
                        type="radio"
                        name="attendance"
                        value="да"
                        checked={formData.attendance === 'да'}
                        onChange={(e) => handleInputChange('attendance', e.target.value)}
                        className="w-5 h-5 sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        formData.attendance === 'да' 
                          ? 'border-brown-500 bg-brown-500' 
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`} style={{ 
                        borderColor: formData.attendance === 'да' ? '#5d4e43' : '',
                        backgroundColor: formData.attendance === 'да' ? '#5d4e43' : ''
                      }}>
                        {formData.attendance === 'да' && (
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-700 font-alexander">
                      Я с удовольствием приду
                    </span>
                    </motion.label>
                  
                    <motion.label 
                      className="flex items-center space-x-3 cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                    >
                    <div className="relative">
                      <input
                        type="radio"
                        name="attendance"
                        value="нет"
                        checked={formData.attendance === 'нет'}
                        onChange={(e) => handleInputChange('attendance', e.target.value)}
                        className="w-5 h-5 sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        formData.attendance === 'нет' 
                          ? 'border-brown-500 bg-brown-500' 
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`} style={{ 
                        borderColor: formData.attendance === 'нет' ? '#5d4e43' : '',
                        backgroundColor: formData.attendance === 'нет' ? '#5d4e43' : ''
                      }}>
                        {formData.attendance === 'нет' && (
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-700 font-alexander">
                      К сожалению, не смогу
                    </span>
                    </motion.label>
                  </AnimatedSection>
                </AnimatedSection>
              
                <AnimatedSection delay={2.1} className="pt-4">
                  <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.firstName.trim() || !formData.attendance}
                  className={`w-full py-4 text-white font-medium tracking-wide uppercase text-sm transition-all duration-300 rounded-lg font-alexander shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isSubmitting || !formData.firstName.trim() || !formData.attendance 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                  style={{ backgroundColor: '#5d4e43' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={(e) => {
                    if (isSubmitting || !formData.firstName.trim() || !formData.attendance) return;
                    e.currentTarget.style.backgroundColor = '#4a3e35';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (isSubmitting || !formData.firstName.trim() || !formData.attendance) return;
                    e.currentTarget.style.backgroundColor = '#5d4e43';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить'}
                  </motion.button>
                </AnimatedSection>
              
              {submitStatus === 'success' && (
                !showTelegramPopup && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center font-alexander">
                      ✓ Спасибо! Ваш ответ успешно отправлен
                    </p>
                  </div>
                )
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center font-alexander">
                    ✗ Произошла ошибка. Попробуйте еще раз
                  </p>
                </div>
              )}
              </motion.form>
            </AnimatedSection>
          </AnimatedSection>
          
          <AnimatedSection delay={2.3} className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-px bg-gray-300"></div>
              <Heart className="w-4 h-4" />
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>
    );
  };

  const ThankYouSection = () => (
    <section className="bg-stone-100 py-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center px-6 space-y-8">
        <AnimatedText
          text="БЛАГОДАРНОСТЬ"
          className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius"
          delay={0.2}
          style={{ color: '#5d4e43' }}
        />
        
        <AnimatedSection delay={0.4} className="space-y-4 text-gray-600 text-1xl leading-relaxed font-alexander">
          <AnimatedText
            text="Мы подготовили для вас небольшое видео"
            className="font-light font-alexander"
            delay={0.5}
          />
        </AnimatedSection>
        

    {/* Video container */}
      <AnimatedSection
        delay={0.7}
        className="bg-white rounded-lg p-6 shadow-sm max-w-lg max-h-lg mx-auto"
      >
        <motion.div
          className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="/video-poster.jpg"  // you can keep or remove this
          >
            <source src="/Видео Итог.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </motion.div>
      </AnimatedSection>

        
        <AnimatedSection delay={1.0} className="space-y-6 pt-4">
          <AnimatedText
            text="С любовью и благодарностью за то, что вы часть нашей истории!"
            className="text-gray-600 text-1xl font-light italic font-marckscript"
            delay={1.1}
            stagger={0.03}
          />
        </AnimatedSection>
      </AnimatedSection>
      
      <AnimatedSection delay={0.3} className="w-full mt-2">
        <AnimatedImage
          src="/Два сердца.png" 
          alt="Два сердца" 
          delay={0.4}
        />
      </AnimatedSection>
    </section>
  );

  return (
    <div className="relative">
      {!isMobile ? (
        <DesktopBanner />
      ) : (
        <>
          <LoadingScreen />
          <HeroSection />
          <WelcomeSection />
          <ProgramSection />
          <LocationSection />
          <GuestFormSection />
          <ThankYouSection />
        </>
      )}
    </div>
  );
}

export default App;
