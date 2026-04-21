import React, { useState, useEffect } from 'react';
import { User, Linkedin } from 'lucide-react';
import ExcomImages from '../assets/images/Excom';
import ChairImages from '../assets/images/Chairs';
import volunteerImages from '../assets/images/Teams/Volunteer';
import financeImages from '../assets/images/Teams/Finance';
import publicityImages from '../assets/images/Teams/Publicity';
import membershipImages from '../assets/images/Teams/MembershipDevelop';

// Fake API data for Executive Committee
const EXECUTIVE_COMMITTEE = [
  {
    id: 1,
    name: 'Chathumina Kalatuwage',
    position: 'Chairperson',
    image: ExcomImages.chairperson,
    linkedin: 'https://www.linkedin.com/in/chathumina-k-077808249/'
  },
  {
    id: 2,
    name: 'Senethmi Wickramanayake',
    position: 'Vice Chairperson',
    image: ExcomImages.viceChairperson,
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Mandira Polgampala',
    position: 'Secretary',
    image: ExcomImages.secretary,
    linkedin: 'https://www.linkedin.com/in/mandira-polgampala-969a86281/'
  },
  {
    id: 4,
    name: 'Shageeshan Thamodharam',
    position: 'Treasurer',
    image: ExcomImages.Treasurer,
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Thisula Lewhan',
    position: 'Webmaster',
    image: ExcomImages.Webmaster,
    linkedin: '#'
  },
  {
    id: 6,
    name: 'Nethuli Dahamna Hettiarachchi',
    position: 'Asst. Secretary',
    image: ExcomImages.asstSecretary,
    linkedin: '#'
  },
  {
    id: 7,
    name: 'Zakee Nowfal',
    position: 'Asst. Treasurer',
    image: ExcomImages.asstTreasurer,
    linkedin: '#'
  }
];

// Fake API data for Chapter Chairpersons with colored backgrounds
const CHAPTER_CHAIRS = [
  {
    id: 1,
    name: 'Hesara Perera',
    chapter: 'IEEE Computer Society',
    bgColor: '#E3F2FD',
    iconBg: '#2196F3',
    image: ChairImages.CS,
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Achira Karunarathne',
    chapter: 'IEEE Robotics and Automation Society',
    bgColor: '#fdcaffff',
    iconBg: '#c70285ff',
    image: ChairImages.RAS,
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Shafkhan Mohammed',
    chapter: 'IEEE Industry Applications Society',
    bgColor: '#F3E5F5',
    iconBg: '#9C27B0',
    image: ChairImages.IAS,
    linkedin: '#'
  },
  {
    id: 4,
    name: 'Pehansa Jaindi Ranasinghe',
    chapter: 'IEEE Women in Engineering',
    bgColor: '#FCE4EC',
    iconBg: '#E91E63',
    image: ChairImages.WIE,
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Janitha Mayadunna',
    chapter: 'IEEE Power and Energy Society',
    bgColor: '#FFF9C4',
    iconBg: '#FBC02D',
    image: ChairImages.PES,
    linkedin: '#'
  },
  {
    id: 6,
    name: 'Dayanita Goonewardane',
    chapter: 'IEEE Engineering in Medicine and Biology Society',
    bgColor: '#c3ffb4ff',
    iconBg: '#6eff4aff',
    image: ChairImages.EMBS,
    linkedin: '#'
  }
];

// Fake API data for Teams
const TEAMS_DATA = [
  {
    id: 2,
    teamName: 'Public Visibility Team',
    members: [
      { id: 1, name: 'Sithumya Dilruni', position: 'Team Lead', image: publicityImages.sithumya, linkedin: '#' },
      { id: 2, name: 'Daham Jayakody', position: 'Team Member', image: publicityImages.daham, linkedin: '#' },
      { id: 3, name: 'Yasith Tharuka', position: 'Team Member', image: publicityImages.yasith, linkedin: '#' }
    ]
  },
  {
    id: 3,
    teamName: 'Finance Team',
    members: [
      { id: 1, name: 'Yasiru Binuwara', position: 'Team Member', image: financeImages.yasiru, linkedin: '#' },
      { id: 2, name: 'Savinath Udawaththa', position: 'Team Member', image: financeImages.savinath, linkedin: '#' }
    ]
  },
  {
    id: 4,
    teamName: 'Membership Development Team',
    members: [
      { id: 1, name: 'Thevinu Premathilaka', position: 'Team Lead', image: membershipImages.thevinu, linkedin: '#' },
      { id: 2, name: 'Lakitha Keshan Gunawantha', position: 'Team Member', image: null, linkedin: '#' }
    ]
  },
  {
    id: 5,
    teamName: 'Volunteer Management Team',
    members: [
      { id: 1, name: 'Thavisha Dewmith', position: 'Team Lead', image: volunteerImages.thavisha, linkedin: '#' },
      { id: 2, name: 'K.P Yeshan', position: 'Team Member', image: volunteerImages.yeshan, linkedin: '#' },
      { id: 3, name: 'Sunjai Kajendrajith', position: 'Team Member', image: volunteerImages.sunjai, linkedin: '#' }
    ]
  }
];

// Branch Counsellor data
const BRANCH_COUNSELLOR = {
  name: 'Prof. Pradeep Abeygunawardana',
  position: 'Branch Counsellor',
  institution: 'Dean | Faculty of Computing | Information Technology',
  image: ExcomImages.proffesor
};

// Team Component
function TeamSection({ teamName, members }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-8">{teamName}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {members.map((member) => (
          <div 
            key={member.id} 
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mx-auto mb-5 flex items-center justify-center overflow-hidden shadow-md ring-4 ring-white">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <User size={48} className="text-gray-400" />
              )}
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{member.position}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] text-white transition-all duration-300 hover:bg-[#005885] ${
                  hoveredId === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <Linkedin size={18} />
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
            <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-md">
              {BRANCH_COUNSELLOR.image ? (
                <img src={BRANCH_COUNSELLOR.image} alt={BRANCH_COUNSELLOR.name} className="w-full h-full object-cover" />
              ) : (
                <User size={64} className="text-gray-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{BRANCH_COUNSELLOR.name}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-2">{BRANCH_COUNSELLOR.position}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{BRANCH_COUNSELLOR.institution}</p>
          </div>
        </div>
      </div>

      {/* Executive Committee Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Executive Committee</h2>
            <div className="w-16 h-1 bg-[#0066CC] mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  onMouseEnter={() => setHoveredExecId(member.id)}
                  onMouseLeave={() => setHoveredExecId(null)}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mx-auto mb-5 flex items-center justify-center overflow-hidden shadow-md ring-4 ring-white">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={48} className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#0066CC] font-medium mb-3">{member.position}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] text-white transition-all duration-300 hover:bg-[#005885] ${
                        hoveredExecId === member.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chapter Chairpersons Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Chapter <span style={{ borderBottom: '3px solid #0066CC', paddingBottom: '2px' }}>Chairpersons</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {chairs.map((chair) => (
                <div 
                  key={chair.id} 
                  className="rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-white"
                  style={{ backgroundColor: chair.bgColor }}
                  onMouseEnter={() => setHoveredChairId(chair.id)}
                  onMouseLeave={() => setHoveredChairId(null)}
                >
                  <div 
                    className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center shadow-md"
                    style={{ backgroundColor: chair.iconBg }}
                  >
                    <User size={28} className="text-white" />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-white mx-auto mb-5 flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-white">
                    {chair.image ? (
                      <img src={chair.image} alt={chair.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={48} className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{chair.name}</h3>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed mb-3">{chair.chapter}</p>
                  {chair.linkedin && (
                    <a
                      href={chair.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0077B5] text-white transition-all duration-300 hover:bg-[#005885] ${
                        hoveredChairId === chair.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Our Teams Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
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