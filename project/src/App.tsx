import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Calendar, Music, ChevronDown, Play } from 'lucide-react';

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
        <div className="flex items-center justify-center animate-in">
          <div className="w-16 h-px bg-gray-300"></div>
          <Heart className="w-6 h-6 text-gray-400 mx-4" />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
        
        {/* Main message */}
        <div className="space-y-6">
          <h1 className="text-3xl font-light tracking-wide italic font-marckscript animate-in animate-in-delay-1" style={{ color: '#5d4e43' }}>
            Наше приглашение
          </h1>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p className="font-light font-alexander animate-in animate-in-delay-2">
              Мы создали это приглашение специально для мобильных устройств
            </p>
            <p className="font-medium font-alexander animate-in animate-in-delay-3" style={{ color: '#5d4e43' }}>
              Пожалуйста, откройте его на телефоне для лучшего просмотра
            </p>
          </div>
        </div>
        
        {/* Phone icon */}
        <div className="py-4 animate-in animate-in-delay-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg 
              className="w-8 h-8 animate-in" 
              style={{ color: '#5d4e43' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex items-center justify-center animate-in">
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
          <p className="text-3xl font-medium tracking-wide font-marckscript italic animate-in" style={{ color: '#5d4e43' }}>
            Загружаем наше
          </p>
          <p className="text-2xl font-light tracking-[0.2em] uppercase font-calmius animate-in animate-in-delay-1" style={{ color: '#8b7355' }}>
            приглашение
          </p>
          
          <div className="flex items-center justify-center pt-3 animate-in animate-in-delay-2">
            <div className="w-16 h-px bg-gray-300"></div>
            <Heart className="w-4 h-4 text-gray-400 mx-4" />
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const HeroSection = () => (
    <section className="h-screen relative overflow-hidden animate-in">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-in"
        style={{
          backgroundImage: `url('/image copy copy copy.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/20 animate-in animate-in-delay-1"></div>
      </div>
    </section>
  );

  const WelcomeSection = () => (
    <section className="bg-stone-100 flex flex-col justify-center py-8 animate-in">
      <div className="max-w-2xl mx-auto text-center space-y-8 px-6">
        <div className="space-y-1">
          <h2 className="text-4xl font-light tracking-wide italic font-marckscript animate-in" style={{ color: '#5d4e43' }}>
            Дорогие,
          </h2>
          <h3 className="text-gray-700 text-2xl font-light tracking-widest font-marckscript animate-in animate-in-delay-1">
            Родные и Близкие!
          </h3>
        </div>

        <div className="space-y-4 text-gray-600 text-1xl leading-relaxed">
          <p className="font-light font-alexander animate-in animate-in-delay-2">
            Мы с радостью приглашаем вас разделить с нами этот особенный день! Ваша поддержка и присутствие сделают наш праздник незабываемым.
          </p>
        </div>
      </div>

      <div className="w-full py-6 animate-in animate-in-delay-3">
        <img 
          src="/aef794f9-6fd8-4b14-aba5-cabef93a76fe.png" 
          alt="Wedding rings" 
          className="w-full h-auto object-cover drop-shadow-lg static-image"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8 px-6">
        <div className="text-gray-600 text-1xl leading-relaxed font-light font-alexander">
          <p className="font-alexander animate-in animate-in-delay-4">
            Love is… the reason why we're here
          </p>
        </div>

        <div className="pt-4 space-y-4">
          <h3 className="text-2xl font-light tracking-[0.3em] uppercase font-calmius animate-in" style={{ color: '#5d4e43' }}>
            ДАТА БРАКОСОЧЕТАНИЯ
          </h3>
          
          <div className="bg-white rounded-lg p-4 max-w-sm mx-auto animate-in animate-in-delay-1" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.15)' }}>
            <h4 className="text-base font-medium mb-3 tracking-wide font-indira animate-in animate-in-delay-2" style={{ color: '#5d4e43' }}>
              Сентябрь 2025
            </h4>
            
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2 font-medium font-indira">
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day, index) => (
                <div key={day} className="text-center py-1 animate-in animate-in-delay-3">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-gray-700 font-indira font-medium">
              {[1, 2, 3, 4, 5, 6].map(day => (
                <div key={day} className="p-1 text-center h-8 flex items-center justify-center animate-in animate-in-delay-4">
                  <span className="text-sm">{day}</span>
                </div>
              ))}
              
              <div className="p-1 text-center h-8 flex items-center justify-center relative animate-in animate-in-delay-4">
                <Heart 
                  className="w-8 h-8 absolute animate-heart-pulse" 
                  fill="#5d4e43"
                  stroke="#5d4e43"
                  style={{ color: '#5d4e43' }}
                />
                <span className="text-sm font-medium text-white relative z-10">7</span>
              </div>
              
              {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(day => (
                <div key={day} className="p-2 text-center h-10 flex items-center justify-center animate-in animate-in-delay-4">
                  <span className="text-sm">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProgramSection = () => (
    <section className="relative flex items-center justify-center px-6 py-4 animate-in">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-in"
        style={{
          backgroundImage: `url('/IMG_8960.PNG')`
        }}
      >
        <div className="absolute inset-0 bg-black/70 animate-in animate-in-delay-1"></div>
      </div>
      
      <div className="max-w-lg mx-auto py-8">
        <h2 className="text-2xl font-light tracking-[0.2em] text-white text-center mb-8 uppercase relative z-10 font-calmius animate-in">
          Программа дня
        </h2>
        
        <div className="relative z-10">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {[
              { time: "9:00", event: "Сбор гостей" },
              { time: "9:40", event: "Церемония" },
              { time: "11:00", event: "Банкет" },
              { time: "17:00", event: "Завершение<br />банкета" }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center animate-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <div className="w-1/2 text-right pr-8">
                  <span className={`text-${index % 2 === 0 ? '2xl' : 'sm'} font-light text-white tracking-${index % 2 === 0 ? '[0.1em]' : 'wide'} uppercase font-indira`}>
                    {index % 2 === 0 ? item.time : item.event}
                  </span>
                </div>
                <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="w-1/2 pl-8">
                  <span className={`text-${index % 2 === 0 ? 'sm' : '2xl'} font-light text-white tracking-${index % 2 === 0 ? 'wide' : '[0.1em]'} uppercase font-indira`}>
                    {index % 2 === 0 ? item.event : item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const LocationSection = () => (
    <section className="bg-stone-100 py-6 animate-in">
      <div className="flex items-center justify-center py-4 animate-in">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-px bg-gray-300"></div>
          <Heart className="w-5 h-5 text-gray-400" />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>
      </div>
      
      <div className="text-center space-y-8">
        <h2 className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius animate-in animate-in-delay-1" style={{ color: '#5d4e43' }}>
          ЛОКАЦИЯ
        </h2>
        
        <div className="w-full animate-in animate-in-delay-2">
          <img 
            src="/o9TWzv8MF6k.jpg" 
            alt="Дворец бракосочетания" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="px-6 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-1xl font-light font-alexander animate-in animate-in-delay-3">
              Будем ждать вас по адресу:
            </p>
            <h3 className="text-1xl font-medium text-gray-800 font-alexander animate-in animate-in-delay-3">
              «Дворец бракосочетания №1»
            </h3>
            <p className="text-gray-600 text-1xl font-light italic font-alexander animate-in animate-in-delay-3">
              Английская наб.28
            </p>
          </div>
          
          <a 
            href="https://yandex.ru/maps/2/saint-petersburg/house/angliyskaya_naberezhnaya_28/Z0kYdA5jQUIAQFtjfXVycnVlZQ==/?ll=30.293878%2C59.933961&z=17"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button inline-block px-8 py-3 border-2 rounded-full font-medium text-1xl transition-all duration-300 font-alexander hover:-translate-y-1 hover:shadow-lg animate-in animate-in-delay-4"
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

  const GuestFormSection = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      attendance: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [showTelegramPopup, setShowTelegramPopup] = useState(false);

    const handleSubmit = async (e) => {
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
          if (formData.attendance === 'да') {
            setShowTelegramPopup(true);
          }
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

    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const TelegramPopup = () => (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${showTelegramPopup ? 'opacity-100 visible' : 'opacity-0 invisible scale-95 translate-y-4'}`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in"
          onClick={() => setShowTelegramPopup(false)}
        ></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-500">
          <button
            onClick={() => setShowTelegramPopup(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 animate-in"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-8 text-center space-y-6">
            <div className="flex items-center justify-center animate-in">
              <div className="w-12 h-px bg-gray-300"></div>
              <Heart className="w-5 h-5 text-gray-400 mx-4" />
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-in animate-in-delay-1">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-light tracking-wide italic font-marckscript animate-in animate-in-delay-2" style={{ color: '#5d4e43' }}>
                Спасибо!
              </h3>
              
              <p className="text-gray-600 font-light font-alexander animate-in animate-in-delay-3">
                Ваш ответ успешно отправлен
              </p>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-lg font-medium font-alexander animate-in animate-in-delay-4" style={{ color: '#5d4e43' }}>
                  Присоединяйтесь к нашей группе
                </h4>
              </div>
              
              <a
                href="https://t.me/+yCFHG0vexFRmMGMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 text-white font-medium tracking-wide text-sm transition-all duration-300 rounded-lg font-alexander shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-in animate-in-delay-4"
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
            
            <div className="flex items-center justify-center pt-2 animate-in">
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-4"></div>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <section className="bg-stone-100 py-8 animate-in">
        <TelegramPopup />
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light tracking-[0.3em] uppercase mb-4 font-calmius animate-in" style={{ color: '#5d4e43' }}>
              АНКЕТА ГОСТЯ
            </h2>
            
            <div className="flex items-center justify-center mb-6 animate-in animate-in-delay-1">
              <div className="w-12 h-px bg-gray-300"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-4"></div>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-in animate-in-delay-2">
            <div className="px-8 py-6 border-b border-gray-100 animate-in animate-in-delay-3">
              <p className="text-center text-gray-700 text-base font-light leading-relaxed font-alexander">
                Просим заполнить анкету и подтвердить своё присутствие на торжестве до
                <br />
                <span className="font-medium animate-in animate-in-delay-4">15 августа 2025</span>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя и фамилия"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 font-alexander placeholder-gray-300 hover:shadow-lg animate-in animate-in-delay-4"
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
                  required
                />
                
                <div className="space-y-1 text-xs text-gray-500 font-alexander">
                  <div className="animate-in animate-in-delay-4">Если вы будете с парой, то укажите несколько имён</div>
                  <div className="italic animate-in animate-in-delay-4">Пример: Кудзиева Диана, Савченко Анатолий</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 font-alexander animate-in animate-in-delay-4">
                  Подтвердите своё присутствие
                </label>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group animate-in animate-in-delay-4">
                    <div className="relative">
                      <input
                        type="radio"
                        name="attendance"
                        value="да"
                        checked={formData.attendance === 'да'}
                        onChange={(e) => handleInputChange('attendance', e.target.value)}
                        className="w-5 h-5 sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${formData.attendance === 'да' ? 'border-brown-500 bg-brown-500' : 'border-gray-300 group-hover:border-gray-400'}`} style={{ 
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
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group animate-in animate-in-delay-4">
                    <div className="relative">
                      <input
                        type="radio"
                        name="attendance"
                        value="нет"
                        checked={formData.attendance === 'нет'}
                        onChange={(e) => handleInputChange('attendance', e.target.value)}
                        className="w-5 h-5 sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${formData.attendance === 'нет' ? 'border-brown-500 bg-brown-500' : 'border-gray-300 group-hover:border-gray-400'}`} style={{ 
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
                  </label>
                </div>
              </div>
              
              <div className="pt-4 animate-in animate-in-delay-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.firstName.trim() || !formData.attendance}
                  className={`w-full py-4 text-white font-medium tracking-wide uppercase text-sm transition-all duration-300 rounded-lg font-alexander shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isSubmitting || !formData.firstName.trim() || !formData.attendance ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ backgroundColor: '#5d4e43' }}
                  onMouseEnter={(e) => {
                    if (isSubmitting || !formData.firstName.trim() || !formData.attendance) return;
                    e.currentTarget.style.backgroundColor = '#4a3e35';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    if (isSubmitting || !formData.firstName.trim() || !formData.attendance) return;
                    e.currentTarget.style.backgroundColor = '#5d4e43';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить'}
                </button>
              </div>
              
              {submitStatus === 'success' && !showTelegramPopup && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-in animate-in-delay-4">
                  <p className="text-green-800 text-center font-alexander">
                    ✓ Спасибо! Ваш ответ успешно отправлен
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-in animate-in-delay-4">
                  <p className="text-red-800 text-center font-alexander">
                    ✗ Произошла ошибка. Попробуйте еще раз
                  </p>
                </div>
              )}
            </form>
          </div>
          
          <div className="text-center mt-8 animate-in animate-in-delay-4">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-px bg-gray-300"></div>
              <Heart className="w-4 h-4" />
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ThankYouSection = () => (
    <section className="bg-stone-100 py-6 animate-in">
      <div className="max-w-2xl mx-auto text-center px-6 space-y-8">
        <h2 className="text-2xl font-light tracking-[0.3em] uppercase mb-8 font-calmius animate-in" style={{ color: '#5d4e43' }}>
          БЛАГОДАРНОСТЬ
        </h2>
        
        <div className="space-y-4 text-gray-600 text-1xl leading-relaxed font-alexander">
          <p className="font-light font-alexander animate-in animate-in-delay-1">
            Мы подготовили для вас небольшое видео
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-20 shadow-sm max-w-lg mx-auto animate-in animate-in-delay-2">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 animate-in animate-in-delay-3">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto animate-in animate-in-delay-4">
                  <Play className="w-6 h-6 text-gray-600 ml-1" />
                </div>
                <p className="text-gray-500 text-sm font-light font-alexander animate-in animate-in-delay-4">
                  Видео будет загружено
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 pt-4">
          <p className="text-gray-600 text-1xl font-light italic font-marckscript animate-in animate-in-delay-4">
            С любовью и благодарностью за то, что вы часть нашей истории!
          </p>
        </div>
      </div>
      
      <div className="w-full mt-8 animate-in animate-in-delay-4">
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
      <style>
        {`
          .animate-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-in-delay-1 { animation-delay: 0.2s; }
          .animate-in-delay-2 { animation-delay: 0.4s; }
          .animate-in-delay-3 { animation-delay: 0.6s; }
          .animate-in-delay-4 { animation-delay: 0.8s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-heart-pulse {
            animation: heartPulse 2s infinite;
          }
          @keyframes heartPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>
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