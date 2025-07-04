import React from 'react';
import { UserCheck, CheckCircle } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ms. ______',
      role: 'Founder, V SMART POWER SOLUTIONS',
      image: '/WhatsApp Image 2025-07-04 at 13.12.37_8ce572581.jpg',
      iconColor: 'from-green-600 to-emerald-500',
      points: [
        'Founder of V SMART based in Trichy',
        '15+ years in solar EPC and project management',
        'Pioneer in Tamil Nadu solar sector with turnkey delivery',
        'Mentor for solar entrepreneurship and green projects'
      ]
    },
    {
      name: 'Mr. Nivaz',
      role: 'Branch Manager, Kovilpatti Division',
      image: '/kvpmanager.jpg',
      iconColor: 'from-blue-600 to-indigo-500',
      points: [
        'Leads local solar EPC operations at Kovilpatti',
        'Expert in site coordination, logistics, and approvals',
        'Handles industrial and residential client acquisition',
        'Manages local O&M and customer support'
      ]
    },
    {
      name: 'Mr. Abhisek',
      role: 'Junior Marketing Head, Local Division',
      image: '/maket head.jpg',
      iconColor: 'from-orange-500 to-yellow-500',
      points: [
        'Drives grassroots solar awareness campaigns',
        'Manages lead generation and local partnerships',
        'Creative strategist for promotions and outreach',
        'Key face for youth engagement in green energy'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Team</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the passionate professionals leading VSB’s mission of clean energy excellence.
          </p>
        </div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Responsive Image Container */}
                <div className="w-full h-64 sm:h-72 md:h-80 lg:h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${member.iconColor} p-3 rounded-lg mr-4`}>
                      <UserCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-lg text-green-600 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {member.points.map((point, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
