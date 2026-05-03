import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Pursuing a Bachelor of Computer Applications degree at the Dr. Virendra Swarup Institute of Computer Studies, with an expected graduation date in 2027.',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Web Development Intern (FreeLancer)',
    subtitle: 'Frontend Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'AI & ML Intern (FreeLancer)',
    subtitle: 'Worked on various projects, including a portfolio website and an e-commerce platform.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'Mern Stack Trainee (FreeLancer)',
    subtitle: 'Worked on various projects, including a portfolio website and an e-commerce platform.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]
