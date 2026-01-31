import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, FileText, BookOpen, Shirt, AlertCircle, Download } from 'lucide-react';

const rulesData = [
  {
    id: 'rop',
    title: 'Rules of Procedure',
    icon: BookOpen,
    content: [
      'All delegates must follow standard MUN Rules of Procedure.',
      'Delegates must raise their placards to be recognized by the Chair.',
      'Speaking time limits will be enforced strictly.',
      'Points of Order, Personal Privilege, and Parliamentary Inquiry are recognized.',
      'Motions must be seconded before being put to a vote.',
      'All resolutions must follow the proper format and be submitted through the official platform.',
      'Crisis notes in crisis committees must be submitted through designated channels.',
    ],
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    icon: AlertCircle,
    content: [
      'Treat all delegates, chairs, and staff with respect and dignity.',
      'No personal attacks or discriminatory language will be tolerated.',
      'Maintain diplomatic decorum at all times during committee sessions.',
      'Electronic devices must be silenced during sessions.',
      'No plagiarism in position papers or resolutions.',
      'Collaborate constructively with fellow delegates.',
      'Report any concerns to the Secretariat immediately.',
    ],
  },
  {
    id: 'dresscode',
    title: 'Dress Code',
    icon: Shirt,
    content: [
      'Western Business Attire is required for all committee sessions.',
      'Gentlemen: Suit with tie, dress shoes.',
      'Ladies: Business suit, formal dress, or blouse with dress pants/skirt.',
      'National/Cultural attire is welcomed and encouraged.',
      'Smart casual is acceptable for social events.',
      'No jeans, sneakers, or casual wear during formal sessions.',
    ],
  },
  {
    id: 'guidelines',
    title: 'Important Guidelines',
    icon: FileText,
    content: [
      'Arrive at least 15 minutes before each session.',
      'Bring your delegate badge and necessary materials to all sessions.',
      'Position papers must be submitted 48 hours before the conference.',
      'Stay in character during committee sessions.',
      'Meals will be provided during breaks - dietary requirements should be noted during registration.',
      'Photography and videography policies will be communicated separately.',
      'Emergency procedures will be briefed during the opening ceremony.',
    ],
  },
];

function AccordionItem({ item, isOpen, onClick, index }: { 
  item: typeof rulesData[0]; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-khaki/50 rounded-xl overflow-hidden bg-vanilla shadow-md hover:shadow-lg transition-shadow"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-khaki/10 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame to-caput-mortuum flex items-center justify-center">
            <item.icon className="w-6 h-6 text-vanilla" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-bistre">{item.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-flame" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <ul className="space-y-3 pl-16">
            {item.content.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-bistre/80">
                <span className="w-2 h-2 rounded-full bg-butterscotch mt-2 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Rules() {
  const [openItem, setOpenItem] = useState<string | null>('rop');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rules" className="py-24 bg-vanilla relative overflow-hidden">
      <div className="absolute inset-0 watercolor-section opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Rules & Procedures
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-flame to-butterscotch mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            Essential guidelines to ensure a productive and professional conference experience
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {rulesData.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openItem === item.id}
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              index={index}
            />
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-flame to-caput-mortuum rounded-2xl p-8 text-center text-vanilla shadow-xl"
        >
          <Download className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="font-serif text-2xl font-bold mb-2">Downloadable Resources</h3>
          <p className="text-vanilla/80 mb-6">
            Get the complete conference handbook with all rules and procedures
          </p>
          <button className="px-8 py-3 bg-vanilla text-flame rounded-full font-semibold hover:bg-khaki transition-colors shadow-lg">
            Download Handbook (Coming Soon)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
