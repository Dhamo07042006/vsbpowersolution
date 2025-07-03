import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Wrench, Calculator, FileCheck, Zap, Eye, ChevronLeft, ChevronRight, Play, Pause, MapPin, Clock, Factory, Building2, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentKovilpattiSlide, setCurrentKovilpattiSlide] = useState(0);
  const [isKovilpattiAutoPlaying, setIsKovilpattiAutoPlaying] = useState(true);

  const projectImages = [
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.11_c30464c6.jpg',
      title: 'Commercial Rooftop Installation',
      description: 'Large-scale solar installation on commercial building in Coimbatore'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.26_46123ed0.jpg',
      title: 'Residential Solar System',
      description: 'Ground-mounted solar panels for residential property'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.39_58f80f40.jpg',
      title: 'Industrial Solar Project',
      description: 'Team installation of industrial-scale solar system'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.39_89b8e712.jpg',
      title: 'Solar Inverter Installation',
      description: 'Professional inverter and monitoring system setup'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.40_e4fa2e6d.jpg',
      title: 'Residential Rooftop Project',
      description: 'Happy customers with their new solar installation'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.40_eca1ead0.jpg',
      title: 'Battery Storage System',
      description: 'Advanced battery storage and inverter installation with monitoring'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.41_b10f3822.jpg',
      title: 'Grid-Tie Inverter Setup',
      description: 'Professional grid-connected inverter and safety equipment installation'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.42_67433c9f.jpg',
      title: 'Solar Canopy Installation',
      description: 'Innovative solar canopy structure installation in progress'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.42_91a61d0f.jpg',
      title: 'Elevated Solar Canopy',
      description: 'Multi-level solar canopy system providing shade and energy generation'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.08.42_ed33d9e0.jpg',
      title: 'Satisfied Customer',
      description: 'Happy customer with completed residential solar installation'
    },
    {
      src: '/WhatsApp Image 2025-07-02 at 19.13.58_763d3243.jpg',
      title: 'Professional Inverter Room',
      description: 'State-of-the-art inverter room with advanced monitoring and control systems'
    },
    {
      src: '/WhatsApp Image 2025-07-02 at 19.13.58_5c6db524.jpg',
      title: 'Multi-Inverter Installation',
      description: 'Professional installation of multiple inverters with organized cable management'
    },
    {
      src: '/WhatsApp Image 2025-07-02 at 19.13.59_68194550.jpg',
      title: 'Rooftop Solar Array',
      description: 'Large-scale rooftop solar installation with wind turbines in the background'
    }
  ];

  const kovilpattiImages = [
    {
      src: '/WhatsApp Image 2025-07-01 at 23.04.15_9b2239e6.jpg',
      title: 'Site Preparation',
      description: 'Heavy machinery preparing the land for solar panel installation'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.04.55_e432583f.jpg',
      title: 'Infrastructure Development',
      description: 'Concrete pipe installation for underground cabling infrastructure'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.04.57_153cbfd3.jpg',
      title: 'Survey and Marking',
      description: 'Technical team conducting precise land survey and boundary marking'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.04.59_18ec4323.jpg',
      title: 'Land Preparation',
      description: 'Site leveling and preparation work in progress with survey markers'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 23.05.01_274805d0.jpg',
      title: 'Site Survey',
      description: 'Engineering team conducting detailed site assessment and planning'
    }
  ];

  const whyChooseUs = [
    {
      icon: Calculator,
      title: 'Optimized Design Engineering',
      description: 'Advanced engineering solutions tailored to maximize energy output and efficiency.',
    },
    {
      icon: Eye,
      title: 'Centrally Monitored Maintenance',
      description: '24/7 monitoring and proactive maintenance to ensure optimal system performance.',
    },
    {
      icon: FileCheck,
      title: 'Custom Financial Modelling',
      description: 'Detailed financial analysis and ROI calculations for informed investment decisions.',
    },
    {
      icon: Users,
      title: 'Efficient Government Liaisoning',
      description: 'Streamlined approval processes and permit handling for hassle-free installations.',
    },
  ];

  const processSteps = [
    {
      icon: Calculator,
      title: 'Demand Assessment',
      description: 'Comprehensive analysis of your energy requirements and consumption patterns.',
    },
    {
      icon: Zap,
      title: 'Optimized Solutions',
      description: 'Custom-designed solar solutions optimized for your specific needs and location.',
    },
    {
      icon: Wrench,
      title: 'Engineering',
      description: 'Detailed engineering drawings and system specifications for optimal performance.',
    },
    {
      icon: FileCheck,
      title: 'Approvals & Permits',
      description: 'Complete handling of all regulatory approvals and permit requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Installation & Commissioning',
      description: 'Professional installation and thorough system commissioning by certified technicians.',
    },
    {
      icon: Eye,
      title: 'O&M Monitoring',
      description: 'Ongoing operations and maintenance with continuous performance monitoring.',
    },
  ];

  // Auto-play functionality for main gallery
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projectImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, projectImages.length]);

  // Auto-play functionality for Kovilpatti slideshow
  useEffect(() => {
    if (isKovilpattiAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentKovilpattiSlide((prev) => (prev + 1) % kovilpattiImages.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isKovilpattiAutoPlaying, kovilpattiImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const nextKovilpattiSlide = () => {
    setCurrentKovilpattiSlide((prev) => (prev + 1) % kovilpattiImages.length);
  };

  const prevKovilpattiSlide = () => {
    setCurrentKovilpattiSlide((prev) => (prev - 1 + kovilpattiImages.length) % kovilpattiImages.length);
  };

  const goToKovilpattiSlide = (index: number) => {
    setCurrentKovilpattiSlide(index);
  };

  const toggleKovilpattiAutoPlay = () => {
    setIsKovilpattiAutoPlaying(!isKovilpattiAutoPlaying);
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              VSB Power Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-300 font-medium">
              Connecting the Sunshine – From Sunlight to Savings
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ongoing Projects
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Discover our current large-scale solar projects that are transforming the renewable energy landscape across Tamil Nadu.
            </p>
          </div>

          {/* Kovilpatti Solar Power Plant */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Images Slideshow */}
<div className="relative h-80 lg:h-[500px] overflow-hidden">
  <div
    className="flex w-full transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentKovilpattiSlide * 100}%)` }}
  >
    {kovilpattiImages.map((image, index) => (
      <div key={index} className="w-full flex-shrink-0 relative h-80 lg:h-[500px]">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h4 className="text-lg font-bold mb-1">{image.title}</h4>
          <p className="text-sm text-gray-200">{image.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Slideshow Navigation */}
  <button
    onClick={prevKovilpattiSlide}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>
  <button
    onClick={nextKovilpattiSlide}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
  >
    <ChevronRight className="h-5 w-5" />
  </button>

  {/* Auto-play Toggle */}
  <button
    onClick={toggleKovilpattiAutoPlay}
    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
  >
    {isKovilpattiAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
  </button>

  {/* Slide Indicators */}
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {kovilpattiImages.map((_, index) => (
      <button
        key={index}
        onClick={() => goToKovilpattiSlide(index)}
        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
          index === currentKovilpattiSlide
            ? 'bg-white'
            : 'bg-white/50 hover:bg-white/75'
        }`}
      />
    ))}
  </div>
</div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg mr-4">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Kovilpatti Solar Power Plant</h3>
                    <p className="text-lg text-orange-600 font-semibold">Grid-Connected Solar Power Plant</p>
                  </div>
                </div>

                {/* Key Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-gray-900">Capacity</span>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">25 MW</p>
                    <p className="text-sm text-gray-600">Mega Watt Power Generation</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-900">Timeline</span>
                    </div>
                    <p className="text-xl font-bold text-blue-600">3-6 months</p>
                    <p className="text-sm text-gray-600">Estimated Completion</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-900">Location</span>
                    </div>
                    <p className="text-lg font-bold text-green-600">Kovilpatti</p>
                    <p className="text-sm text-gray-600">Tamil Nadu</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center mb-2">
                      <Cog className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-900">Status</span>
                    </div>
                    <p className="text-lg font-bold text-purple-600">Under Construction</p>
                    <p className="text-sm text-gray-600">Active Development</p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200 mb-6">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-gray-900">Project Type</span>
                  </div>
                  <p className="text-lg font-bold text-yellow-600">Grid-Connected Solar Power Plant</p>
                  <p className="text-sm text-gray-600">Large-scale renewable energy infrastructure</p>
                </div>

                {/* Industrial Clients */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Factory className="h-5 w-5 text-gray-600 mr-2" />
                    Industrial Clients Served:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                      <Building2 className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm font-medium">Spinning Mills</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                      <Building2 className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700 text-sm font-medium">Casting Units</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                      <Building2 className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-700 text-sm font-medium">Iron Rod Manufacturers</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                      <Building2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-700 text-sm font-medium">Blue Metal Companies</span>
                    </div>
                  </div>
                </div>

                {/* Project Impact */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Project Impact:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    This large-scale solar project will supply sustainable power to various industrial clients 
                    across Tamil Nadu, significantly reducing carbon emissions and providing clean energy solutions 
                    for heavy industries. Expected to generate approximately 45 million units annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our successful solar installations across Tamil Nadu. From residential rooftops to large-scale commercial projects, advanced inverter rooms, battery storage systems, and innovative solar canopies.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Slideshow */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projectImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {projectImages.length}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-green-500' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-6 md:grid-cols-13 gap-2 mt-6">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-12 md:h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentSlide 
                      ? 'ring-2 ring-green-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with years of expertise to deliver solar solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial assessment to ongoing maintenance, we handle every step of your solar journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg mr-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;