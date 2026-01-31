import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Scale, Music, AlertTriangle, Target, Flag, ChevronDown, ChevronUp } from 'lucide-react';

const committees = [
  {
    acronym: 'UNSC',
    name: 'United Nations Security Council',
    topic: 'Topic to be announced',
    description: 'The primary organ responsible for the maintenance of international peace and security. Delegates will address critical global security challenges.',
    icon: Shield,
    color: 'from-flame to-caput-mortuum',
    borderColor: 'border-flame',
  },
  {
    acronym: 'UNHRC',
    name: 'United Nations Human Rights Council',
    topic: 'Topic to be announced',
    description: 'Responsible for strengthening the promotion and protection of human rights around the globe and for addressing situations of human rights violations.',
    icon: Scale,
    color: 'from-butterscotch to-flame',
    borderColor: 'border-butterscotch',
  },
  {
    acronym: 'MCC',
    name: 'Musical Crisis Committee',
    topic: 'Topic to be announced',
    description: 'A unique crisis committee with a musical twist! Experience dynamic, fast-paced diplomacy where delegates must adapt to evolving scenarios.',
    icon: Music,
    color: 'from-caput-mortuum to-bistre',
    borderColor: 'border-caput-mortuum',
    special: true,
  },
  {
    acronym: 'UNODC',
    name: 'United Nations Office on Drugs and Crime',
    topic: 'Topic to be announced',
    description: 'The global leader in the fight against illicit drugs and international crime, working to make the world safer from drugs, crime, and terrorism.',
    icon: AlertTriangle,
    color: 'from-flame to-butterscotch',
    borderColor: 'border-flame',
  },
  {
    acronym: 'GA1 (DISEC)',
    name: 'General Assembly First Committee - Disarmament and International Security',
    topic: 'Topic to be announced',
    description: 'Deals with disarmament, global challenges, and threats to peace that affect the international community.',
    icon: Target,
    color: 'from-bistre to-caput-mortuum',
    borderColor: 'border-bistre',
  },
  {
    acronym: 'F1',
    name: 'Formula 1 Crisis Committee',
    topic: 'Topic to be announced',
    description: 'A high-octane crisis committee where delegates navigate the fast-paced world of motorsport politics and international racing governance.',
    icon: Flag,
    color: 'from-butterscotch to-caput-mortuum',
    borderColor: 'border-butterscotch',
  },
];

function CommitteeCard({ committee, index }: { committee: typeof committees[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-vanilla rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${committee.borderColor} overflow-hidden group hover:-translate-y-2`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${committee.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
            <committee.icon className="w-7 h-7 text-vanilla" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-xl font-bold text-bistre">{committee.acronym}</h3>
              {committee.special && (
                <span className="px-2 py-0.5 bg-caput-mortuum text-vanilla text-xs rounded-full font-medium">
                  Special
                </span>
              )}
            </div>
            <p className="text-sm text-bistre/70 mt-1">{committee.name}</p>
          </div>
        </div>

        {/* Topic */}
        <div className="bg-khaki/20 rounded-lg p-3 mb-4">
          <p className="text-xs text-flame font-semibold uppercase tracking-wider mb-1">Topic</p>
          <p className="text-bistre font-medium">{committee.topic}</p>
        </div>

        {/* Expandable Description */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-flame hover:text-caput-mortuum transition-colors"
        >
          <span className="text-sm font-medium">Learn More</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-bistre/70 text-sm mt-3 pt-3 border-t border-khaki/30">
            {committee.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Committees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="committees" className="py-24 bg-vanilla relative overflow-hidden">
      <div className="absolute inset-0 watercolor-section opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Our Committees
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-flame to-butterscotch mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            Six diverse committees offering unique perspectives on global issues, 
            from traditional UN bodies to creative crisis simulations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <CommitteeCard key={committee.acronym} committee={committee} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
