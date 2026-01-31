import { useState } from 'react';
import { X, Users, Award, Camera, ExternalLink, Clock } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const applications = [
  {
    id: 'chair',
    title: 'Chair Applications',
    description: 'Apply to lead a committee as a Chair or Co-Chair. Shape debates, guide delegates, and make a lasting impact on Armonia MUN.',
    icon: Award,
    status: 'open',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeDeOwpys4J0mXjJNbYGmMUUIWb0DOlLBMfr_FosPVsjRQcbg/viewform',
    buttonText: 'Apply Now',
    requirements: [
      'Previous MUN experience preferred',
      'Strong knowledge of parliamentary procedure',
      'Leadership and communication skills',
      'Commitment to both conference days'
    ]
  },
  {
    id: 'delegate',
    title: 'Delegate Applications',
    description: 'Join as a delegate and represent a country in one of our six committees. Debate, negotiate, and draft resolutions.',
    icon: Users,
    status: 'coming-soon',
    link: '#',
    buttonText: 'Coming Soon',
    requirements: [
      'Open to all experience levels',
      'Interest in international affairs',
      'Willingness to research and prepare',
      'Active participation in debates'
    ]
  },
  {
    id: 'admin',
    title: 'Admin/Photographer Applications',
    description: 'Be part of the behind-the-scenes team. Help with logistics, capture memorable moments, and ensure smooth operations.',
    icon: Camera,
    status: 'coming-soon',
    link: '#',
    buttonText: 'Coming Soon',
    requirements: [
      'Photography skills (for photographers)',
      'Organizational abilities (for admin)',
      'Team player mentality',
      'Availability during conference'
    ]
  }
];

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApply = (app: typeof applications[0]) => {
    if (app.status === 'open' && app.link !== '#') {
      window.open(app.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-vanilla via-vanilla to-khaki rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bistre/10 hover:bg-bistre/20 transition-colors"
        >
          <X className="w-6 h-6 text-bistre" />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-6 px-6 border-b border-caput-mortuum/20">
          <h2 className="text-3xl md:text-4xl font-bold text-caput-mortuum font-cinzel mb-2">
            Join Armonia MUN
          </h2>
          <p className="text-bistre/70 max-w-2xl mx-auto">
            Choose your role and become part of the harmony. Whether you want to lead, debate, or support, 
            there's a place for you at Armonia MUN '26.
          </p>
        </div>

        {/* Application Cards */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app) => {
              const Icon = app.icon;
              const isOpen = app.status === 'open';
              const isHovered = hoveredCard === app.id;

              return (
                <div
                  key={app.id}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    isHovered ? 'transform scale-105 shadow-xl' : 'shadow-lg'
                  } ${isOpen ? 'ring-2 ring-flame' : ''}`}
                  onMouseEnter={() => setHoveredCard(app.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Status Badge */}
                  {isOpen ? (
                    <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      OPEN
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-bistre/60 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      SOON
                    </div>
                  )}

                  {/* Card Content */}
                  <div className={`h-full flex flex-col ${
                    isOpen 
                      ? 'bg-gradient-to-br from-caput-mortuum to-flame' 
                      : 'bg-gradient-to-br from-bistre/80 to-bistre/60'
                  }`}>
                    {/* Icon Header */}
                    <div className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-full mb-4 ${
                        isOpen ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-cinzel mb-2">
                        {app.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {app.description}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div className="flex-1 bg-white/95 p-4">
                      <h4 className="text-xs font-bold text-bistre/60 uppercase tracking-wider mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {app.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-bistre/80">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isOpen ? 'bg-flame' : 'bg-bistre/40'
                            }`} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="p-4 bg-white/95">
                      <button
                        onClick={() => handleApply(app)}
                        disabled={!isOpen}
                        className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                          isOpen
                            ? 'bg-gradient-to-r from-caput-mortuum to-flame text-white hover:shadow-lg hover:scale-105'
                            : 'bg-bistre/20 text-bistre/50 cursor-not-allowed'
                        }`}
                      >
                        {app.buttonText}
                        {isOpen && <ExternalLink className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-bistre/60 text-sm">
              📧 Questions? Contact us at{' '}
              <a href="mailto:armoniamun@gmail.com" className="text-flame hover:underline">
                armoniamun@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
