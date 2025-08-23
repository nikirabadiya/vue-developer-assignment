export type Candidate = {
  id: string
  name: string
  title: string
  email: string
  phone: string
  location: string
  country: string
  city: string
  socialLinks: { name: string; src: string }[]
  tags: string[]
  fields: Record<string, string>
  jobs: { id: string; title: string; company: string; date: string; status: string }[]
  notes: { id: string; text: string; author: string; date: string }[]
}

const mock: Candidate = {
  id: 'cand-001',
  name: 'William Sample',
  title: 'Senior Product Manager',
  email: 'williamsample@gmail.com',
  phone: '+91 9021232326',
  location: 'Dallas',
  country: 'United States',
  city: 'Dallas',
  socialLinks: [
    {
      name: "Facebook",
      src: new URL("@/assets/images/facebook.svg", import.meta.url).href,
    },
    {
      name: "Twitter",
      src: new URL("@/assets/images/twitter.svg", import.meta.url).href,
    },
    {
      name: "LinkedIn",
      src: new URL("@/assets/images/linkedin.svg", import.meta.url).href,
    },
    {
      name: "GitHub",
      src: new URL("@/assets/images/github.svg", import.meta.url).href,
    },
    {
      name: "Xing",
      src: new URL("@/assets/images/xing.svg", import.meta.url).href,
    },
  ],
  tags: ['Contact Linked'],
  fields: {
    'Current Organization': 'World Bank Group',
    'Skills': 'HTML, CSS, Javascript',
    'Available From': 'Jul, 14, 2023',
    'Current Salary': '$6000',
    'Notice Period': '90 Days',
    'Full Address': '9400 Ashton Rd, Philadelphia, PA 19114, USA',
    'Resume': 'Resume',
    'Total Experience': '5 Years',
    'Summary': 'Current Organization',
    'Current Employment Status': 'Employed',
    'Date of Birth': '15 June 1993',
    'Relevant Experience': '7 Years',
    'Salary Expectation': '$9000',
    'Status': 'Submitted to Client',
    'Salary Type': 'Annual',
    'Language Skills': 'English(Elementary proficiency)'
  },
  jobs: [
    { id: 'j1', title: 'Senior Product Manager', company: 'Recruit CRM', date: 'Jul 10, 2023', status: 'Assigned' },
    { id: 'j2', title: 'Senior Product Manager', company: 'Recruit CRM', date: 'Jul 10, 2023', status: 'Assigned' },
    { id: 'j3', title: 'Senior Product Manager', company: 'Recruit CRM', date: 'Jul 10, 2023', status: 'Assigned' }
  ],
  notes: [
    { id: 'n1', text: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.', author: 'John Doe', date: 'Jul 12, 2023, 11:54 am' },
    { id: 'n2', text: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.', author: 'John Doe', date: 'Jul 12, 2023, 11:54 am' },
    { id: 'n3', text: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.', author: 'John Doe', date: 'Jul 12, 2023, 11:54 am' },
  ]
}

export function getCandidateById(id: string): Promise<Candidate> {
  return new Promise(resolve => setTimeout(() => resolve(mock), 400))
}

export function updateCandidate(payload: Partial<Candidate>): Promise<Candidate> {
  return new Promise(resolve => setTimeout(() => {
    Object.assign(mock, payload)
    resolve(mock)
  }, 400))
}
