import { Link } from 'react-router-dom';
import { Icon } from '../components/SiteIcon';
import './Commitee.css';
import ExcomImages from '../assets/images/Excom';
import ChairImages from '../assets/images/Chairs';
import volunteerImages from '../assets/images/Teams/Volunteer';
import financeImages from '../assets/images/Teams/Finance';
import publicityImages from '../assets/images/Teams/Publicity';
import membershipImages from '../assets/images/Teams/MembershipDevelop';
import editorialImages from '../assets/images/Teams/Editorial';
import webImages from '../assets/images/Teams/web';

// Existing V2 data for Executive Committee
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
    linkedin: 'http://www.linkedin.com/in/senethmi-wickramanayake-800b3029b'
  },
  {
    id: 3,
    name: 'Mandira Polgampala',
    position: 'Secretary',
    image: ExcomImages.secretary,
    linkedin: 'http://linkedin.com/in/mandira-polgampala-969a86281'
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
    linkedin: 'https://linkedin.com/in/thisula-lewhan'
  },
  {
    id: 6,
    name: 'Nethuli Dahamna Hettiarachchi',
    position: 'Asst. Secretary',
    image: ExcomImages.asstSecretary,
    linkedin: 'https://www.linkedin.com/in/nethuli-hettiarachchi-a25b86371/'
  },
  {
    id: 7,
    name: 'Zakee Nowfal',
    position: 'Asst. Treasurer',
    image: ExcomImages.asstTreasurer,
    linkedin: 'https://www.linkedin.com/in/mohammed-zakee'
  }
];

// Existing V2 data for Chapter Chairpersons with colored backgrounds
const CHAPTER_CHAIRS = [
  {
    id: 1,
    name: 'Hesara Perera',
    chapter: 'IEEE Computer Society',
    bgColor: '#E3F2FD',
    iconBg: '#2196F3',
    image: ChairImages.CS,
    linkedin: 'https://www.linkedin.com/in/hesaraperera/'
  },
  {
    id: 2,
    name: 'Achira Karunarathne',
    chapter: 'IEEE Robotics and Automation Society',
    bgColor: '#fdcaffff',
    iconBg: '#c70285ff',
    image: ChairImages.RAS,
    linkedin: 'https://www.linkedin.com/in/achira-karunarathne-401654366/'
  },
  {
    id: 3,
    name: 'Shafkhan Mohammed',
    chapter: 'IEEE Industry Applications Society',
    bgColor: '#F3E5F5',
    iconBg: '#9C27B0',
    image: ChairImages.IAS,
    linkedin: 'http://www.linkedin.com/in/shafkhan-mohammed'
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
    linkedin: 'https://www.linkedin.com/in/janitha-mayadunna-7720b7314?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    id: 6,
    name: 'Dayanita Goonewardane',
    chapter: 'IEEE Engineering in Medicine and Biology Society',
    bgColor: '#c3ffb4ff',
    iconBg: '#6eff4aff',
    image: ChairImages.EMBS,
    linkedin: 'https://www.linkedin.com/in/dayanita-goonewardanerdane-9a29672ab?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    id: 7,
    name: 'Hari Branavan',
    chapter: 'IEEE Communications Society',
    image: ChairImages.COMSOC,
    linkedin: 'https://www.linkedin.com/in/hari-branavan-arulnathan'
  }
];

// Existing V2 data for Teams
const TEAMS_DATA = [
  {
    id: 2,
    teamName: 'Public Visibility Team',
    members: [
      { id: 1, name: 'Sithumya Dilruni', position: 'Team Lead', image: publicityImages.sithumya, linkedin: 'https://www.linkedin.com/in/sithumya-dilruni-6007652b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
      { id: 2, name: 'Daham Jayakody', position: 'Team Member', image: publicityImages.daham, linkedin: 'https://www.linkedin.com/in/daham-jayakody?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
      { id: 3, name: 'Yasith Tharuka', position: 'Team Member', image: publicityImages.yasith, linkedin: 'https://www.linkedin.com/in/yasith-tharuka' }
    ]
  },
  {
    id: 3,
    teamName: 'Finance Team',
    members: [
      { id: 1, name: 'Yasiru Binuwara', position: 'Team Member', image: financeImages.yasiru, linkedin: 'https://www.linkedin.com/in/yasiru-vitharanage-92a4b3363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
      { id: 2, name: 'Savinath Udawaththa', position: 'Team Member', image: financeImages.savinath, linkedin: 'http://linkedin.com/in/savinath-udawaththa-b87061392' }
    ]
  },
  {
    id: 4,
    teamName: 'Membership Development Team',
    members: [
      { id: 2, name: 'Lakitha Keshan Gunawantha', position: 'Team Lead', image: membershipImages.lakitha, linkedin: '#' }
    ]
  },
  {
    id: 5,
    teamName: 'Volunteer Management Team',
    members: [
      { id: 1, name: 'Thavisha Dewmith', position: 'Team Lead', image: volunteerImages.thavisha, linkedin: 'https://www.linkedin.com/in/thavisha-dewmith-25324b216/' },
      { id: 2, name: 'K.P Yeshan', position: 'Team Member', image: volunteerImages.yeshan, linkedin: '#' },
      { id: 3, name: 'Sunjai Kajendrajith', position: 'Team Member', image: volunteerImages.sunjai, linkedin: 'https://www.linkedin.com/in/sunjai-kajendrajith-944a25215?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
    ]
  },
  {
    id: 6,
    teamName: 'Editorial Team',
    members: [
      { id: 3, name: 'Supun Dharmaratne', position: 'Team Lead', image: editorialImages.supun, linkedin: 'https://www.linkedin.com/in/supun-dharmaratne-41b7ab379' },
      { id: 1, name: 'Jayashan', position: 'Team Member', image: editorialImages.jayashan, linkedin: 'https://www.linkedin.com/in/jayashanmanodya' },
      { id: 2, name: 'Shagash Karthigeson', position: 'Team Member', image: editorialImages.shagash, linkedin: 'https://www.linkedin.com/in/shagash-karthigeson?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    ]
  },
  {
    id: 7,
    teamName: 'Web team',
    members: [
      { id: 1, name: 'Rishindu Weeramanthri', position: 'Team Lead', image: webImages.rishindu, linkedin: null },
      { id: 2, name: 'Kaveen Hasanga', position: 'Team Member', image: webImages.kaveen, linkedin: null },
      { id: 3, name: 'Punsith Rankalana', position: 'Team Member', image: webImages.punsith, linkedin: null },
      { id: 4, name: 'Risikesan Jagatheesan', position: 'Team Member', image: webImages.risikesan, linkedin: null },
      { id: 5, name: 'Shisham Ahamed', position: 'Team Member', image: webImages.shisham, linkedin: null }
    ]
  }
];

// Branch Counsellor data
const BRANCH_COUNSELLOR = {
  name: 'Prof. Anuradha Jayakody',
  position: 'Branch Counsellor',
  institution: 'Head of the Department of Computer Systems Engineering | Faculty of Computing',
  image: ExcomImages.professor
};


function MemberCard({ member }) {
  const profile = typeof member.linkedin === 'string' && /^https?:\/\//.test(member.linkedin) ? member.linkedin.replace(/^http:/, 'https:') : null;
  return <article className="person"><div className="portrait"><img src={member.image} alt={member.name} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.style.opacity = '0.5'; }} /></div><a className="linkedin-icon" href={profile || 'https://www.linkedin.com/search/results/people/?keywords=' + encodeURIComponent(member.name)} target="_blank" rel="noopener noreferrer" aria-label={profile ? member.name + ' on LinkedIn' : 'Find ' + member.name + ' on LinkedIn'}><Icon name="linkedin" /></a><div className="person-copy"><h3>{member.name}</h3><p className="member-role">{member.position || member.chapter}</p></div></article>;
}
function TeamSection({ title, members }) {
  return <section className="committee-team"><div className="section-head"><h2>{title}</h2></div><div className="people-grid">{members.map(member => <MemberCard key={member.id} member={member} />)}</div></section>;
}
export default function CommitteePage() {
  return <article data-page="committee"><div className="wrap"><header className="page-heading"><h1>The people behind<br />the possibilities</h1><p>Meet the students who bring our community together</p></header><section className="counselor"><div className="portrait"><img src={BRANCH_COUNSELLOR.image} alt={BRANCH_COUNSELLOR.name} decoding="async" /></div><div className="counselor-copy"><p className="counselor-role">{BRANCH_COUNSELLOR.position}</p><h2>{BRANCH_COUNSELLOR.name}</h2><p>{BRANCH_COUNSELLOR.institution}</p></div></section><TeamSection title="Executive committee" members={EXECUTIVE_COMMITTEE} /><TeamSection title="Chapter chairpersons" members={CHAPTER_CHAIRS} />{TEAMS_DATA.map(team => <TeamSection key={team.id} title={team.teamName} members={team.members} />)}<aside className="oc-banner"><div><h3>There’s a future leader in you</h3><p>Begin as a volunteer and discover where the experience takes you</p></div><Link className="button" to="/contact?subject=volunteer">Get involved</Link></aside></div></article>;
}
