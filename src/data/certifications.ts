import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    title: 'Web Development Diploma',
    issuer: 'STP Computer Education',
    issueDate: 'Sep 2024 – Sep 2025',
    grade: 'B',
    type: 'Diploma',
    image: new URL('../assets/certificates/web-development-diploma.jpg', import.meta.url).href,
    downloadUrl: new URL('../assets/certificates/web-development-diploma.pdf', import.meta.url).href,
    verified: true
  },
  {
    title: 'HTML Certificate',
    issuer: 'STP Computer Education',
    issueDate: '25-Aug-2023',
    grade: 'A',
    type: 'Certificate',
    image: new URL('../assets/certificates/html-certificate.jpg', import.meta.url).href,
    downloadUrl: new URL('../assets/certificates/html-certificate.pdf', import.meta.url).href,
    verified: true
  },
  {
    title: 'CSS Certificate',
    issuer: 'STP Computer Education',
    issueDate: '07-Oct-2023',
    grade: 'B',
    type: 'Certificate',
    image: new URL('../assets/certificates/css-certificate.jpg', import.meta.url).href,
    downloadUrl: new URL('../assets/certificates/css-certificate.pdf', import.meta.url).href,
    verified: true
  },
  {
    title: 'JavaScript Certificate',
    issuer: 'STP Computer Education',
    issueDate: '13-Jul-2024',
    grade: 'A',
    type: 'Certificate',
    image: new URL('../assets/certificates/javascript-certificate.jpg', import.meta.url).href,
    downloadUrl: new URL('../assets/certificates/javascript-certificate.pdf', import.meta.url).href,
    verified: true
  }
];
