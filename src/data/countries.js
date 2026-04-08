export const countries = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    description: 'Canada is consistently ranked as one of the best countries in the world for international students and immigrants.',
    fullDescription: 'Canada offers a high quality of life, diverse culture, and excellent educational institutions. With its welcoming immigration policies, it remains a top choice for students and professionals worldwide.',
    benefits: [
      'Post-Graduation Work Permit (PGWP) for up to 3 years',
      'Pathways to Permanent Residency (PR)',
      'High-quality education at affordable tuition fees',
      'Universal healthcare and social security',
      'Safe and inclusive environment'
    ],
    requirements: [
      'Valid Passport',
      'Letter of Acceptance from a Designated Learning Institution (DLI)',
      'Proof of Financial Support',
      'Language Proficiency (IELTS/PTE/TOEFL)',
      'Statement of Purpose (SOP)',
      'Medical Examination'
    ],
    process: [
      { step: 1, title: 'University Selection', description: 'Choose the right course and university that fits your goals.' },
      { step: 2, title: 'Apply for Admission', description: 'Submit your application to the chosen university and receive an Offer Letter.' },
      { step: 3, title: 'GIC Account', description: 'Open a Guaranteed Investment Certificate (GIC) account for financial proof.' },
      { step: 4, title: 'Visa Application', description: 'Submit your Study Permit application via the SDS or Non-SDS stream.' },
      { step: 5, title: 'Biometrics & Medical', description: 'Complete your biometric enrollment and medical check-up.' },
      { step: 6, title: 'Visa Approval', description: 'Receive your Passport Request (PPR) and Visa Approval.' }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    description: 'Australia offers a world-class education system, vibrant lifestyle, and abundant career opportunities.',
    fullDescription: 'Australia is home to several top-ranked universities globally. Its strong economy and demand for skilled labor make it an ideal destination for both study and work.',
    benefits: [
      'Work rights while studying (up to 48 hours per fortnight)',
      'Extended Post-Study Work (PSW) rights',
      'High minimum wage and standard of living',
      'Diverse range of courses and research opportunities',
      'Great weather and outdoor lifestyle'
    ],
    requirements: [
      'Confirmation of Enrolment (CoE)',
      'Genuine Student (GS) requirement',
      'English Language Proficiency (IELTS/PTE/TOEFL)',
      'Overseas Student Health Cover (OSHC)',
      'Proof of Funds for living and tuition costs',
      'Valid Passport and identity documents'
    ],
    process: [
      { step: 1, title: 'Course Selection', description: 'Identify the best course and institution for your career path.' },
      { step: 2, title: 'Submit Application', description: 'Apply to the university and secure your Offer Letter.' },
      { step: 3, title: 'Pay Tuition Fees', description: 'Pay the first semester fees to receive your CoE.' },
      { step: 4, title: 'OSHC & Docs', description: 'Arrange your health insurance and prepare visa documents.' },
      { step: 5, title: 'Visa Submission', description: 'Lodge your Subclass 500 Visa application.' },
      { step: 6, title: 'Grant & Travel', description: 'Receive your visa grant and prepare for departure.' }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    description: 'The UK is home to some of the oldest and most prestigious universities in the world.',
    fullDescription: 'Study in the UK to gain a globally recognized degree and experience a rich cultural heritage. UK universities are known for their research excellence and innovative teaching.',
    benefits: [
      '1-year Masters programs available',
      '2-year Graduate Route (Post-study work)',
      'World-renowned academic reputation',
      'Gateway to Europe and global networking',
      'Rich history and cultural diversity'
    ],
    requirements: [
      'Confirmation of Acceptance for Studies (CAS)',
      'English Proficiency (IELTS for UKVI)',
      'Financial Proof (Maintenance funds)',
      'Tuberculosis (TB) test results',
      'Valid Passport',
      'Academic Transcripts and Certificates'
    ],
    process: [
      { step: 1, title: 'University Research', description: 'Research universities and courses that match your profile.' },
      { step: 2, title: 'Application & Offer', description: 'Apply via UCAS or directly to get your Offer Letter.' },
      { step: 3, title: 'Credibility Interview', description: 'Clear the university\'s internal interview if required.' },
      { step: 4, title: 'CAS Request', description: 'Apply for and receive your CAS letter.' },
      { step: 5, title: 'Visa Application', description: 'Submit your Student Visa (Tier 4) application.' },
      { step: 6, title: 'Biometrics & Visa', description: 'Attend the VFS center for biometrics and receive your visa.' }
    ]
  },
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop',
    description: 'The USA offers the widest range of courses, research opportunities, and career prospects.',
    fullDescription: 'American universities are at the forefront of innovation and technology. The US education system is flexible and offers numerous opportunities for personal and professional growth.',
    benefits: [
      'Optional Practical Training (OPT) for up to 3 years (STEM)',
      'Largest economy with top global employers',
      'Wide range of scholarships and financial aid',
      'Innovative research and networking environment',
      'Diverse and multi-cultural campus life'
    ],
    requirements: [
      'I-20 Form from a SEVP-certified school',
      'SEVIS Fee Payment',
      'Standardized Tests (GRE/GMAT/SAT if required)',
      'English Proficiency (TOEFL/IELTS/PTE)',
      'Strong Financial Documentation',
      'F-1 Visa Interview at the Embassy'
    ],
    process: [
      { step: 1, title: 'University Shortlisting', description: 'Find universities that match your academic and budget profile.' },
      { step: 2, title: 'Tests & Applications', description: 'Take required tests and submit applications with SOP/LORs.' },
      { step: 3, title: 'Receive I-20', description: 'Accept the offer and receive your I-20 document.' },
      { step: 4, title: 'SEVIS & DS-160', description: 'Pay the SEVIS fee and complete the DS-160 visa form.' },
      { step: 5, title: 'Interview Booking', description: 'Schedule your biometrics and F-1 visa interview.' },
      { step: 6, title: 'Visa Interview', description: 'Attend the interview and get your visa approved.' }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
    description: 'Germany is known for its high-quality education and low to zero tuition fees at public universities.',
    fullDescription: 'Germany is a hub for engineering and technology. It offers an excellent standard of living and strong economic prospects for skilled professionals.',
    benefits: [
      'Free or low tuition fees at public universities',
      'Strong focus on practical and research-based learning',
      '18-month Post-Study Work visa',
      'High demand for engineers and tech experts',
      'Central European location for travel and work'
    ],
    requirements: [
      'Admission Letter from a German University',
      'Blocked Account (Finanzierungsnachweis)',
      'English or German Language Proficiency',
      'Academic Credits matching German standards',
      'Health Insurance coverage',
      'Valid Passport'
    ],
    process: [
      { step: 1, title: 'Uni-Assist/Direct Apply', description: 'Evaluate your credentials and apply via Uni-Assist or directly.' },
      { step: 2, title: 'Admission Grant', description: 'Receive your Zulassungsbescheid (Letter of Admission).' },
      { step: 3, title: 'Blocked Account', description: 'Open a Blocked Account to show financial sufficiency.' },
      { step: 4, title: 'APS Certificate', description: 'Obtain the APS certificate (if applicable for your region).' },
      { step: 5, title: 'Visa Appointment', description: 'Apply for a National Visa at the German Embassy/Consulate.' },
      { step: 6, title: 'Arrival & Residence', description: 'Arrive in Germany and apply for a Residence Permit.' }
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    description: 'France offers world-class education and a rich cultural experience in the heart of Europe.',
    fullDescription: 'Study in France to experience a high standard of living, prestigious universities, and a culture that values innovation and creativity.',
    benefits: [
      'Relatively low tuition fees at public universities',
      'Extensive government subsidies for students',
      'Opportunity to learn French, a major global language',
      'Post-study work rights for graduates',
      'Central location in Europe for easy travel'
    ],
    requirements: [
      'Acceptance letter from a French institution',
      'Campus France registration (if applicable)',
      'Proof of financial resources (approx. €615/month)',
      'English or French language proficiency',
      'Valid Passport and residence proof',
      'Medical insurance'
    ],
    process: [
      { step: 1, title: 'Choose Program', description: 'Select a program and university that matches your academic goals.' },
      { step: 2, title: 'Campus France', description: 'Register with Campus France and complete the application process.' },
      { step: 3, title: 'Admission Offer', description: 'Receive your official admission letter from the institution.' },
      { step: 4, title: 'Financial Prep', description: 'Prepare documents to prove you have sufficient funds for your stay.' },
      { step: 5, title: 'Visa Application', description: 'Apply for a Long-stay Student Visa (VLS-TS).' },
      { step: 6, title: 'OFII Validation', description: 'Validate your visa with the OFII upon arrival in France.' }
    ]
  },
  {
    id: 'denmark',
    name: 'Denmark',
    flag: '🇩🇰',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200&auto=format&fit=crop',
    description: 'Denmark is known for its high-quality education, sustainable lifestyle, and happiest citizens.',
    fullDescription: 'Denmark offers a unique learning environment with a focus on critical thinking and collaboration. It is a leader in green energy and design.',
    benefits: [
      'High academic standards and innovative teaching',
      'Safe and student-friendly environment',
      'Opportunity to work part-time (up to 20 hours/week)',
      'Post-study work permit (up to 3 years)',
      'Excellent quality of life and work-life balance'
    ],
    requirements: [
      'Letter of admission from a Danish university',
      'Proof of English language proficiency',
      'Financial proof (approx. DKK 6,397/month)',
      'Valid Passport',
      'Proof of paid tuition fees (if applicable)',
      'Residence permit application form (ST1)'
    ],
    process: [
      { step: 1, title: 'Find Program', description: 'Choose a program and university in Denmark.' },
      { step: 2, title: 'Application', description: 'Submit your application directly to the university.' },
      { step: 3, title: 'Admission', description: 'Receive your admission letter and pay the tuition fee if required.' },
      { step: 4, title: 'ST1 Form', description: 'Start your residence permit application using the ST1 form.' },
      { step: 5, title: 'Biometrics', description: 'Provide your biometrics at a Danish visa application center.' },
      { step: 6, title: 'Permit Approval', description: 'Receive your residence permit and prepare for your move.' }
    ]
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop',
    description: 'New Zealand offers a world-class education in a stunning natural environment.',
    fullDescription: 'New Zealand universities are globally recognized for their research and teaching excellence. It is a safe and welcoming country with a high quality of life.',
    benefits: [
      'Globally recognized qualifications',
      'Stunning natural landscapes and outdoor activities',
      'Friendly and inclusive society',
      'Post-study work rights (up to 3 years)',
      'High level of support for international students'
    ],
    requirements: [
      'Offer of place from an approved education provider',
      'Proof of funds for tuition and living costs',
      'English language proficiency (IELTS/PTE)',
      'Medical and travel insurance',
      'Valid Passport',
      'Chest X-ray and medical certificate (if required)'
    ],
    process: [
      { step: 1, title: 'Select Course', description: 'Identify the right course and university for your career.' },
      { step: 2, title: 'Apply for Place', description: 'Apply to the institution and secure your offer of place.' },
      { step: 3, title: 'Tuition Payment', description: 'Pay your tuition fees and receive a receipt.' },
      { step: 4, title: 'Visa Application', description: 'Submit your student visa application online or via paper.' },
      { step: 5, title: 'Medical & Character', description: 'Provide medical certificates and police clearances if needed.' },
      { step: 6, title: 'Visa Grant', description: 'Receive your student visa and start your journey.' }
    ]
  }
];
