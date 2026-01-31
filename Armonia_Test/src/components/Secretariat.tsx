import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Linkedin, User, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Secretariat member data with Cloudinary-hosted photos
// Add custom song URLs when provided

const secretariatMembers = [
  // Tier 1 - Leadership
  {
    name: 'Rajnish Teketi',
    position: 'Secretary-General',
    musicalTitle: 'The Conductor',
    bio: 'Leading the Armonia MUN orchestra, orchestrating every aspect of our conference. As the Secretary-General, Rajnish brings vision and leadership to create an unforgettable MUN experience.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100427_aetiaj.jpg',
    linkedin: null,
    tier: 1,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886138/Chris_Grey_-_LET_THE_WORLD_BURN_Official_Lyric_Video_lgw3cc.mp3',
    songTitle: 'Let The World Burn - Chris Grey',
  },
  {
    name: 'Adit Suri',
    position: 'Deputy Secretary-General',
    musicalTitle: 'The Composer',
    bio: 'Composing the perfect conference experience alongside the Secretary-General. Adit ensures every element of Armonia MUN harmonizes beautifully.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100431_teqvap.jpg',
    linkedin: null,
    tier: 1,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886141/DARLING_I_Official_Video_lu7dpk.mp3',
    songTitle: 'Darling I',
  },
  {
    name: 'Anshuman Dushyanth',
    position: 'Director-General',
    musicalTitle: 'The Producer',
    bio: 'Producing and overseeing the academic quality of all committee sessions. Anshuman ensures our debates reach the highest standards of excellence.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/1000100418_ypuguz.jpg',
    linkedin: null,
    tier: 1,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886140/Lana_Del_Rey_-_West_Coast_c7yuba.mp3',
    songTitle: 'West Coast - Lana Del Rey',
  },
  {
    name: 'Nabeeha Fatma',
    position: 'Director-General',
    musicalTitle: 'The Producer',
    bio: 'Producing and overseeing the academic quality of all committee sessions. Nabeeha brings expertise and dedication to elevating our academic experience.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100420_qnkydx.jpg',
    linkedin: null,
    tier: 1,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886139/The_Cardigans_-_Lovefool_Official_Music_Video_xram07.mp3',
    songTitle: 'Lovefool - The Cardigans',
  },
  // Tier 2 - Department Heads
  {
    name: 'Vyom Gupta',
    position: 'Crisis Director',
    musicalTitle: 'The Improviser',
    bio: 'Mastering the art of spontaneous diplomacy, creating dynamic challenges for delegates. Vyom keeps everyone on their toes with unexpected twists.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/crisis-director_diizxt.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886110/Maroon_5_-_This_Love_vzl13v.mp3',
    songTitle: 'This Love - Maroon 5',
  },
  {
    name: 'Shohaima Akhtar',
    position: 'Head of Logistics',
    musicalTitle: 'Stage Manager',
    bio: 'Managing all logistical elements to ensure a seamless conference experience. Shohaima ensures everything runs like clockwork behind the scenes.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/1000100430_lwv072.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886118/Kanye_West_-_Can_t_Tell_Me_Nothing_ubf7kj.mp3',
    songTitle: "Can't Tell Me Nothing - Kanye West",
  },
  {
    name: 'Advait Vijayvergiya',
    position: 'Head of Finance',
    musicalTitle: 'The Patron',
    bio: 'Overseeing financial operations and sponsorship relations. Advait ensures our conference has the resources to create something extraordinary.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/1000100417_ddicfn.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886106/The_Smashing_Pumpkins_-_Disarm_Lyrics_mbzzrf.mp3',
    songTitle: 'Disarm - The Smashing Pumpkins',
  },
  {
    name: 'Ayaan Basheer',
    position: 'Head of Delegate Affairs',
    musicalTitle: 'Concertmaster',
    bio: 'Leading delegate relations and ensuring an outstanding experience for all participants. Ayaan is your go-to person for all delegate needs.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/1000100426_xdoey5.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886114/Billy_Marchiafava_-_Disco_Type_Beat_Lyric_Video_r0dqcz.mp3',
    songTitle: 'Disco Type Beat - Billy Marchiafava',
  },
  {
    name: 'Saira Sam',
    position: 'Head of Content',
    musicalTitle: 'The Lyricist',
    bio: 'Crafting the narrative and substance that gives our conference its voice. Saira writes the words that inspire and inform.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100425_em07sr.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886109/Mac_Miller_-_Come_Back_To_Earth_dfbuhg.mp3',
    songTitle: 'Come Back To Earth - Mac Miller',
  },
  {
    name: 'Zeina Alhumouz',
    position: 'Head of Media',
    musicalTitle: 'The Archivist',
    bio: 'Capturing and preserving the memories of Armonia MUN through various media. Zeina ensures every moment is documented beautifully.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100419_rcmirl.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886123/Frankie_Valli_-_Can_t_Take_My_Eyes_Off_You_Official_Audio_y0mufo.mp3',
    songTitle: "Can't Take My Eyes Off You - Frankie Valli",
  },
  {
    name: 'Zainab Arsal',
    position: 'Head of Media',
    musicalTitle: 'The Archivist',
    bio: 'Capturing and preserving the memories of Armonia MUN through various media. Zainab brings creative vision to our visual storytelling.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/1000092590_pgjutm.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886120/Getaway_Car_nhbasa.mp3',
    songTitle: 'Getaway Car - Taylor Swift',
  },
  {
    name: 'Ragavan Pillai',
    position: 'Head of Public Relations',
    musicalTitle: 'The Promoter',
    bio: 'Spreading the word about Armonia MUN across platforms and communities. Ragavan builds the connections that amplify our message.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/1000100423_zcxcvn.jpg',
    linkedin: null,
    tier: 2,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886118/Melly_Mike_-_Young_Black_Rich_CLEAN_p3lnbv.mp3',
    songTitle: 'Young Black Rich - Melly Mike',
  },
  // Tier 3 - Team Members
  {
    name: 'Aaryan Sukumaran',
    position: 'Member of Finance',
    musicalTitle: 'Budgeteer',
    bio: 'Supporting the financial harmony of the conference with meticulous attention. Aaryan helps keep our finances in perfect tune.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100422_ipp8sq.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886107/Do_Not_Disturb_yhaf1i.mp3',
    songTitle: 'Do Not Disturb - Drake',
  },
  {
    name: 'Arya Limaye',
    position: 'Member of Delegate Affairs',
    musicalTitle: 'Section Representative',
    bio: 'Ensuring every delegate receives the support they need to perform their best. Arya is dedicated to your conference experience.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/1000100424_yzwweo.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886113/Backstreet_Boys_-_I_Want_It_That_Way_Official_HD_Video_nmrnfq.mp3',
    songTitle: 'I Want It That Way - Backstreet Boys',
  },
  {
    name: 'Purvi Khanchandani',
    position: 'Content Member',
    musicalTitle: 'The Scribe',
    bio: 'Weaving words and ideas into compelling content that resonates. Purvi crafts the stories that bring Armonia MUN to life.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100421_buuatt.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886112/Sahiba_Lyrics_-_Aditya_Rikhari_saahiba_aaye_ghar_kaahe_na_w8q981.mp3',
    songTitle: 'Sahiba - Aditya Rikhari',
  },
  {
    name: 'Michelle Joseph',
    position: 'Media Member',
    musicalTitle: 'The Recorder',
    bio: 'Documenting every moment, capturing the essence of Armonia MUN. Michelle preserves our memories in stunning detail.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/1000100428_yakpzg.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886121/Four_Tops_-_Baby_I_Need_Your_Loving_1966_HQ_0815007_veqist.mp3',
    songTitle: 'Baby I Need Your Loving - Four Tops',
  },
  {
    name: 'Erica Dourado',
    position: 'Media Member',
    musicalTitle: 'The Recorder',
    bio: 'Documenting every moment, capturing the essence of Armonia MUN. Erica brings artistic flair to our visual documentation.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866559/1000100433_daal7u.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886119/Dominic_Fike_-_Politics_Violence_Official_Video_cpvwuy.mp3',
    songTitle: 'Politics & Violence - Dominic Fike',
  },
  {
    name: 'Jia Vaswani',
    position: 'PR Member',
    musicalTitle: 'The Messenger',
    bio: 'Spreading the word and building connections that amplify our reach. Jia ensures Armonia MUN reaches every corner.',
    image: 'https://res.cloudinary.com/dctufbj8d/image/upload/v1769866560/1000100429_hdjphn.jpg',
    linkedin: null,
    tier: 3,
    song: 'https://res.cloudinary.com/dctufbj8d/video/upload/v1769886116/The_Weeknd_-_Cry_For_Me_bwm0vi.mp3',
    songTitle: 'Cry For Me - The Weeknd',
  },
];

// Member Modal Component with custom song player
function MemberModal({ 
  member, 
  isOpen, 
  onClose 
}: { 
  member: typeof secretariatMembers[0]; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getGradient = () => {
    switch (member.tier) {
      case 1: return 'from-flame to-caput-mortuum';
      case 2: return 'from-caput-mortuum to-flame';
      default: return 'from-butterscotch to-khaki';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bistre/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-vanilla rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-caput-mortuum/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${getGradient()} p-6 relative`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-vanilla/80 hover:text-vanilla transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-vanilla/30 overflow-hidden shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-vanilla">
                  <h3 className="font-serif text-2xl font-bold">{member.name}</h3>
                  <p className="text-vanilla/90 font-semibold">{member.position}</p>
                  <p className="text-vanilla/70 italic text-sm">"{member.musicalTitle}"</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="font-serif text-lg text-caput-mortuum mb-2">About</h4>
              <p className="text-bistre/80 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Custom Song Player */}
              {member.song ? (
                <div className="bg-gradient-to-r from-caput-mortuum/10 to-flame/10 rounded-xl p-4 border border-caput-mortuum/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-caput-mortuum text-vanilla flex items-center justify-center hover:bg-flame transition-colors shadow-lg"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <div>
                        <p className="text-bistre font-semibold text-sm">{member.songTitle || 'Theme Song'}</p>
                        <p className="text-bistre/60 text-xs">{member.name}'s Pick</p>
                      </div>
                    </div>
                    <button
                      onClick={toggleMute}
                      className="text-bistre/60 hover:text-caput-mortuum transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Audio waveform animation */}
                  {isPlaying && (
                    <div className="flex items-end justify-center gap-1 mt-3 h-8">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-caput-mortuum rounded-full"
                          animate={{
                            height: [8, Math.random() * 24 + 8, 8],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
                  <audio ref={audioRef} src={member.song} loop />
                </div>
              ) : (
                <div className="bg-gradient-to-r from-khaki/30 to-butterscotch/20 rounded-xl p-4 border border-khaki/40 text-center">
                  <p className="text-bistre/60 text-sm italic">🎵 Theme song coming soon...</p>
                </div>
              )}

              {/* LinkedIn */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-caput-mortuum hover:text-flame transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Connect on LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SecretariatCard({ member, index }: { member: typeof secretariatMembers[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getBorderColor = () => {
    switch (member.tier) {
      case 1: return 'border-flame';
      case 2: return 'border-caput-mortuum';
      default: return 'border-butterscotch/50';
    }
  };

  const getGradient = () => {
    switch (member.tier) {
      case 1: return 'from-flame to-caput-mortuum';
      case 2: return 'from-caput-mortuum to-flame';
      default: return 'from-butterscotch to-khaki';
    }
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        onClick={() => setIsModalOpen(true)}
        className={`bg-vanilla rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border-2 ${getBorderColor()} cursor-pointer`}
      >
        <div className="p-6 text-center">
          {/* Photo */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden`}>
              {member.image && !imageError ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <User className="w-12 h-12 text-vanilla/80" />
              )}
            </div>
            {/* Music note decoration */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-butterscotch flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <span className="text-bistre font-bold text-sm">♪</span>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-serif text-lg font-bold text-bistre mb-1">
            {member.name}
          </h3>

          {/* Position */}
          <p className="text-caput-mortuum font-semibold text-sm mb-1">{member.position}</p>

          {/* Musical Title */}
          <p className="text-xs text-bistre/60 italic mb-3">"{member.musicalTitle}"</p>

          {/* Click to expand hint */}
          <p className="text-xs text-flame/70 group-hover:text-flame transition-colors">
            Click to learn more ♫
          </p>

          {/* LinkedIn */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-khaki/30 hover:bg-caput-mortuum hover:text-vanilla text-bistre transition-colors mt-3"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>

      <MemberModal 
        member={member} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export function Secretariat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tier1Members = secretariatMembers.filter(m => m.tier === 1);
  const tier2Members = secretariatMembers.filter(m => m.tier === 2);
  const tier3Members = secretariatMembers.filter(m => m.tier === 3);

  return (
    <section id="secretariat" className="py-24 bg-gradient-to-b from-khaki/20 to-vanilla relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Meet the Secretariat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-flame mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            The talented individuals behind Armonia MUN, each playing their unique part 
            in our symphony of diplomacy. Click on any card to learn more!
          </p>
        </motion.div>

        {/* Tier 1 - Leadership */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-2xl text-caput-mortuum text-center mb-8"
          >
            ♫ Leadership ♫
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tier1Members.map((member, index) => (
              <SecretariatCard key={`${member.position}-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Tier 2 - Department Heads */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-2xl text-flame text-center mb-8"
          >
            ♪ Department Heads ♪
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tier2Members.map((member, index) => (
              <SecretariatCard key={`${member.position}-${index}`} member={member} index={index + tier1Members.length} />
            ))}
          </div>
        </div>

        {/* Tier 3 - Team Members */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-serif text-2xl text-butterscotch text-center mb-8"
          >
            ♩ Team Members ♩
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tier3Members.map((member, index) => (
              <SecretariatCard key={`${member.position}-${index}`} member={member} index={index + tier1Members.length + tier2Members.length} />
            ))}
          </div>
        </div>

        {/* Musical Positions Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-vanilla rounded-2xl shadow-lg p-8 border border-caput-mortuum/20"
        >
          <h4 className="font-serif text-xl text-bistre text-center mb-6">
            🎵 The Armonia Orchestra - Musical Metaphors 🎵
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            <div className="text-center p-3 bg-gradient-to-br from-caput-mortuum/10 to-flame/10 rounded-lg">
              <p className="font-semibold text-caput-mortuum">The Conductor</p>
              <p className="text-bistre/60 text-xs">Secretary-General</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-caput-mortuum/10 to-flame/10 rounded-lg">
              <p className="font-semibold text-caput-mortuum">The Composer</p>
              <p className="text-bistre/60 text-xs">Deputy SG</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-caput-mortuum/10 to-flame/10 rounded-lg">
              <p className="font-semibold text-caput-mortuum">The Producer</p>
              <p className="text-bistre/60 text-xs">Director-General</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">The Improviser</p>
              <p className="text-bistre/60 text-xs">Crisis Director</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">Stage Manager</p>
              <p className="text-bistre/60 text-xs">Head of Logistics</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">Concertmaster</p>
              <p className="text-bistre/60 text-xs">Head of Delegate Affairs</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">The Lyricist</p>
              <p className="text-bistre/60 text-xs">Head of Content</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">The Archivist</p>
              <p className="text-bistre/60 text-xs">Head of Media</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">The Patron</p>
              <p className="text-bistre/60 text-xs">Head of Finance</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-flame/10 to-butterscotch/10 rounded-lg">
              <p className="font-semibold text-flame">The Promoter</p>
              <p className="text-bistre/60 text-xs">Head of PR</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-butterscotch/10 to-khaki/20 rounded-lg">
              <p className="font-semibold text-butterscotch">The Recorder</p>
              <p className="text-bistre/60 text-xs">Media Members</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-butterscotch/10 to-khaki/20 rounded-lg">
              <p className="font-semibold text-butterscotch">The Messenger</p>
              <p className="text-bistre/60 text-xs">PR Member</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
