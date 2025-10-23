import React, { useState, useEffect } from 'react';
import { User, Linkedin } from 'lucide-react';

// Fake API data for Executive Committee
const EXECUTIVE_COMMITTEE = [
  {
    id: 1,
    name: 'Mahdy Nawfar',
    position: 'Chairperson',
    image: null,
    linkedin: 'https://linkedin.com/in/manoj-hettler'
  },
  {
    id: 2,
    name: 'Chathumina Kalatuwage',
    position: 'Vice Chairperson',
    image: null,
    linkedin: 'https://linkedin.com/in/chaithanya-kaluarachchi'
  },
  {
    id: 3,
    name: 'Senujee Wickramasooriya',
    position: 'Secretary',
    image: null,
    linkedin: 'https://linkedin.com/in/senuja-wickramasinghe'
  },
  {
    id: 4,
    name: 'Mandira Polgampala',
    position: 'Asst.Secretary',
    image: null,
    linkedin: 'https://linkedin.com/in/mandira-peliagoda'
  },
  {
    id: 5,
    name: 'Harindu Mallawaarachchi',
    position: 'Treasurer',
    image: null,
    linkedin: 'https://linkedin.com/in/harisha-malawarachchi'
  },
  {
    id: 6,
    name: 'Kaveen Pasindumal',
    position: 'Webmaster',
    image: null,
    linkedin: 'https://linkedin.com/in/kasun-peirishamal'
  }
];

// Fake API data for Chapter Chairpersons with colored backgrounds
const CHAPTER_CHAIRS = [
  {
    id: 1,
    name: 'Azri Muhsim',
    chapter: 'Computer Society',
    bgColor: '#E3F2FD',
    iconBg: '#2196F3',
    image: null,
    linkedin: 'https://linkedin.com/in/azni-nazath'
  },
  {
    id: 2,
    name: 'Kavedu Wirakus',
    chapter: 'IEEE Women In Engineering',
    bgColor: '#E8F5E9',
    iconBg: '#4CAF50',
    image: null,
    linkedin: 'https://linkedin.com/in/kavedu-wirakus'
  },
  {
    id: 3,
    name: 'Vihda Wirayudha',
    chapter: 'IEEE Industrial Applications Society',
    bgColor: '#F3E5F5',
    iconBg: '#9C27B0',
    image: null,
    linkedin: 'https://linkedin.com/in/vihda-wirayudha'
  },
  {
    id: 4,
    name: 'Yashoda Abegunthy',
    chapter: 'IEEE Women In Engineering',
    bgColor: '#FCE4EC',
    iconBg: '#E91E63',
    image: null,
    linkedin: 'https://linkedin.com/in/yashoda-abegunthy'
  },
  {
    id: 5,
    name: 'Dinush Wijesooara',
    chapter: 'IEEE Power & Energy Society',
    bgColor: '#FFF9C4',
    iconBg: '#FBC02D',
    image: null,
    linkedin: 'https://linkedin.com/in/dinush-wijesooara'
  }
];

// Fake API data for Teams
const TEAMS_DATA = [
  {
    id: 1,
    teamName: 'Editorial Team',
    members: [
      { id: 1, name: 'Chamika Lakshan', position: 'Leader', image: null, linkedin: 'https://linkedin.com/in/chandni-lalithan' },
      { id: 2, name: 'Isira Sahanjith', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/nish-ekanayth' },
      { id: 3, name: 'Kavinga Aluvihare', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/kashiga-aludhara' }
    ]
  },
  {
    id: 2,
    teamName: 'Publicity Team',
    members: [
      { id: 1, name: 'Thisuri Peiris', position: 'Leader', image: null, linkedin: 'https://linkedin.com/in/thisara-perera' },
      { id: 2, name: 'Niruna Karunarathne', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/nirosi-karunarathne' },
      { id: 3, name: 'Thisula Lewhan', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/thisara-leekan' }
    ]
  },
  {
    id: 3,
    teamName: 'Finance Team',
    members: [
      { id: 1, name: 'Kaveen Hettiarachchi', position: 'Leader', image: null, linkedin: 'https://linkedin.com/in/kaveen-hettiarachchi' }
    ]
  },
  {
    id: 4,
    teamName: 'Logistics Team',
    members: [
      { id: 1, name: 'Linal de zoysa', position: 'Leader', image: null, linkedin: 'https://linkedin.com/in/lisad-du-zoysa' },
      { id: 2, name: 'HATHIM M.J.M', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/harsha-mjm' },
      { id: 3, name: 'Kusal Senevirathna', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/kasul-seevadiththa' }
    ]
  },
  {
    id: 5,
    teamName: 'Volunteer Management Team',
    members: [
      { id: 1, name: 'Shahaam Marzook', position: 'Leader', image: null, linkedin: 'https://linkedin.com/in/shakindu-nimesh' },
      { id: 2, name: 'Ruwanya Athukorala', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/ranunya-shihabudu' },
      { id: 3, name: 'Thavisha Wimalarathne', position: 'Member', image: null, linkedin: 'https://linkedin.com/in/thanuka-jayasingha' }
    ]
  }
];

// Branch Counsellor data
const BRANCH_COUNSELLOR = {
  name: 'Prof. Pradeep Abeygunawardana',
  position: 'Branch Counsellor',
  institution: 'Dean | Faculty of Computing | Information Technology',
  image: null
};

// Team Component
function TeamSection({ teamName, members }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{teamName}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {members.map((member) => (
          <div 
            key={member.id} 
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition relative"
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <User size={32} className="text-gray-400" />
              )}
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{member.position}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077B5] text-white transition-all duration-300 ${
                  hoveredId === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CommitteePage() {
  const [executives, setExecutives] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredExecId, setHoveredExecId] = useState(null);
  const [hoveredChairId, setHoveredChairId] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setExecutives(EXECUTIVE_COMMITTEE);
      setChairs(CHAPTER_CHAIRS);
      setTeams(TEAMS_DATA);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="text-white relative overflow-hidden"
        style={{
          width: '100%',
          minHeight: '280px',
          background: 'linear-gradient(135deg, #0052CC, #0066CC)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '60px 20px'
        }}
      >
        {/* Decorative circles */}
        <div 
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            top: '-50px',
            left: '10%'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            bottom: '-30px',
            right: '15%'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Committee of IEEE<br />Student Branch of SLIIT
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Meet the innovative minds leading the IEEE Student Branch at SLIIT. Driven by passion and creativity, our committee members work together to inspire, lead, and empower the next generation of tech pioneers.
          </p>
        </div>
      </div>

      {/* Branch Counsellor Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
              {BRANCH_COUNSELLOR.image ? (
                <img src={BRANCH_COUNSELLOR.image} alt={BRANCH_COUNSELLOR.name} className="w-full h-full object-cover" />
              ) : (
                <User size={40} className="text-gray-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{BRANCH_COUNSELLOR.name}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-2">{BRANCH_COUNSELLOR.position}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{BRANCH_COUNSELLOR.institution}</p>
          </div>
        </div>
      </div>

      {/* Executive Committee Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Executive Committee</h2>
            <div className="w-16 h-1 bg-[#0066CC] mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {executives.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
                  onMouseEnter={() => setHoveredExecId(member.id)}
                  onMouseLeave={() => setHoveredExecId(null)}
                >
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={32} className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#0066CC] font-medium mb-2">{member.position}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077B5] text-white transition-all duration-300 ${
                        hoveredExecId === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chapter Chairpersons Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Chapter <span style={{ borderBottom: '3px solid #0066CC', paddingBottom: '2px' }}>Chairpersons</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chairs.map((chair) => (
                <div 
                  key={chair.id} 
                  className="rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
                  style={{ backgroundColor: chair.bgColor }}
                  onMouseEnter={() => setHoveredChairId(chair.id)}
                  onMouseLeave={() => setHoveredChairId(null)}
                >
                  <div 
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: chair.iconBg }}
                  >
                    <User size={24} className="text-white" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-sm">
                    {chair.image ? (
                      <img src={chair.image} alt={chair.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={32} className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{chair.name}</h3>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed mb-2">{chair.chapter}</p>
                  {chair.linkedin && (
                    <a
                      href={chair.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077B5] text-white transition-all duration-300 ${
                        hoveredChairId === chair.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Our Teams Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Teams</h2>
            <div className="w-16 h-1 bg-[#0066CC] mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
            </div>
          ) : (
            <div>
              {teams.map((team) => (
                <TeamSection 
                  key={team.id}
                  teamName={team.teamName}
                  members={team.members}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Spacing at bottom */}
      <div className="h-12"></div>
    </div>
  );
}